
![](assets/rustacean.gif)

# Rust Search Extension

![Chrome Web Store](https://img.shields.io/chrome-web-store/v/ennpfpdlaclocpomkiablnmbppdnlhoh.svg)
![Mozilla Add-on](https://img.shields.io/amo/v/rust-search-extension?color=%2320123A)
[![rust-doc](https://img.shields.io/badge/stable-1.39.0-yellow.svg)](https://doc.rust-lang.org/1.39.0/std/)
[![license-mit](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Folyd/rust-search-extension/blob/master/LICENSE-MIT)
[![license-apache](https://img.shields.io/badge/license-Apache-yellow.svg)](https://github.com/Folyd/rust-search-extension/blob/master/LICENSE-APACHE)
![Build Status](https://github.com/folyd/rust-search-extension/workflows/build/badge.svg)

🦀 A handy browser extension to search crates and docs in the address bar (omnibox).

[https://folyd.github.io/rust-search-extension](https://folyd.github.io/rust-search-extension)

### Installation

- [Chrome Web Store](https://chrome.google.com/webstore/detail/rust-search-extension/ennpfpdlaclocpomkiablnmbppdnlhoh)

- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/rust-search-extension/)

### Features

- Search Primitive Types and Modules
- Search Structs, Traits and Enums
- Search Functions, Methods and Macros
- Search crates on https://crates.io
- Search [Compiler Error Index](https://doc.rust-lang.org/error-index.html) with error code
- Offline mode, search local Rust docs (`rustup docs --std`) (Some limitation on Firefox, see [Caveats](#caveats))
- Both Chrome and Firefox are supported

### Usages

Input keyword **rs** in the address bar, press `Tab` or `Space` to activate the search bar. Then enter any word 
you want to search, the extension will response the related search results instantly.

![demonstration.gif](assets/demonstration.gif)

### [How the extension works](https://folyd.github.io/rust-search-extension/how-it-works/)

#### 1. Build *search index*

The raw *search index* was generated by **rustc-doc**. The most important function is `build_index()` which 
located at [librustdoc/html/render/cache.rs](https://github.com/rust-lang/rust/blob/master/src/librustdoc/html/render/cache.rs).

The final *search index* is an object array like this:

```js
var searchIndex = [
    {
      crate: "std",
      desc: "A hash map implemented with linear probing and Robin Hood bucket stealing.",
      name: "HashMap",
      parent: undefined,
      path: "std::collections",
      ty: 3,
      type: null
    },
    {
      crate: "std",
      desc: "Applies function to the elements of iterator and returns the first non-none result.",
      name: "find_map",
      parent: {ty: 8, name: "Iterator"},
      path: "std::iter",
      ty: 11,
      type: [["self"],["f"]]
    },
    ...
];
```
 
#### 2. Build *search words array* based on *search index*

The *search words array* is the list of search words to query against which build from the raw *search index*.
It's just a plain name array of every Rust structs, traits, enums, functions, methods, macros, etc.
```js
var searchWords = [
    "result", 
    "option", 
    "hashmap", 
    "hashset", 
    "clone", 
    "copy", 
    "display", 
    "debug",
    ...
];
```

#### 3. Search keyword in *search words array*

Using *Levenshtein distance* algorithm to search matched words, the max Levenshtein distance is 2.

```js
// Max levenshtein distance.
var MAX_LEV_DISTANCE = 2;
```

#### 4. Sort *search result* 

Sort search result according to *Levenshtein distance*, lexicographical and others metrics.

#### 5. Transform *search result* to *suggestion result* to show in the address bar

Mapping the *search word* and *search index* to generate the *search result*, build Rust doc link for each result item.

```js
var suggestResults = [
    {
      content: "https://doc.rust-lang.org/std/ops/trait.Deref.html",
      description: "std::ops::<match>Deref</match> - <dim>Used for immutable dereferencing operations, like `*v`.</dim>"
    },
    {
      content: "https://doc.rust-lang.org/std/ops/trait.Deref.html#tymethod.deref",
      description: "std::ops::Deref::<match>deref</match> - <dim>Dereferences the value.</dim>"
    },
    ...
];
```

### Caveats

#### 1. Why local `file:` rust doc not work properly on Firefox?

For security reasons, in Firefox, `file:` URLs is an unprivileged URL, accessing to those unprivileged URLs are prohibited. 
See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create) for more detail.

#### 2. Any workaround to support offline mode on Firefox?

Sure. A good choice is use http server! For example using python **http.server** module:

```sh
$ cd your-rust-doc-directory
$ python -m http.server
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

Then set `http://0.0.0.0:8000` as your local doc path.
