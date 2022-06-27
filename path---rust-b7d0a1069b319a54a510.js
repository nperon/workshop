webpackJsonp([0x5c39352ed0bb],{433:function(e,n){e.exports={data:{markdownRemark:{html:'<h2>Cargo commands</h2>\n<p>Command to create a project:</p>\n<pre><code class="language-bash">cargo new hello\n</code></pre>\n<p>You can compile and run the project now with:</p>\n<pre><code class="language-bash">cargo run\n</code></pre>\n<p>This builds the project in a directory called <code>target/debug</code>.\nTo build the project in the <code>target/release</code> directory intended for prod, just run:</p>\n<pre><code class="language-bash">cargo run --release\n</code></pre>\n<p>A good tip to improve the code with idiomatic rust coding hints/warnings is to run:</p>\n<pre><code class="language-bash">cargo clippy\n</code></pre>\n<h2>Strings</h2>\n<p>String slices refered to as <code>str</code>\nare almost always handled in the shape of borrowed string slices <code>&#x26;str</code>.\nSee also the Rust documentation on <a href="https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html">references and borrowing</a>.</p>\n<p>A string literal stated\n<code>let msg = "Hello 🌎";</code>\nis a borrowed string slice.</p>\n<p>The other string type is String.\nData in a borrowed string slice cannot be modified\nwhile data in a String can be modified.</p>\n<p>A String can be obtained by applying the to_string() method on a\nborrowed string slice:</p>\n<pre><code>let msg = "ab🎉".to_string();\n</code></pre>\n<p>or else by passing the borrowed string slice to String::from:</p>\n<pre><code>let msg = String::from("ab🎉");\n</code></pre>\n<p>Internally, a borrowed string slice is made up of a pointer to some byte and\na length. The length is the number of unicode characters in the string.</p>\n<p>Bytes can be extracted from a borrowed string slice with the bytes() method: <code>word.bytes();</code></p>\n<p>An iterator on unicode scalars can be built with <code>word.chars();</code></p>\n<p>Additionally, an iterator on graphemes can be retrieved using a package called unicode-segmentation with:</p>\n<p><code>graphemes(my_string, true)</code></p>\n<p>A given item in the grapheme can then be accessed with by appending a statement like<code>.nth(3)</code></p>\n<h2>Structs and Traits</h2>\n<pre><code class="language-rust">#[derive(Debug)]\nstruct RedFox {\n    enemy: bool,\n    life: u32,\n}\n\ntrait Noisy {\n    fn get_noise(&#x26;self) -> &#x26;str;\n}\n\nimpl Noisy for RedFox {\n    fn get_noise(&#x26;self) -> &#x26;str { "Meow?" }\n}\n\nfn print_noise&#x3C;T: Noisy>(item: T) {\n    println!("", item.get_noise());\n}\n\nimpl Noisy for u8 {\n    fn get_noise(&#x26;self) -> &#x26;str { "BYTE!" }\n}\n\nfn main() {\n    print_noise(5_u8); // prints "BYTE!"\n}\n</code></pre>\n<h2>Vectors</h2>\n<pre><code class="language-rust">let mut v: Vec&#x3C;i32> = Vec::new();\nv.push(2);\nv.push(4);\nv.push(6);\nlet x = v.pop();    // x is 6\nprintln("{}", v[1]);// prints "4"\nlet mut u = vec![2, 4, 6];\n</code></pre>\n<h2>Hashmaps</h2>\n<pre><code class="language-rust">let mut h: HashMap&#x3C;u8, bool> = HashMap::new();\nh.insert(5, true);\nh.insert(6, false);\nlet have_five = h.remove(&#x26;5).unwrap();\n</code></pre>\n<p>Other collections: VecDeque, LinkedList, HashSet, BinaryHeap, BTreeMap, BTreeSet</p>\n<h2>Enums</h2>\n<pre><code class="language-rust">enum Color {\n    Red,\n    Green,\n    Blue,\n}\nlet color = Color::Red;\n</code></pre>\n<pre><code class="language-rust">enum DispenserItem {\n    Empty,\n    Ammo(u8),\n    Things(String, i32),\n    Place {x: i32, y: i32},\n}\n\nuse DispenserItem::*;\nlet item1 = Ammo(69);\nlet item2 = Things("hat".to_string(), 7);\n</code></pre>\n<h3>The rust predefined Option enum</h3>\n<pre><code class="language-rust">enum Option&#x3C;T> {\n    Some(T),\n    None,\n}\n\nlet mut x: Option&#x3C;i32> =  None;\nx = Some(5);\nx.is_some(); // true\nx.is_none(); false\nfor i in x {\n    println!("{}", i); // prints 5\n}\n</code></pre>\n<h3>The rust predefined Result enum</h3>\n<pre><code class="language-rust">enum Result&#x3C;T, E> {\n    Ok(T),\n    Err(E),\n}\n</code></pre>\n<p>Example with Result:</p>\n<pre><code class="language-rust">use std::fs::File;\n\nfn main() {\n    let res = File::open("foo");\n    let f = res.unwrap();\n}\n\nfn main() {\n    let res = File::open("foo");\n    let f = res.expect("error message");\n}\n\nfn main() {\n    let res = File::open("foo");\n    let f = res.is_ok() {\n        let f = res.unwrap();\n    }\n}\n\nfn main() {\n    let res = File::open("foo");\n    match res {\n        Ok(f) => { /* do stuff */ },\n        Err(e) => { /* do stuff */ },\n    }\n}\n</code></pre>',frontmatter:{title:"Rust",date:"February 06, 2022",path:"/rust",tags:["rust"],excerpt:""}}},pathContext:{prev:{html:'<h3>System parameters</h3>\n<p>Elasticsearch version and more basic parameters:</p>\n<pre><code class="language-bash">curl -XGET https://localhost:9200 -u admin:admin --insecure\n</code></pre>\n<p>Information on nodes:</p>\n<pre><code class="language-bash">curl -XGET https://localhost:9200/_cat/nodes?v -u admin:admin --insecure\n</code></pre>\n<p>Integrated plugins:</p>\n<pre><code class="language-bash">curl -XGET https://localhost:9200/_cat/plugins?v -u admin:admin --insecure\n</code></pre>\n<p>Information on authentication:</p>\n<pre><code class="language-bash">curl -XGET https://localhost:9200/_opendistro/_security/authinfo -u admin:admin --insecure\n</code></pre>\n<p>Information on cluster:</p>\n<pre><code class="language-http">http://localhost:9200/_cluster/settings?include_defaults=true\n</code></pre>\n<p>Indices:</p>\n<pre><code class="language-bash">curl -XGET https://localhost:9200/_cat/indices -u admin:admin --insecure\n</code></pre>\n<h3>Cloning an index from dev tools console:</h3>\n<pre><code>POST _reindex\n{\n  "source": {\n    "index": "portefeuille"\n  },\n  "dest": {\n    "index": "portefeuille_test_1"\n  }\n}\n</code></pre>\n<h3>Creating a sample index from dev tools console:</h3>\n<pre><code>DELETE /bankdata\n</code></pre>\n<pre><code>PUT /bankdata\nPOST /bankdata/1\n{ "age": 42, "balance": 12000 }\nPOST /bankdata/2\n{ "age": 28, "balance": 7000 }\nPOST /bankdata/3\n{ "age": 51, "balance": 2300 }\nPOST /bankdata/4\n{ "age": 15, "balance": 450 }\nPOST /bankdata/5\n{ "age": 33 }\nPOST /bankdata/6\n{ "age": 32 }\nPOST /bankdata/7\n{ "age": 27 }\nPOST /bankdata/8\n{ "age": 79 }\nPOST /bankdata/9\n{ "age": 43, balance: null }\n</code></pre>\n<pre><code>GET /bankdata\n</code></pre>\n<pre><code>GET /bankdata/_search\n{\n    "query": {\n        "match_all": {}\n    }\n}\n</code></pre>\n<h3>Updating a given field in an index</h3>\n<pre><code>POST lanturlu_portefeuille/_update_by_query\n{\n  "script": {\n    "lang": "painless",\n    "source": """\n   try {\n        String fieldName = \'nom_conseille_pv\';\n        String value = ctx._source[fieldName];\n        ctx._source[fieldName] = value.replace(" ","_");\n      }\n      catch(Exception e) {\n      }\n    """\n  }\n}\n</code></pre>\n<h3>Template for indexing a field as a geo_shape</h3>\n<pre><code>PUT _template/geotemplate_geoshape_dpt\n{ "index_patterns": [\n  "index_pattern_title"\n  ],\n  "settings": {},\n    "mappings": {\n      "properties": {\n        "wkt" :{\n          "type": "geo_shape"\n        }\n      }\n    },\n    "aliases": {}\n}\n</code></pre>\n<h3>Painless language scripts</h3>\n<pre><code>(((ctx?._source["MY_PARAMETER"]?:0)?:0)/((ctx?._source["OtherVariable"]?:1)?:1)?:1)\n</code></pre>',id:"/home/nicolas/Documents/workshop/src/pages/2020-12-03-ELK-4/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-12-03T22:01:12.451Z",path:"/elk-useful-queries",title:"Useful Queries",excerpt:"",tags:["Elastic Search","queries","environment variables","system"]}},next:{html:'<ul>\n<li><a href="https://docs.starport.network/guide/">Starport tutorial</a></li>\n<li><a href="http://localhost:1317/">swagger view of the high-level blockchain API</a></li>\n</ul>\n<p>Execute <code>starport version</code> to find out your installed starport version</p>\n<pre><code class="language-bash">starport scaffold chain github.com/cosmonaut/hello\n</code></pre>\n<pre><code class="language-bash">starport scaffold --help\n</code></pre>\n<pre><code class="language-bash">starport chain serve\n</code></pre>',id:"/home/nicolas/Documents/workshop/src/pages/2022-02-18-starport/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2022-02-18T10:17:00.823Z",path:"/starport",title:"Starport",excerpt:"",tags:["starport"]}}}}}});
//# sourceMappingURL=path---rust-b7d0a1069b319a54a510.js.map