var C=["Allow","Deprecated","Nothing. This lint has been deprecated.","Detects enumeration variants that are prefixed or suffixed\nby the same characters."];var lintsIndex={"if_let_redundant_pattern_matching":[C[1],C[2]],"inefficient_to_string":["Warn","Checks for usage of .to_string() on an &&T where\nT implements ToString directly (like &&str or &&Str"],"bad_bit_mask":["Deny","Checks for incompatible bit masks in comparisons.\n\nThe formula for detecting if an expression of the"],"comparison_chain":["Warn","Checks comparison chains written with if that can be\nrewritten with match and cmp."],"inline_always":[C[0],"Checks for items annotated with #[inline(always)],\nunless the annotated function is empty or simply "],"iterator_step_by_zero":["Deny","Checks for calling .step_by(0) on iterators which panics."],"shadow_same":[C[0],"Checks for bindings that shadow other bindings already in\nscope, while just changing reference level"],"useless_let_if_seq":["Warn","Checks for variable declarations immediately followed by a\nconditional affectation."],"match_same_arms":[C[0],"Checks for match with identical arm bodies."],"redundant_closure_for_method_calls":[C[0],"Checks for closures which only invoke a method on the closure\nargument and can be replaced by refere"],"main_recursion":["Warn","Checks for recursion using the entrypoint."],"redundant_pattern_matching":["Warn","Lint for redundant pattern matching over Result or\nOption"],"double_must_use":["Warn","Checks for a [#[must_use]] attribute without\nfurther information on functions and methods that retur"],"range_plus_one":[C[0],"Checks for exclusive ranges where 1 is added to the\nupper bound, e.g., x..(y+1)."],"suspicious_arithmetic_impl":["Deny","Lints for suspicious operations in impls of arithmetic operators, e.g.\nsubtracting elements in an Ad"],"unit_arg":["Warn","Checks for passing a unit value as an argument to a function without using a\nunit literal (())."],"unused_unit":["Warn","Checks for unit (()) expressions that can be removed."],"needless_pass_by_value":[C[0],"Checks for functions taking arguments by value, but not\nconsuming them in its\nbody."],"option_and_then_some":["Warn","Checks for usage of _.and_then(|x| Some(y))."],"ifs_same_cond":["Deny","Checks for consecutive ifs with the same condition."],"logic_bug":["Deny","Checks for boolean expressions that contain terminals that\ncan be eliminated."],"decimal_literal_representation":[C[0],"Warns if there is a better representation for a numeric literal."],"string_to_string":[C[1],C[2]],"unnecessary_operation":["Warn","Checks for expression statements that can be reduced to a\nsub-expression."],"while_let_on_iterator":["Warn","Checks for while let expressions on iterators."],"empty_line_after_outer_attr":[C[0],"Checks for empty lines after outer attributes"],"identity_conversion":["Warn","Checks for always-identical Into/From/IntoIter conversions."],"missing_inline_in_public_items":[C[0],"it lints if an exported function, method, trait method with default impl,\nor trait method impl is no"],"unneeded_wildcard_pattern":["Warn","Checks for tuple patterns with a wildcard\npattern (_) is next to a rest pattern (..).\n\n_NOTE_: While"],"borrowed_box":["Warn","Checks for use of &Box<T> anywhere in the code."],"option_expect_used":[C[0],"Checks for .expect() calls on Options."],"iter_nth":["Warn","Checks for use of .iter().nth() (and the related\n.iter_mut().nth()) on standard library types with O"],"option_option":["Warn","Checks for use of Option<Option<_>> in function signatures and type\ndefinitions"],"maybe_infinite_iter":[C[0],"Checks for iteration that may be infinite."],"forget_ref":["Deny","Checks for calls to std::mem::forget with a reference\ninstead of an owned value."],"manual_swap":["Warn","Checks for manual swapping."],"ok_expect":["Warn","Checks for usage of ok().expect(..)."],"modulo_one":["Deny","Checks for getting the remainder of a division by one."],"large_stack_arrays":[C[0],"Checks for local arrays that may be too large."],"infallible_destructuring_match":["Warn","Checks for matches being used to destructure a single-variant enum\nor tuple struct where a let will "],"needless_lifetimes":["Warn","Checks for lifetime annotations which can be removed by\nrelying on lifetime elision."],"unreachable":[C[0],"Checks for usage of unreachable!."],"for_loop_over_option":["Deny","Checks for for loops over Option values."],"debug_assert_with_mut_call":[C[0],"Checks for function/method calls with a mutable\nparameter in debug_assert!, debug_assert_eq! and deb"],"nonsensical_open_options":["Deny","Checks for duplicate open options as well as combinations\nthat make no sense."],"default_trait_access":[C[0],"Checks for literal calls to Default::default()."],"result_unwrap_used":[C[0],"Checks for .unwrap() calls on Results."],"option_unwrap_used":[C[0],"Checks for .unwrap() calls on Options."],"module_inception":["Warn","Checks for modules that have the same name as their\nparent module"],"result_expect_used":[C[0],"Checks for .expect() calls on Results."],"double_comparisons":["Warn","Checks for double comparisons that could be simplified to a single expression."],"if_same_then_else":["Deny","Checks for if/else with the same body as the *then* part\nand the *else* part."],"module_name_repetitions":[C[0],"Detects type names that are prefixed or suffixed by the\ncontaining module's name."],"range_zip_with_len":["Warn","Checks for zipping a collection with the range of\n0.._.len()."],"inherent_to_string":["Warn","Checks for the definition of inherent methods with a signature of to_string(&self) -> String."],"possible_missing_comma":["Deny","Checks for possible missing comma in an array. It lints if\nan array element is a binary operator exp"],"builtin_type_shadow":["Warn","Warns if a generic shadows a built-in type."],"try_err":["Warn","Checks for usages of Err(x)?."],"manual_memcpy":["Warn","Checks for for-loops that manually copy items between\nslices that could be optimized by having a mem"],"match_as_ref":["Warn","Checks for match which is used to add a reference to an\nOption value."],"path_buf_push_overwrite":[C[0],"* Checks for [push](https://doc.rust-lang.org/std/path/struct.PathBuf.html#method.push)\ncalls on Pat"],"ref_in_deref":["Warn","Checks for references in expressions that use\nauto dereference."],"get_unwrap":[C[0],"Checks for use of .get().unwrap() (or\n.get_mut().unwrap) on a standard library type which implements"],"or_fun_call":["Warn","Checks for calls to .or(foo(..)), .unwrap_or(foo(..)),\netc., and suggests to use or_else, unwrap_or_"],"cast_ref_to_mut":["Deny","Checks for casts of &T to &mut T anywhere in the code."],"borrow_interior_mutable_const":["Deny","Checks if const items which is interior mutable (e.g.,\ncontains a Cell, Mutex, AtomicXxxx, etc.) has"],"if_not_else":[C[0],"Checks for usage of ! or != in an if condition with an\nelse branch."],"question_mark":["Warn","Checks for expressions that could be replaced by the question mark operator."],"suspicious_map":["Warn","Checks for calls to map followed by a count."],"block_in_if_condition_stmt":["Warn","Checks for if conditions that use blocks containing\nstatements, or conditions that use closures with"],"unused_self":[C[0],"Checks methods that contain a self argument but don't use it"],"partialeq_ne_impl":["Warn","Checks for manual re-implementations of PartialEq::ne."],"new_without_default":["Warn","Checks for types with a fn new() -> Self method and no\nimplementation of\n[Default](https://doc.rust-"],"match_wild_err_arm":["Warn","Checks for arm which matches all errors with Err(_)\nand take drastic actions like panic!."],"unstable_as_slice":[C[1],C[2]],"zero_width_space":["Deny","Checks for the Unicode zero-width space in the code."],"result_map_unit_fn":["Warn","Checks for usage of result.map(f) where f is a function\nor closure that returns the unit type."],"clone_on_ref_ptr":[C[0],"Checks for usage of .clone() on a ref-counted pointer,\n(Rc, Arc, rc::Weak, or sync::Weak), and sugge"],"redundant_pattern":["Warn","Checks for patterns in the form name @ _."],"needless_borrowed_reference":["Warn","Checks for useless borrowed references."],"panicking_unwrap":["Deny","Checks for calls of unwrap[_err]() that will always fail."],"let_underscore_must_use":[C[0],"Checks for let _ = <expr>\nwhere expr is #[must_use]"],"float_cmp_const":[C[0],"Checks for (in-)equality comparisons on floating-point\nvalue and constant, except in functions calle"],"boxed_local":["Warn","Checks for usage of Box<T> where an unboxed T would\nwork fine."],"same_functions_in_if_condition":[C[0],"Checks for consecutive ifs with the same function call."],"expect_fun_call":["Warn","Checks for calls to .expect(&format!(...)), .expect(foo(..)),\netc., and suggests to use unwrap_or_el"],"multiple_crate_versions":[C[0],"Checks to see if multiple versions of a crate are being\nused."],"nonminimal_bool":["Warn","Checks for boolean expressions that can be written more\nconcisely."],"find_map":[C[0],"Checks for usage of _.find(_).map(_)."],"needless_borrow":[C[0],"Checks for address of operations (&) that are going to\nbe dereferenced immediately by the compiler."],"unnecessary_cast":["Warn","Checks for casts to the same type."],"expl_impl_clone_on_copy":[C[0],"Checks for explicit Clone implementations for Copy\ntypes."],"panic":[C[0],"Checks for usage of panic!."],"single_component_path_imports":["Warn","Checking for imports with single component use path."],"integer_division":[C[0],"Checks for division of integers"],"mem_replace_with_uninit":["Deny","Checks for mem::replace(&mut _, mem::uninitialized())\nand mem::replace(&mut _, mem::zeroed())."],"indexing_slicing":[C[0],"Checks for usage of indexing or slicing. Arrays are special cases, this lint\ndoes report on arrays i"],"similar_names":[C[0],"Checks for names that are very similar and thus confusing."],"string_lit_as_bytes":["Warn","Checks for the as_bytes method called on string literals\nthat contain only ASCII characters."],"struct_excessive_bools":[C[0],"Checks for excessive\nuse of bools in structs."],"unnecessary_unwrap":["Warn","Checks for calls of unwrap[_err]() that cannot fail."],"iter_next_loop":["Deny","Checks for loops on x.next()."],"large_enum_variant":["Warn","Checks for large size differences between variants on\nenums."],"filter_next":["Warn","Checks for usage of _.filter(_).next()."],"mutex_atomic":["Warn","Checks for usages of Mutex<X> where an atomic will do."],"must_use_candidate":[C[0],"Checks for public functions that have no\n[#[must_use]] attribute, but return something not already m"],"neg_cmp_op_on_partial_ord":["Warn","Checks for the usage of negated comparison operators on types which only implement\nPartialOrd (e.g.,"],"option_map_unit_fn":["Warn","Checks for usage of option.map(f) where f is a function\nor closure that returns the unit type."],"panic_params":["Warn","Checks for missing parameters in panic!."],"suspicious_assignment_formatting":["Warn","Checks for use of the non-existent =*, =! and =-\noperators."],"ptr_offset_with_cast":["Warn","Checks for usage of the offset pointer method with a usize casted to an\nisize."],"clone_double_ref":["Deny","Checks for usage of .clone() on an &&T."],"mutex_integer":[C[0],"Checks for usages of Mutex<X> where X is an integral\ntype."],"used_underscore_binding":[C[0],"Checks for the use of bindings with a single leading\nunderscore."],"useless_attribute":["Deny","Checks for extern crate and use items annotated with\nlint attributes.\n\nThis lint whitelists #[allow("],"wildcard_dependencies":[C[0],"Checks for wildcard dependencies in the Cargo.toml."],"unstable_as_mut_slice":[C[1],C[2]],"wrong_self_convention":["Warn","Checks for methods with certain name prefixes and which\ndoesn't match how self is taken. The actual "],"neg_multiply":["Warn","Checks for multiplication by -1 as a form of negation."],"if_let_some_result":["Warn","* Checks for unnecessary ok() in if let."],"diverging_sub_expression":["Warn","Checks for diverging calls that are not match arms or\nstatements."],"duration_subsec":["Warn","Checks for calculation of subsecond microseconds or milliseconds\nfrom other Duration methods."],"missing_const_for_fn":[C[0],"Suggests the use of const in functions and methods where possible."],"invalid_atomic_ordering":["Deny","Checks for usage of invalid atomic\nordering in atomic loads/stores and memory fences."],"search_is_some":["Warn","Checks for an iterator search (such as find(),\nposition(), or rposition()) followed by a call to is_"],"unknown_clippy_lints":["Warn","Checks for allow/warn/deny/forbid attributes with scoped clippy\nlints and if those lints exist in cl"],"replace_consts":[C[0],"Checks for usage of standard library\nconsts that could be replaced by const fns."],"trivial_regex":["Warn","Checks for trivial [regex](https://crates.io/crates/regex)\ncreation (with Regex::new, RegexBuilder::"],"clone_on_copy":["Warn","Checks for usage of .clone() on a Copy type."],"filter_map":[C[0],"Checks for usage of _.filter(_).map(_),\n_.filter(_).flat_map(_), _.filter_map(_).flat_map(_) and sim"],"identity_op":["Warn","Checks for identity operations, e.g., x + 0."],"too_many_lines":[C[0],"Checks for functions with a large amount of lines."],"invalid_ref":[C[1],C[2]],"iter_cloned_collect":["Warn","Checks for the use of .cloned().collect() on slice to\ncreate a Vec."],"misrefactored_assign_op":["Warn","Checks for a op= a op b or a op= b op a patterns."],"float_cmp":["Deny","Checks for (in-)equality comparisons on floating-point\nvalues (apart from zero), except in functions"],"empty_enum":[C[0],"Checks for enums with no variants."],"drop_ref":["Deny","Checks for calls to std::mem::drop with a reference\ninstead of an owned value."],"exit":[C[0],"exit()  terminates the program and doesn't provide a\nstack trace."],"inherent_to_string_shadow_display":["Deny","Checks for the definition of inherent methods with a signature of to_string(&self) -> String and if "],"map_flatten":[C[0],"Checks for usage of _.map(_).flatten(_),"],"implicit_hasher":["Warn","Checks for public impl or fn missing generalization\nover different hashers and implicitly defaulting"],"cmp_null":["Warn","This lint checks for equality comparisons with ptr::null"],"mem_forget":[C[0],"Checks for usage of std::mem::forget(t) where t is\nDrop."],"mem_replace_option_with_none":["Warn","Checks for mem::replace() on an Option with\nNone."],"copy_iterator":[C[0],"Checks for types that implement Copy as well as\nIterator."],"cast_possible_wrap":[C[0],"Checks for casts from an unsigned type to a signed type of\nthe same size. Performing such a cast is "],"missing_safety_doc":["Warn","Checks for the doc comments of publicly visible\nunsafe functions and warns if there is no # Safety s"],"string_add_assign":[C[0],"Checks for string appends of the form x = x + y (without\nlet!)."],"match_single_binding":["Warn","Checks for useless match that binds to only one value."],"suspicious_unary_op_formatting":["Warn","Checks the formatting of a unary operator on the right hand side\nof a binary operator. It lints if t"],"for_loop_over_result":["Deny","Checks for for loops over Result values."],"assign_ops":[C[1],C[2]],"precedence":["Warn","Checks for operations where precedence may be unclear\nand suggests to add parentheses. Currently it "],"wildcard_in_or_patterns":["Warn","Checks for wildcard pattern used with others patterns in same match arm."],"single_match":["Warn","Checks for matches with a single arm where an if let\nwill usually suffice."],"imprecise_flops":[C[0],"Looks for floating-point expressions that\ncan be expressed using built-in methods to improve accurac"],"double_neg":["Warn","Detects expressions of the form --x."],"len_without_is_empty":["Warn","Checks for items that implement .len() but not\n.is_empty()."],"must_use_unit":["Warn","Checks for a [#[must_use]] attribute on\nunit-returning functions and methods.\n\n[#[must_use]]: https:"],"naive_bytecount":["Warn","Checks for naive byte counts"],"temporary_assignment":["Warn","Checks for construction of a structure or tuple just to\nassign a value in it."],"collapsible_if":["Warn","Checks for nested if statements which can be collapsed\nby &&-combining their conditions and for else"],"assertions_on_constants":["Warn","Checks for assert!(true) and assert!(false) calls."],"mut_from_ref":["Deny","This lint checks for functions that take immutable\nreferences and return\nmutable ones."],"range_minus_one":["Warn","Checks for inclusive ranges where 1 is subtracted from\nthe upper bound, e.g., x..=(y-1)."],"toplevel_ref_arg":["Warn","Checks for function arguments and let bindings denoted as\nref."],"unsafe_vector_initialization":[C[1],C[2]],"absurd_extreme_comparisons":["Deny","Checks for comparisons where one side of the relation is\neither the minimum or maximum value for its"],"todo":[C[0],"Checks for usage of todo!."],"fallible_impl_from":[C[0],"Checks for impls of From<..> that contain panic!() or unwrap()"],"into_iter_on_ref":["Warn","Checks for into_iter calls on references which should be replaced by iter\nor iter_mut."],"char_lit_as_u8":["Warn","Checks for expressions where a character literal is cast\nto u8 and suggests using a byte literal ins"],"chars_last_cmp":["Warn","Checks for usage of .chars().last() or\n.chars().next_back() on a str to check if it ends with a give"],"filter_map_next":[C[0],"Checks for usage of _.filter_map(_).next()."],"integer_arithmetic":[C[0],"Checks for plain integer arithmetic."],"excessive_precision":["Warn","Checks for float literals with a precision greater\nthan that supported by the underlying type."],"match_bool":["Warn","Checks for matches where match expression is a bool. It\nsuggests to replace the expression with an i"],"else_if_without_else":[C[0],"Checks for usage of if expressions with an else if branch,\nbut without a final else branch."],"bool_comparison":["Warn","Checks for expressions of the form x == true,\nx != true and order comparisons such as x < true (or v"],"multiple_inherent_impl":[C[0],"Checks for multiple inherent implementations of a struct"],"box_vec":["Warn","Checks for use of Box<Vec<_>> anywhere in the code."],"enum_variant_names":["Warn",C[3]],"type_complexity":["Warn","Checks for types used in structs, parameters and let\ndeclarations above a certain complexity thresho"],"let_unit_value":["Warn","Checks for binding a unit value."],"map_entry":["Warn","Checks for uses of contains_key + insert on HashMap\nor BTreeMap."],"mistyped_literal_suffixes":["Deny","Warns for mistyped suffix in literals"],"needless_return":["Warn","Checks for return statements at the end of a block."],"unused_io_amount":["Deny","Checks for unused written/read amount."],"len_zero":["Warn","Checks for getting the length of something via .len()\njust to compare to zero, and suggests using .i"],"iter_nth_zero":["Warn","Checks for the use of iter.nth(0)."],"single_match_else":[C[0],"Checks for matches with two arms where an if let else will\nusually suffice."],"tabs_in_doc_comments":["Warn","Checks doc comments for usage of tab characters."],"transmute_int_to_float":["Warn","Checks for transmutes from an integer to a float."],"unneeded_field_pattern":[C[0],"Checks for structure field patterns bound to wildcards."],"implicit_return":[C[0],"Checks for missing return statements at the end of a block."],"zero_divided_by_zero":["Warn","Checks for 0.0 / 0.0."],"unnecessary_fold":["Warn","Checks for using fold when a more succinct alternative exists.\nSpecifically, this checks for folds w"],"manual_saturating_arithmetic":["Warn","Checks for .checked_add/sub(x).unwrap_or(MAX/MIN)."],"zst_offset":["Deny","Checks for offset(_), wrapping_{add, sub}, etc. on raw pointers to\nzero-sized types"],"crosspointer_transmute":["Warn","Checks for transmutes between a type T and *T."],"verbose_bit_mask":["Warn","Checks for bit masks that can be replaced by a call\nto trailing_zeros"],"almost_swapped":["Deny","Checks for foo = bar; bar = foo sequences."],"mut_mut":[C[0],"Checks for instances of mut mut references."],"wrong_transmute":["Deny","Checks for transmutes that can't ever be correct on any\narchitecture."],"short_circuit_statement":["Warn","Checks for the use of short circuit boolean conditions as\na\nstatement."],"for_kv_map":["Warn","Checks for iterating a map (HashMap or BTreeMap) and\nignoring either the keys or values."],"redundant_static_lifetimes":["Warn","Checks for constants and statics with an explicit 'static lifetime."],"pub_enum_variant_names":[C[0],C[3]],"unit_cmp":["Deny","Checks for comparisons to unit. This includes all binary\ncomparisons (like == and <) and asserts."],"fn_params_excessive_bools":[C[0],"Checks for excessive use of\nbools in function definitions."],"unseparated_literal_suffix":[C[0],"Warns if literal suffixes are not separated by an\nunderscore."],"suspicious_op_assign_impl":["Deny","Lints for suspicious operations in impls of OpAssign, e.g.\nsubtracting elements in an AddAssign impl"],"no_effect":["Warn","Checks for statements which have no effect."],"write_with_newline":["Warn","This lint warns when you use write!() with a format\nstring that\nends in a newline."],"cast_lossless":[C[0],"Checks for casts between numerical types that may\nbe replaced by safe conversion functions."],"mem_discriminant_non_enum":["Deny","Checks for calls of mem::discriminant() on a non-enum type."],"never_loop":["Deny","Checks for loops that will always break, return or\ncontinue an outer loop."],"forget_copy":["Deny","Checks for calls to std::mem::forget with a value that\nderives the Copy trait"],"explicit_iter_loop":[C[0],"Checks for loops on x.iter() where &x will do, and\nsuggests the latter."],"deprecated_semver":["Deny","Checks for #[deprecated] annotations with a since\nfield that is not a valid semantic version."],"needless_doctest_main":["Warn","Checks for fn main() { .. } in doctests"],"print_with_newline":["Warn","This lint warns when you use print!() with a format\nstring that\nends in a newline."],"cast_sign_loss":[C[0],"Checks for casts from a signed to an unsigned numerical\ntype. In this case, negative values wrap aro"],"redundant_clone":["Warn","Checks for a redundant clone() (and its relatives) which clones an owned\nvalue that is going to be d"],"shadow_unrelated":[C[0],"Checks for bindings that shadow other bindings already in\nscope, either without a initialization or "],"single_char_pattern":["Warn","Checks for string methods that receive a single-character\nstr as an argument, e.g., _.split(\"x\")."],"str_to_string":[C[1],C[2]],"rest_pat_in_fully_bound_structs":[C[0],"Checks for unnecessary '..' pattern binding on struct when all fields are explicitly matched."],"transmute_float_to_int":["Warn","Checks for transmutes from a float to an integer."],"type_repetition_in_bounds":[C[0],"This lint warns about unnecessary type repetitions in trait bounds"],"useless_vec":["Warn","Checks for usage of &vec![..] when using &[..] would\nbe possible."],"result_map_unwrap_or_else":[C[0],"Checks for usage of result.map(_).unwrap_or_else(_)."],"double_parens":["Warn","Checks for unnecessary double parentheses."],"regex_macro":["Warn","Checks for usage of regex!(_) which (as of now) is\nusually slower than Regex::new(_) unless called i"],"transmute_bytes_to_str":["Warn","Checks for transmutes from a &[u8] to a &str."],"unsafe_removed_from_name":["Warn","Checks for imports that remove \"unsafe\" from an item's\nname."],"get_last_with_len":["Warn","Checks for using x.get(x.len() - 1) instead of\nx.last()."],"suboptimal_flops":[C[0],"Looks for floating-point expressions that\ncan be expressed using built-in methods to improve both\nac"],"transmute_ptr_to_ref":["Warn","Checks for transmutes from a pointer to a reference."],"invalid_regex":["Deny","Checks [regex](https://crates.io/crates/regex) creation\n(with Regex::new,RegexBuilder::new or RegexS"],"inconsistent_digit_grouping":["Warn","Warns if an integral or floating-point constant is\ngrouped inconsistently with underscores."],"block_in_if_condition_expr":["Warn","Checks for if conditions that use blocks to contain an\nexpression."],"map_clone":["Warn","Checks for usage of iterator.map(|x| x.clone()) and suggests\niterator.cloned() instead"],"new_ret_no_self":["Warn","Checks for new not returning Self."],"cmp_nan":["Deny","Checks for comparisons to NaN."],"extend_from_slice":[C[1],C[2]],"option_as_ref_deref":["Warn","Checks for usage of _.as_ref().map(Deref::deref) or it's aliases (such as String::as_str)."],"float_arithmetic":[C[0],"Checks for float arithmetic."],"reverse_range_loop":["Deny","Checks for loops over ranges x..y where both x and y\nare constant and x is greater or equal to y, un"],"needless_collect":["Warn","Checks for functions collecting an iterator when collect\nis not needed."],"enum_clike_unportable_variant":["Deny","Checks for C-like enumerations that are\nrepr(isize/usize) and have values that don't fit into an i32"],"useless_asref":["Warn","Checks for usage of .as_ref() or .as_mut() where the\ntypes before and after the call are the same."],"large_digit_groups":[C[0],"Warns if the digits of an integral or floating-point\nconstant are grouped into groups that\nare too l"],"unreadable_literal":["Warn","Warns if a long integral or floating-point constant does\nnot contain underscores."],"unsound_collection_transmute":["Deny","Checks for transmutes between collections whose\ntypes have different ABI, size or alignment."],"skip_while_next":["Warn","Checks for usage of _.skip_while(condition).next()."],"drop_copy":["Deny","Checks for calls to std::mem::drop with a value\nthat derives the Copy trait"],"useless_transmute":["Warn","Checks for transmutes to the original type of the object\nand transmutes that could be a cast."],"uninit_assumed_init":["Deny","Checks for MaybeUninit::uninit().assume_init()."],"int_plus_one":["Warn","Checks for usage of x >= y + 1 or x - 1 >= y (and <=) in a block"],"let_and_return":["Warn","Checks for let-bindings, which are subsequently\nreturned."],"mem_replace_with_default":["Warn","Checks for std::mem::replace on a value of type\nT with T::default()."],"println_empty_string":["Warn","This lint warns when you use println!(\"\") to\nprint a newline."],"string_extend_chars":["Warn","Checks for the use of .extend(s.chars()) where s is a\n&str or String."],"infinite_iter":["Deny","Checks for iteration that is guaranteed to be infinite."],"useless_format":["Warn","Checks for the use of format!(\"string literal with no\nargument\") and format!(\"{}\", foo) where foo is"],"eq_op":["Deny","Checks for equal operands to comparison, logical and\nbitwise, difference and division binary operato"],"approx_constant":["Deny","Checks for floating point literals that approximate\nconstants which are defined in\n[std::f32::consts"],"linkedlist":[C[0],"Checks for usage of any LinkedList, suggesting to use a\nVec or a VecDeque (formerly called RingBuf)."],"chars_next_cmp":["Warn","Checks for usage of .chars().next() on a str to check\nif it starts with a given char."],"fn_to_numeric_cast_with_truncation":["Warn","Checks for casts of a function pointer to a numeric type not wide enough to\nstore address."],"redundant_closure_call":["Warn","Detects closures called in the same expression where they\nare defined."],"explicit_write":["Warn","Checks for usage of write!() / writeln()! which can be\nreplaced with (e)print!() / (e)println!()"],"redundant_field_names":["Warn","Checks for fields in struct literals where shorthands\ncould be used."],"vec_box":["Warn","Checks for use of Vec<Box<T>> where T: Sized anywhere in the code."],"min_max":["Deny","Checks for expressions where std::cmp::min and max are\nused to clamp values, but switched so that th"],"declare_interior_mutable_const":["Deny","Checks for declaration of const items which is interior\nmutable (e.g., contains a Cell, Mutex, Atomi"],"explicit_into_iter_loop":[C[0],"Checks for loops on y.into_iter() where y will do, and\nsuggests the latter."],"wildcard_imports":[C[0],"Checks for wildcard imports use _::*."],"mixed_case_hex_literals":["Warn","Warns on hexadecimal literals with mixed-case letter\ndigits."],"into_iter_on_array":[C[1],C[2]],"doc_markdown":[C[0],"Checks for the presence of _, :: or camel-case words\noutside ticks in documentation."],"option_map_or_none":["Warn","Checks for usage of _.map_or(None, _)."],"out_of_bounds_indexing":["Deny","Checks for out of bounds array indexing with a constant\nindex."],"just_underscores_and_digits":["Warn","Checks if you have variables whose name consists of just\nunderscores and digits."],"missing_errors_doc":[C[0],"Checks the doc comments of publicly visible functions that\nreturn a Result type and warns if there i"],"mut_range_bound":["Warn","Checks for loops which have a range bound that is a mutable variable"],"match_overlapping_arm":["Warn","Checks for overlapping match arms."],"overflow_check_conditional":["Warn","Detects classic underflow/overflow checks."],"redundant_closure":["Warn","Checks for closures which just call another function where\nthe function can be called directly. unsa"],"duplicate_underscore_argument":["Warn","Checks for function arguments having the similar names\ndiffering by an underscore."],"print_literal":["Warn","This lint warns about the use of literals as print!/println! args."],"transmute_int_to_char":["Warn","Checks for transmutes from an integer to a char."],"while_let_loop":["Warn","Detects loop + match combinations that are easier\nwritten as a while let loop."],"use_debug":[C[0],"Checks for use of Debug formatting. The purpose of this\nlint is to catch debugging remnants."],"flat_map_identity":["Warn","Checks for usage of flat_map(|x| x)."],"deprecated_cfg_attr":["Warn","Checks for #[cfg_attr(rustfmt, rustfmt_skip)] and suggests to replace it\nwith #[rustfmt::skip]."],"drop_bounds":["Deny","Checks for generics with std::ops::Drop as bounds."],"serde_api_misuse":["Deny","Checks for mis-uses of the serde API."],"shadow_reuse":[C[0],"Checks for bindings that shadow other bindings already in\nscope, while reusing the original value."],"unnecessary_mut_passed":["Warn","Detects giving a mutable reference to a function that only\nrequires an immutable reference."],"zero_prefixed_literal":["Warn","Warns if an integral constant literal starts with 0."],"wrong_pub_self_convention":[C[0],"This is the same as\n[wrong_self_convention](#wrong_self_convention), but for public items."],"let_underscore_lock":["Deny","Checks for let _ = sync_lock"],"option_env_unwrap":["Deny","Checks for usage of option_env!(...).unwrap() and\nsuggests usage of the env! macro."],"write_literal":["Warn","This lint warns about the use of literals as write!/writeln! args."],"zero_ptr":["Warn","Catch casts from 0 to some pointer type"],"transmute_int_to_bool":["Warn","Checks for transmutes from an integer to a bool."],"cast_possible_truncation":[C[0],"Checks for casts between numerical types that may\ntruncate large values. This is expected behavior, "],"suspicious_else_formatting":["Warn","Checks for formatting of else. It lints if the else\nis followed immediately by a newline or the else"],"explicit_counter_loop":["Warn","Checks for loops over slices with an explicit counter\nand suggests the use of .enumerate()."],"inline_fn_without_body":["Deny","Checks for #[inline] on trait methods without bodies"],"should_assert_eq":[C[1],C[2]],"needless_range_loop":["Warn","Checks for looping over the range of 0..len of some\ncollection just to get the values by index."],"slow_vector_initialization":["Warn","Checks slow zero-filled vector initialization"],"option_map_unwrap_or":[C[0],"Checks for usage of _.map(_).unwrap_or(_)."],"unnecessary_filter_map":["Warn","Checks for filter_map calls which could be replaced by filter or map.\nMore specifically it checks if"],"blacklisted_name":["Warn","Checks for usage of blacklisted names for variables, such\nas foo."],"unused_collect":[C[1],C[2]],"as_conversions":[C[0],"Checks for usage of as conversions."],"temporary_cstring_as_ptr":["Deny","Checks for getting the inner pointer of a temporary\nCString."],"should_implement_trait":["Warn","Checks for methods that should live in a trait\nimplementation of a std trait (see [llogiq's blog\npos"],"unimplemented":[C[0],"Checks for usage of unimplemented!."],"while_immutable_condition":["Deny","Checks whether variables used within while loop condition\ncan be (and are) mutated in the body."],"print_stdout":[C[0],"Checks for printing on *stdout*. The purpose of this lint\nis to catch debugging remnants."],"derive_hash_xor_eq":["Deny","Checks for deriving Hash but implementing PartialEq\nexplicitly or vice versa."],"empty_loop":["Warn","Checks for empty loop expressions."],"dbg_macro":[C[0],"Checks for usage of dbg!() macro."],"transmuting_null":["Deny","Checks for transmute calls which would receive a null pointer."],"option_map_unwrap_or_else":[C[0],"Checks for usage of _.map(_).unwrap_or_else(_)."],"unused_label":[C[1],C[2]],"mutable_key_type":["Deny","Checks for sets/maps with mutable key types."],"modulo_arithmetic":[C[0],"Checks for modulo arithemtic."],"filetype_is_file":[C[0],"Checks for FileType::is_file()."],"not_unsafe_ptr_arg_deref":["Deny","Checks for public functions that dereference raw pointer\narguments but are not marked unsafe."],"writeln_empty_string":["Warn","This lint warns when you use writeln!(buf, \"\") to\nprint a newline."],"cast_precision_loss":[C[0],"Checks for casts from any numerical to a float type where\nthe receiving type cannot store all values"],"use_self":[C[0],"Checks for unnecessary repetition of structure name when a\nreplacement with Self is applicable."],"too_many_arguments":["Warn","Checks for functions with too many parameters."],"missing_docs_in_private_items":[C[0],"Warns if there is missing doc for any documentable item\n(public or private)."],"needless_bool":["Warn","Checks for expressions of the form if c { true } else {\nfalse }\n(or vice versa) and suggest using th"],"iter_skip_next":["Warn","Checks for use of .skip(x).next() on iterators."],"extra_unused_lifetimes":["Warn","Checks for lifetimes in generics that are never used\nanywhere else."],"needless_continue":[C[0],"The lint checks for if-statements appearing in loops\nthat contain a continue statement in either the"],"ptr_arg":["Warn","This lint checks for function arguments of type &String\nor &Vec unless the references are mutable. I"],"needless_update":["Warn","Checks for needlessly including a base struct on update\nwhen all fields are changed anyway."],"checked_conversions":[C[0],"Checks for explicit bounds checking when casting."],"cognitive_complexity":["Warn","Checks for methods with high cognitive complexity."],"cargo_common_metadata":[C[0],"Checks to see if all common metadata is defined in\nCargo.toml. See: https://rust-lang-nursery.github"],"enum_glob_use":[C[0],"Checks for use Enum::*."],"op_ref":["Warn","Checks for arguments to == which have their address\ntaken to satisfy a bound\nand suggests to derefer"],"cmp_owned":["Warn","Checks for conversions to owned values just for the sake\nof a comparison."],"deref_addrof":["Warn","Checks for usage of *& and *&mut in expressions."],"range_step_by_zero":[C[1],C[2]],"transmute_ptr_to_ptr":["Warn","Checks for transmutes from a pointer to a pointer, or\nfrom a reference to a reference."],"unicode_not_nfc":[C[0],"Checks for string literals that contain Unicode in a form\nthat is not equal to its\n[NFC-recompositio"],"wildcard_enum_match_arm":[C[0],"Checks for wildcard enum matches using _."],"fn_to_numeric_cast":["Warn","Checks for casts of function pointers to something other than usize"],"eval_order_dependence":["Warn","Checks for a read and a write to the same variable where\nwhether the read occurs before or after the"],"invalid_upcast_comparisons":[C[0],"Checks for comparisons where the relation is always either\ntrue or false, but where one side has bee"],"non_ascii_literal":[C[0],"Checks for non-ASCII characters in string literals."],"to_digit_is_some":["Warn","Checks for .to_digit(..).is_some() on chars."],"lossy_float_literal":[C[0],"Checks for whole number float literals that\ncannot be represented as the underlying type without los"],"match_ref_pats":["Warn","Checks for matches where all arms match a reference,\nsuggesting to remove the reference and deref th"],"assign_op_pattern":["Warn","Checks for a = a op b or a = b commutative_op a\npatterns."],"string_add":[C[0],"Checks for all instances of x + _ where x is of type\nString, but only if [string_add_assign](#string"],"many_single_char_names":["Warn","Checks for too many variables whose name consists of a\nsingle character."],"items_after_statements":[C[0],"Checks for items declared after some statement in a block."],"misaligned_transmute":[C[1],C[2]],"ineffective_bit_mask":["Deny","Checks for bit masks in comparisons which can be removed\nwithout changing the outcome. The basic str"],"erasing_op":["Deny","Checks for erasing operations, e.g., x * 0."],"cast_ptr_alignment":["Deny","Checks for casts from a less-strictly-aligned pointer to a\nmore-strictly-aligned pointer"],"trivially_copy_pass_by_ref":["Warn","Checks for functions taking arguments by reference, where\nthe argument type is Copy and small enough"]}