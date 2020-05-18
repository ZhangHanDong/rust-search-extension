const c = new Compat();
const crateSearcher = new CrateSearch(mapping, crateIndex);
const attributeSearcher = new AttributeSearch();
const bookSearcher = new BookSearch(booksIndex);
const lintSearcher = new LintSearch(lintsIndex);
const stdSearcher = new StdSearch(searchIndex);
const crateDocSearchManager = new CrateDocSearchManager();
const commandManager = new CommandManager([
    new HelpCommand(),
    new BookCommand(),
    new YetCommand(),
    new StableCommand(),
    new ToolCommand(),
    new LabelCommand(labelsIndex),
]);

const defaultSuggestion = `Search std ${c.match("docs")}, external ${c.match("docs")} (@), ${c.match("crates")} (!), ${c.match("attributes")} (#), ${c.match("books")} (%), clippy ${c.match("lints")} (>), and ${c.match("error codes")}, etc in your address bar instantly!`;
const omnibox = new Omnibox(defaultSuggestion, c.omniboxPageSize());

let formatDoc = (index, doc) => {
    let description = doc.displayPath + c.match(doc.name);
    if (doc.desc) {
        description += " - " + c.dim(c.escape(doc.desc));
    }
    return {content: doc.href, description};
};

omnibox.bootstrap({
    onSearch: (query) => {
        return stdSearcher.search(query);
    },
    onFormat: formatDoc,
    onAppend: (query) => {
        return [{
            content: stdSearcher.getSearchUrl(query),
            description: `Search Rust docs ${c.match(query)} on ${settings.isOfflineMode ? "offline mode" : stdSearcher.rootPath}`,
        }];
    },
    beforeNavigate: (content) => {
        if (content && /^@.\w+$/i.test(content.trim())) {
            // Case: @crate, redirect to that crate's docs.rs page
            return `https://docs.rs/${content.replace("@", "")}`;
        } else if (content && /^https?.*\/~\/\*\/.*/ig.test(content)) {
            // Sanitize docs url which from all crates doc search mode. (Prefix with "~")
            // Here is the url instance: https://docs.rs/~/*/reqwest/fn.get.html
            let [_, __, crateName] = new URL(content).pathname.slice(1).split("/");
            let crateVersion = CrateDocSearchManager.getCrates()[crateName].version;
            return content.replace("/~/", `/${crateName}/`).replace("/*/", `/${crateVersion}/`);
        } else {
            return content;
        }
    },
    afterNavigated: (query, result) => {
        HistoryCommand.record(query, result);
    }
});

omnibox.addPrefixQueryEvent("~", {
    onSearch: (query) => {
        return crateDocSearchManager.searchAll(query);
    },
    onFormat: formatDoc,
});

omnibox.addPrefixQueryEvent("@", {
    onSearch: (query) => {
        return crateDocSearchManager.search(query);
    },
    onFormat: (index, item) => {
        if (item.hasOwnProperty("content")) {
            // 1. Crate list header.
            // 2. Crate result footer
            return item;
        } else if (item.hasOwnProperty("href")) {
            return formatDoc(index, item);
        } else {
            // Crate name list.
            let content = `@${item.name}`;
            return {
                content,
                description: `${c.match(content)} v${item.version} - ${c.dim(item.doc)}`,
            }
        }
    },
});

omnibox.addPrefixQueryEvent("!", {
    defaultSearch: true,
    searchPriority: 1,
    onSearch: (query) => {
        this.docMode = query.startsWith("!!");
        return crateSearcher.search(query);
    },
    onFormat: (index, crate) => {
        return {
            content: this.docMode ? `https://docs.rs/${crate.id}` : `https://${settings.crateRegistry}/crates/${crate.id}`,
            description: `${c.capitalize(this.docMode ? "docs.rs" : settings.crateRegistry)}: ${c.match(crate.id)} v${crate.version} - ${c.dim(c.escape(crate.description))}`,
        };
    },
    onAppend: (query) => {
        let keyword = query.replace(/[!\s]/g, "");
        return [{
            content: "https://crates.io/search?q=" + encodeURIComponent(keyword),
            description: "Search Rust crates for " + c.match(keyword) + " on https://crates.io",
        }, {
            content: "remind",
            description: `Remind: ${c.dim("We only indexed the top 20K crates. Sorry for the inconvenience if your desired crate not show.")}`,
        }];
    }
});

omnibox.addPrefixQueryEvent("#", {
    defaultSearch: true,
    searchPriority: 2,
    deduplicate: true,
    onSearch: (query) => {
        return attributeSearcher.search(query);
    },
    onFormat: (index, attribute) => {
        return {
            content: attribute.href,
            description: `Attribute: ${c.match("#[" + attribute.name + "]")} ${c.dim(attribute.description)}`,
        }
    }
});

omnibox.addRegexQueryEvent(/e\d{2,4}$/i, {
    onSearch: (query) => {
        let baseIndex = parseInt(query.slice(1).padEnd(4, '0'));
        let result = [];
        for (let index = 0; index < 10; index++) {
            let errorIndex = 'E' + String(baseIndex++).padStart(4, "0").toUpperCase();
            result.push(errorIndex);
        }
        return result;
    },
    onFormat: (index, errorCode) => {
        return {
            content: "https://doc.rust-lang.org/error-index.html#" + errorCode,
            description: `Search Rust error index for ${c.match(errorCode)} on https://doc.rust-lang.org/error-index.html`,
        };
    }
});

omnibox.addPrefixQueryEvent("%", {
    onSearch: (query) => {
        return bookSearcher.search(query);
    },
    onFormat: (index, page) => {
        let parentTitles = page.parentTitles || [];
        return {
            content: page.url,
            description: `${[...parentTitles.map(t => c.escape(t)), c.match(c.escape(page.title))].join(" > ")} - ${c.dim(page.name)}`
        }
    }
});

const LINT_URL = "https://rust-lang.github.io/rust-clippy/master/";
omnibox.addPrefixQueryEvent(">", {
    onSearch: (query) => {
        return lintSearcher.search(query);
    },
    onFormat: (index, lint) => {
        return {
            content: `${LINT_URL}#${lint.name}`,
            description: `Clippy lint: [${lint.level}] ${c.match(lint.name)} - ${c.dim(c.escape(lint.description))}`,
        }
    },
});

omnibox.addPrefixQueryEvent(":", {
    onSearch: (query) => {
        return commandManager.execute(query);
    },
});

omnibox.addNoCacheQueries("!", "@", ":");

let fileNewIssue = "title=Have you found a bug? Did you feel something was missing?&body=Whatever it was, we'd love to hear from you.";
chrome.runtime.setUninstallURL(
    `https://github.com/huhu/rust-search-extension/issues/new?${encodeURI(fileNewIssue)}`
);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.action) {
        case "check": {
            let crates = CrateDocSearchManager.getCrates();
            sendResponse(crates[message.crateName]);
            break;
        }
        case "add": {
            CrateDocSearchManager.addCrate(message.crateName, message.crateVersion, message.searchIndex);
            crateDocSearchManager.initAllCrateSearcher();
            sendResponse(true);
            break;
        }
        case "remove": {
            CrateDocSearchManager.removeCrate(message.crateName);
            crateDocSearchManager.initAllCrateSearcher();
            sendResponse(true);
            break;
        }
    }
    return true;
});

window.crateSearcher = crateSearcher;