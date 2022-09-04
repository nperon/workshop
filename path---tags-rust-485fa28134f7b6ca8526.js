webpackJsonp([0xeb7914649a24],{512:function(e,n){e.exports={pathContext:{posts:[{html:'<h2>Cargo commands</h2>\n<p>Command to create a project:</p>\n<pre><code class="language-bash">cargo new hello\n</code></pre>\n<p>You can compile and run the project now with:</p>\n<pre><code class="language-bash">cargo run\n</code></pre>\n<p>This builds the project in a directory called <code>target/debug</code>.\nTo build the project in the <code>target/release</code> directory intended for prod, just run:</p>\n<pre><code class="language-bash">cargo run --release\n</code></pre>\n<p>A good tip to improve the code with idiomatic rust coding hints/warnings is to run:</p>\n<pre><code class="language-bash">cargo clippy\n</code></pre>\n<p>Here is a command to view the standard library in the default browser:</p>\n<pre><code class="language-bash">rustup doc --std\n</code></pre>\n<h3>Coding modules</h3>\n<p>Crates are about code sharing between projects while modules are about\ncode sharing within a project. </p>\n<p>This can take place in a package library. This can be created with:</p>\n<pre><code class="language-bash">cargo new todo --lib\n</code></pre>\n<p>Cargo modules is a useful tool to manage modules. It can be installed with:</p>\n<pre><code class="language-bash">cargo install cargo-modules\n</code></pre>\n<p>Then, project\'s modules tree can be displayed with:</p>\n<pre><code class="language-bash">cargo modules generate tree\n</code></pre>\n<p>The displayed tree can be refined with options:</p>\n<pre><code class="language-bash">cargo modules generate tree --with-types\n</code></pre>\n<h2>Strings</h2>\n<p>String slices refered to as <code>str</code>\nare almost always handled in the shape of borrowed string slices <code>&#x26;str</code>.\nSee also the Rust documentation on <a href="https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html">references and borrowing</a>.</p>\n<p>A string literal stated\n<code>let msg = "Hello 🌎";</code>\nis a borrowed string slice.</p>\n<p>The other string type is String.\nData in a borrowed string slice cannot be modified\nwhile data in a String can be modified.</p>\n<p>A String can be obtained by applying the to_string() method on a\nborrowed string slice:</p>\n<pre><code>let msg = "ab🎉".to_string();\n</code></pre>\n<p>or else by passing the borrowed string slice to String::from:</p>\n<pre><code>let msg = String::from("ab🎉");\n</code></pre>\n<p>Internally, a borrowed string slice is made up of a pointer to some byte and\na length. The length is the number of unicode characters in the string.</p>\n<p>Bytes can be extracted from a borrowed string slice with the bytes() method: <code>word.bytes();</code></p>\n<p>An iterator on unicode scalars can be built with <code>word.chars();</code></p>\n<p>Additionally, an iterator on graphemes can be retrieved using a package called unicode-segmentation with:</p>\n<p><code>graphemes(my_string, true)</code></p>\n<p>A given item in the graphemes can then be accessed with by appending a statement like<code>.nth(3)</code></p>\n<p>All of the helper methods to manipulate String objects are documented\n<a href="https://doc.rust-lang.org/std/string/struct.String.html#method.bytes">here</a>.</p>\n<p>A String can be converted into a &#x26;str with the <code>.as_str()</code> method.\nIt follows that string slices can manipulated in the shape of String objects\nand the latter can be converted back into string slices with <code>as_str()</code>.\nFor instance two <code>&#x26;str</code> can be concatenated into a string c with:</p>\n<pre><code class="language-bash">let a = "Hello";\nlet b = " World";\nlet c = format!("{}{}", a, b);\n</code></pre>\n<h2>String literals</h2>\n<pre><code class="language-rust">let rust = "\\x52\\x75\\x73\\x74";\nprintln!("{}", rust);\n</code></pre>\n<h2>Struct with impl</h2>\n<pre><code class="language-rust">struct Square {\n    width: u32,\n    height: u32,\n}\n\nimpl Square {\n    fn area(&#x26;self) -> u32 {\n        self.width * self.height\n    }\n\n    fn whats_my_width(&#x26;self) -> u32 {\n        self.width\n    }\n\n    fn change_width(&#x26;mut self, new_width: u32){\n        self.width = new_width;\n    }\n}\n</code></pre>\n<h2>Struct with Trait</h2>\n<pre><code class="language-rust">#[derive(Debug)]\nstruct RedFox {\n    enemy: bool,\n    life: u32,\n}\n\ntrait Noisy {\n    fn get_noise(&#x26;self) -> &#x26;str;\n}\n\nimpl Noisy for RedFox {\n    fn get_noise(&#x26;self) -> &#x26;str { "Meow?" }\n}\n\nfn print_noise&#x3C;T: Noisy>(item: T) {\n    println!("", item.get_noise());\n}\n\nimpl Noisy for u8 {\n    fn get_noise(&#x26;self) -> &#x26;str { "BYTE!" }\n}\n\nfn main() {\n    print_noise(5_u8); // prints "BYTE!"\n}\n</code></pre>\n<p>There are two other types of Struct. One is the tuple like Struct:</p>\n<pre><code class="language-rust">struct Coordinates(i32, i32, i32);\n</code></pre>\n<p>The other is the unit like Struct which is useful when combined with Traits:</p>\n<pre><code class="language-rust">struct UnitStruct;\n</code></pre>\n<h2>Utility Traits</h2>\n<ul>\n<li>The Drop Trait:</li>\n</ul>\n<pre><code class="language-rust">struct Course {\n    headline: String,\n    author: String,\n}\n\nimpl Drop for Course {\n    fn drop(&#x26;mut self) {\n        println!("Dropping: {}", self.author);\n    }\n}\n\nfn main() {\n    let course1 = Course{ headline: String::from("Headline!"), author: String::from("Tyler"), };\n\n    drop(course1);\n}\n</code></pre>\n<ul>\n<li>The Clone Trait which is for types that can make copies of themselves :</li>\n</ul>\n<pre><code class="language-rust">trait Clone: Sized {\n    fn clone(&#x26;self) -> Self;\n    fn clone_from(&#x26;mut self, source: &#x26;Self) {\n        *self = source.clone()\n    }\n}\n</code></pre>\n<ul>\n<li>\n<p>Copy is a shallow Clone</p>\n</li>\n<li>\n<p>From and Into, plus: TryFrom and TryInto</p>\n</li>\n</ul>\n<p><code>fn into(self) -> T</code>: take self and returns a value of type T.</p>\n<p><code>fn from(T) -> Self</code>: take a value of type T and returns self.</p>\n<ul>\n<li>Arithmetics: the Add Trait</li>\n</ul>\n<pre><code class="language-bash">use std::ops::Add;\n\n#[derive(Debug)]\nstruct Point&#x3C;T> {\n    x: T,\n    y: T\n}\n\nfn main() {\n    let coord = Point{ x: 5.0, y: 5.0 };\n    let coord2 = Point{ x: 1.0, y: 2.0 };\n    let sum = coord + coord2;\n    println!("{:?}", sum);\n}\n\nimpl&#x3C;T> Add for Point&#x3C;T>\n    where\n    T: Add&#x3C;Output = T> {\n        type Output = Self;        \n        fn add(self, rhs: Self) -> Self {\n            Point {\n                x: self.x + rhs.x,\n                y: self.y + rhs.y,\n            }\n        }\n    }\n</code></pre>\n<ul>\n<li>\n<p>Fn is a family of closures and functions that you can call multiple times without restrictions. It borrows values from the environment immutably. It includes all fn functions.</p>\n</li>\n<li>\n<p>FnMut is a family of closures and functions that you can call multiple times if the closure itself is declared mut. It immutably borrows values.</p>\n</li>\n<li>\n<p>FnOnce is a family of closures that can be called once if the caller owns the closure. The closure cannot take ownership of the same variables more than once.</p>\n</li>\n</ul>\n<p>Therefore, every Fn meets the requirements for FnMut and every FnMut meets the requirements for FnOnce. It means that Fn is the most exclusive and the most powerful in this set of three Traits.</p>\n<p>Examples: </p>\n<ul>\n<li>\n<p>|| drop(v) FnOnce  ---> FnOnce</p>\n</li>\n<li>\n<p>|args| v.contains(arg) ---> Fn</p>\n</li>\n<li>\n<p>|args| v.push(arg)  ---> FnMut</p>\n</li>\n<li>\n<p>Iterator</p>\n</li>\n</ul>\n<h2>Lifetimes</h2>\n<p>Every reference has a Lifetime. Most of the time, Lifetimes are implicit and inferred.</p>\n<pre><code class="language-rust">fn longest&#x3C;\'a>(x: &#x26;\'a str, y: &#x26;\'a str) -> &#x26;\'a str {\n    if x.len() > y.len() {\n        x\n    } else {\n        y\n    }\n}\n</code></pre>\n<p>Syntax for lifetime in a struct is as follows:</p>\n<pre><code class="language-rust">struct MyString&#x3C;\'a> {\n    text: &#x26;\'a str\n}\n</code></pre>\n<p>Here is an example of a variable defined with a static lifetime:</p>\n<pre><code class="language-rust">let s: &#x26;\'static str = "I have static lifetime";\n</code></pre>\n<h2>Vectors</h2>\n<pre><code class="language-rust">let mut v: Vec&#x3C;i32> = Vec::new();\nv.push(2);\nv.push(4);\nv.push(6);\nlet x = v.pop();    // x is 6\nprintln("{}", v[1]);// prints "4"\nlet mut u = vec![2, 4, 6];\n</code></pre>\n<p>Other ways to instanciate vectors: </p>\n<pre><code class="language-rust">let vect= Vec::&#x3C;i32>::with_capacity(2);\nprintln!("{}", vect.capacity());\n\nlet v: Vec&#x3C;i32> = (0..5).collect();\nprintln!("{:?}", v);\n</code></pre>\n<p>Vector API examples:</p>\n<pre><code class="language-rust">let mut nums: Vec&#x3C;i32> = vec![];\nnums.push(1);\nnums.push(2);\nnums.push(3);\n\nlet pop = nums.pop(); // returns Option&#x3C;T>: None or Some(T)\nprintln!("{:?}", pop);\nlet number = pop.unwrap();\nprintln!("{}", number);\n\nlet two = nums[1]; // copy\n// &#x26;nums[1], creates a reference if copy is not available \n// (here we get a copy since i32 is a primitive type)\nprintln!("{}", two);\n\nlet one = nums.first(); // return an Option&#x3C;T> \n                        // so None if nums is empty, else Some&#x3C;T>\nprintln!("{:?}", one);\n\n// .last\n// .first_mut and .last_mut will borrow mutable references\n\nprintln!("{}", nums.len()); // return a value of length\nprintln!("{}", nums.is_empty()); // bool\n\nnums.insert(0, 10);\nnums.insert(3, 12);\nnums.insert(2, 25);\n\nnums.remove(3);\n\nnums.sort();\nprintln!("{:?}", nums);\n\nnums.reverse();\nprintln!("{:?}", nums);\n\nnums.shuffle(&#x26;mut thread_rng());\nprintln!("{:?}", nums);\n</code></pre>\n<h2>Iterators</h2>\n<p>Vec is an example of a standard object that implements the Iterator Trait.</p>\n<p>Example 1:</p>\n<pre><code class="language-rust">let vec2 = vec![1, 2, 3];\nlet mut iter = (&#x26;vec2).into_iter();\nwhile let Some(v) = iter.next() {\n    println!("{}", v);\n}\n</code></pre>\n<p>Example 2:</p>\n<pre><code class="language-rust">#[derive(Debug)]\nstruct Item {\n    name: String,\n}\n\nfn check_inventory(items: Vec&#x3C;Item>, product: String) -> Vec&#x3C;Item> {\n    items.into_iter().filter(|i| i.name == product).collect()\n}\n\nfn main() {\n    let mut vec: Vec&#x3C;Item> = Vec::new();\n    vec.push(Item { name: String::from("coat") });\n    vec.push(Item { name: String::from("shirt") });\n    vec.push(Item { name: String::from("shorts") });\n    vec.push(Item { name: String::from("shoes") });\n\n    let checked = check_inventory(vec, String::from("shirt"));\n    println!("{:?}", checked);\n}\n</code></pre>\n<p>Example 3:</p>\n<pre><code class="language-rust">#[derive(Debug)]\nstruct Range {\n    start: u32,\n    end: u32,\n}\n\nimpl Iterator for Range {\n    type Item = u32;\n    fn next(&#x26;mut self) -> Option&#x3C;Self::Item> {\n        if self.start >= self.end {\n            return None;\n        }\n        let result = Some(self.start);\n        self.start += 1;\n        result\n    }\n}\n\nfn main() {\n    let mut range = Range {start: 0, end: 10};\n    // for r in range {\n    //     println!("{}", r);\n    // }\n\n    let vec: Vec&#x3C;u32> = range.filter(|x| x % 2 == 0).collect();\n    println!("{:?}",vec);\n}\n</code></pre>\n<h2>Slices</h2>\n<pre><code class="language-rust">let v: Vec&#x3C;i32> = (0..5).collect();\nprintln!("{:?}", v);\n\nlet sv: &#x26;[i32] = &#x26;v[2..4];\nprintln!("{:?}", sv);\n</code></pre>\n<p>A slice is a fat pointer i.e. a non owning reference to a <strong>range</strong> of consecutive values.</p>\n<h2>Hashmaps</h2>\n<pre><code class="language-rust">let mut h: HashMap&#x3C;u8, bool> = HashMap::new();\nh.insert(5, true);\nh.insert(6, false);\nlet have_five = h.remove(&#x26;5).unwrap();\n</code></pre>\n<p>Hashmap API examples:</p>\n<pre><code class="language-rust">let mut hm = HashMap::new();\nhm.insert(1, 1);\nhm.insert(5, 2);\nhm.insert(30, 3);\nlet old = hm.insert(30, 4);\nprintln!("{:?}", hm);\nprintln!("{:?}", old);\n\nprintln!("{:?}", hm.contains_key(&#x26;8));\nprintln!("{:?}", hm.get(&#x26;5));\n\nlet one = hm.remove(&#x26;1);\nprintln!("{:?}", one);\n\nlet removed = hm.remove_entry(&#x26;5);\nprintln!("{:?}", removed);\n\nhm.clear();\nprintln!("{}", hm.is_empty());\n</code></pre>\n<p>Other collections: VecDeque, LinkedList, HashSet, BinaryHeap, BTreeMap, BTreeSet</p>\n<h2>HashSets</h2>\n<pre><code class="language-rust">let mut hs = HashSet::new();\nhs.insert(1);\nhs.insert(2);\nhs.insert(3);\nhs.insert(4);\nhs.remove(&#x26;2);\nfor x in hs.iter() {\n    println!("inter: {}", x);\n}\n\nlet mut hs2 = HashSet::new();\nhs2.insert(1);\nhs2.insert(3);\nhs2.insert(5);\nhs2.insert(7);\nfor x in hs.intersection(&#x26;hs2) {\n    println!("intersection: {}", x);\n}\n\nlet intersection = &#x26;hs &#x26; &#x26;hs2;\nfor x in intersection {\n    println!("short hand way: {}", x);\n}\n\nlet union = &#x26;hs | &#x26;hs2;\nfor x in union {\n    println!("union: {}", x);\n}\n</code></pre>\n<h2>Enums</h2>\n<pre><code class="language-rust">enum Color {\n    Red,\n    Green,\n    Blue,\n}\nlet color = Color::Red;\n</code></pre>\n<pre><code class="language-rust">enum DispenserItem {\n    Empty,\n    Ammo(u8),\n    Things(String, i32),\n    Place {x: i32, y: i32},\n}\n\nuse DispenserItem::*;\nlet item1 = Ammo(69);\nlet item2 = Things("hat".to_string(), 7);\n</code></pre>\n<pre><code class="language-rust">enum Pet {dog, cat, fish}\n\nimpl Pet {\n    fn what_am_i(self) -> &#x26;\'static str {\n        match self {\n            Pet::dog => "I am a dog",\n            Pet::cat => "I am a cat",\n            Pet::fish => "I am a fish",\n        }\n    }\n}\n</code></pre>\n<h3>The rust predefined Option enum</h3>\n<pre><code class="language-rust">enum Option&#x3C;T> {\n    Some(T),\n    None,\n}\n\nlet mut x: Option&#x3C;i32> =  None;\nx = Some(5);\nx.is_some(); // true\nx.is_none(); false\nfor i in x {\n    println!("{}", i); // prints 5\n}\n</code></pre>\n<p>The match expression handles the case when we can have Some<T> or Node:</p>\n<pre><code class="language-rust">enum Pet {dog, cat, fish}\n\nfn main () {\n    let dog = Pet::dog;\n    println!("{}", dog.what_am_i());\n\n    let some_number = Some(5);\n    let some_string = Some("a string");\n    let nothing: Option&#x3C;i32> = None;\n\n    let x: i32 = 5;\n    let y: Option&#x3C;i32> = Some(5);\n\n    let sum = x + y;\n\n    let five = Some(5);\n    let six = plus_one(five);\n    let none = plus_one(None);\n\n    println!("{:?}", six);\n\n    let noneUnw = None.unwrap_or(7);\n    println!("unw: {:?}", noneUnw);\n\n    what_pet("dog");\n    what_pet("cat");\n    what_pet("cow");\n}\n\nfn plus_one(x: Option&#x3C;i32>) -> Option&#x3C;i32> {\n    match x {\n        None => None,\n        Some(i) => Some(i + 1),\n    }\n}\n\nfn plus_one_unw(x: Option&#x3C;i32>) -> i32 {\n    match x {\n        None => 0,\n        Some(i) => i + 1,\n    }\n}\n\nfn what_pet(input: &#x26;str) {\n    match input {\n        "dog" => println!("I have a dog!"),\n        "fish" => println!("I have a fish!"),\n        "cat" => println!("I have a cat!"),\n        _ => println!("I have no clue what pet I have"),\n    }\n}\n</code></pre>\n<h3>The rust predefined Result enum</h3>\n<pre><code class="language-rust">enum Result&#x3C;T, E> {\n    Ok(T),\n    Err(E),\n}\n</code></pre>\n<p>Example with Result:</p>\n<pre><code class="language-rust">use std::fs::File;\n\nfn main() {\n    let res = File::open("foo");\n    let f = res.unwrap();\n}\n\nfn main() {\n    let res = File::open("foo");\n    let f = res.expect("error message");\n}\n\nfn main() {\n    let res = File::open("foo");\n    let f = res.is_ok() {\n        let f = res.unwrap();\n    }\n}\n\nfn main() {\n    let res = File::open("foo");\n    match res {\n        Ok(f) => { /* do stuff */ },\n        Err(e) => { /* do stuff */ },\n    }\n}\n</code></pre>\n<h3>Ownership, references  &#x26; borrowing</h3>\n<p>There are 3 rules to ownership:</p>\n<ol>\n<li>Each value has an owner</li>\n<li>There is only one owner of a value</li>\n<li>Value gets dropped if its owner goes out of scope</li>\n</ol>\n<pre><code class="language-rust">x: &#x26;mut i32\n*x // a mutable i32\n</code></pre>\n<pre><code class="language-rust">x: &#x26;i32\n*x: // an immutable i32\n</code></pre>\n<p>At any time, it is possible to have one mutable reference\nor any number of immutable references to a given value.</p>\n<p>A borrowed variable passed to a function can be dereferenced in two ways.\nThe first way is automated deferencing:</p>\n<pre><code class="language-rust">fn do_stuff(s: &#x26;mut String) {\n    s.insert_str(0, "Hi, ");\n}\n</code></pre>\n<p>And the second way is manual:</p>\n<pre><code class="language-rust">fn do_stuff(s: &#x26;mut String) {\n    *s = String::from("Replacement")\n}\n</code></pre>\n<h2>Raw Pointers</h2>\n<p><a href="https://www.oreilly.com/library/view/programming-rust-2nd/9781492052586/">Programming Rust, 2nd Ed</a>:</p>\n<p><em>Rust also has the raw pointer types *mut T and *const T. Raw\npointers really are just like pointers in C++. Using a raw\npointer is unsafe, because Rust makes no eﬀort to track what\nit points to. For example, raw pointers may be null, or they\nmay point to memory that has been freed or that now\ncontains a value of a diﬀerent type.</em> </p>\n<p><em>All the classic pointer\nmistakes of C++ are oﬀered for your enjoyment.\nHowever, you may only dereference raw pointers within an\nunsafe block. An unsafe block is Rust’s opt-in mechanism for\nadvanced language features whose safety is up to you.</em></p>\n<h2>Smart Pointers</h2>\n<p>Box is a smart pointer that allows to allocate data on the heap\nin a straighforward way:</p>\n<pre><code class="language-rust">let t = (12, "eggs"); // created on the stack\nlet b = Box::new(t); // created on the heap, but b was stored on the stack\nprintln!("{:?}", b);\n\nlet x = 5;\nlet y = &#x26;x;\nassert_eq!(5, x);\nassert_eq!(5, *y);\n\nlet x = 5;\nlet y = Box::new(x);\nassert_eq!(5, x);\nassert_eq!(5, *y);\n\nprintln!("{:?}", y);\n</code></pre>\n<p>Rc is a reference counter that handles and count multiple references to a value.</p>\n<pre><code class="language-rust">let s1 = Rc::new(String::from("Pointer"));\nlet s2 = s1.clone();\nlet s3 = s2.clone();\nprintln!("{}, {},{}", s1.contains("Point"), s2, s3.contains("er"));\n</code></pre>\n<p>RefCell allows to mutate data hold in an object whose reference is immutable.</p>\n<pre><code class="language-rust">use std::rc::Rc;\nuse std::cell::RefCell;\n\nstruct Flagger {\n    is_true: RefCell&#x3C;bool>,\n}\n\nlet flag= Flagger { is_true: Rc::new(RefCell::new(true)) };\n// borrow returns Ref&#x3C;T>\n// borrow_mut return RefMut&#x3C;T>\n\nlet reference = Rc::new(flag.is_true.clone());\nprintln!("{:?}", reference);\n\nlet mut mut_ref = reference.borrow_mut();\n*mut_ref = false; // dereference first to access inside\nprintln!("{}", mut_ref);\n</code></pre>\n<h2>Error handling</h2>\n<p>Errors split into two categories: </p>\n<ul>\n<li>recoverable errors which rely on the result type</li>\n<li>unrecoverable errors where the panic macro is used. It terminates the current thread.</li>\n</ul>\n<p>Example on how to catch an error at opening a file:</p>\n<pre><code class="language-rust">let file = File::open("error.txt");\nlet file = match file {\n    Ok(file) => file,\n    Err(error) => match error.kind() {\n        ErrorKind::NotFound => match File::create("error.txt") {\n            Ok(file_created) => file_created,\n            Err(err) => panic!("Cannot create the file: {:?}", err),\n        },\n        _ => panic!("It was some other error kind"),\n    },\n};\n</code></pre>\n<p>Here is a simple way to panic and get information on error with logs:</p>\n<pre><code class="language-rust">let file = File::open("error.txt").expect("Error opening the file!");\n</code></pre>\n<p>Finally, an error that occurs in a function can be propagated upwards to the calling\ncontext by adding a question mark to the calling statement like here:</p>\n<pre><code class="language-rust">fn open_file() -> Result&#x3C;File, Error> {\n    let file = File::open("error.txt")?;\n    Ok(file)\n}\n</code></pre>\n<h2>Unit test</h2>\n<pre><code class="language-rust">#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    fn it_works() {\n        let result = 2 + 2;\n        assert_ne!(result, 5);\n    }\n\n    #[test]\n    #[should_panic]\n    fn it_fails(){\n        panic!("Test failed!");\n    }\n\n    #[test]\n    fn call_simple_add(){\n        assert!(simple_add());\n    }\n\n}\n\nfn simple_add() -> bool {\n    if 2+2 == 4 {\n        true\n    } else {\n        false\n    }\n}\n</code></pre>\n<h2>Concurrency</h2>\n<pre><code class="language-rust">use std::thread;\n\nfn main() {\n    let handle = thread::spawn(move || {\n        println!("Hello from a thread!")\n    });\n\n    handle.join().unwrap();\n    println!("Hello from main");\n\n}\n</code></pre>\n<pre><code class="language-rust">use std::thread;\n\nfn main() {\n    let v = vec![1, 2, 3];\n    let mut thread_handles = Vec::new();\n\n    for e in v {\n        // Here the move keyword is forcing the closure to take ownership:\n        thread_handles.push(thread::spawn(move || println!("{:?}", e)));\n    }\n\n    println!("Main thread!");\n    \n    for handle in thread_handles {\n        handle.join().unwrap();\n    }\n}\n</code></pre>\n<p>Threads can communicate between each other with channels.\nA channel has a transmitter and a receiver. A channel\nis considered closed when either the transmitter or the\nreceiver is dropped.</p>\n<pre><code class="language-rust">use std::thread;\nuse std::sync::mpsc; // multi producer single consumer\n\nfn main() {\n    let (transmitter, receiver) = mpsc::channel();\n    \n    let val = String::from("Transmitting!");\n    thread::spawn(move || {\n        transmitter.send(val).unwrap();\n    });\n\n    let msg = receiver.recv().unwrap();\n    println!("{}", msg);\n}\n</code></pre>\n<p>Types that implement Send are safe to pass by value to another thread. They can be moved accross threads. </p>\n<p>Types that implement Sync are safe to pass by non mutable reference to another thread. They can be shared accross threads. </p>\n<pre><code class="language-rust">use std::thread;\nuse std::sync::Arc;\n\nfn main() {\n    let rc1 = Arc::new(String::from("test"));\n    let rc2 = rc1.clone();\n    thread::spawn(move || {\n        rc2;\n    });\n}\n</code></pre>\n<p>Mutexes allow to manage the access of a variable by several thread.</p>\n<pre><code class="language-rust">use std::thread;\nuse std::sync::{Arc, Mutex};\n\nfn main() {\n    let counter = Arc::new(Mutex::new(0));\n    let mut handles = vec![];\n    \n    for _ in 0..8 {\n        let counter = Arc::clone(&#x26;counter);\n        let handle = thread::spawn(move || {\n            let mut num = counter.lock().unwrap();\n            *num += 1;\n        });\n        handles.push(handle);\n    }\n\n    for handle in handles {\n        handle.join().unwrap();\n    }\n    \n    println!("{}", counter.lock().unwrap());\n}\n</code></pre>\n<h2>Webassembly</h2>\n<h3>Setting up of environment</h3>\n<pre><code class="language-bash">rustup update\nrustc --version\ncargo install cargo-generate\ncurl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh\nnvm install 16.15.0\n</code></pre>\n<h3>Starting a project</h3>\n<p>Run the command:</p>\n<pre><code class="language-bash">cargo generate --git https://github.com/rustwasm/wasm-pack-template\n</code></pre>\n<p>and enter a project name, e.g. wasm-game-of-life when prompted.</p>\n<pre><code class="language-bash">cd wasm-game-of-life\nwasm-pack build\nnpm init wasm-app www\ncd www\nnpm start\n</code></pre>',id:"/Users/nicolas/repos/github.com/nperon/workshop/src/pages/2022-02-06-rust/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2022-02-06T10:17:00.823Z",path:"/rust",title:"Rust",excerpt:"",tags:["rust"]}}],tagName:"rust"}}}});
//# sourceMappingURL=path---tags-rust-485fa28134f7b6ca8526.js.map