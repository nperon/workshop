webpackJsonp([0x6a173977d01b],{453:function(n,e){n.exports={data:{markdownRemark:{html:"",frontmatter:{title:"English idioms",date:"July 15, 2022",path:"/idioms",tags:["idioms"],excerpt:""}}},pathContext:{prev:{html:'<h2>Formatted printing and string formatting with fmt package</h2>\n<p>Package fmt provides 3 terminal printing functions: </p>\n<ul>\n<li>Printf — custom format</li>\n<li>Print — simple print</li>\n<li>Println — simple print with a newline</li>\n</ul>\n<p>and an F and an S variants of the above functions:</p>\n<ul>\n<li>F prints to a data stream: Fprintf, Fprint, Fprintln</li>\n<li>S prints to a new string: Sprintf, Sprint, Sprintln</li>\n</ul>\n<p><em>verb</em>\t\t<em>description</em><br>\n%v\t\t\tdefault<br>\n%t\t\t\t"true" or "false"<br>\n%c\t\t\tcharacter<br>\n%X\t\t\tHex<br>\n%U\t\t\tUnicode format<br>\n%e\t\t\tScientific notation  </p>\n<p><em>Escape Sequence</em>\t<em>Description</em><br>\n\\\t\t\t\t\tBackslash<br>\n\'\t\t\t\t\tSingle quote<br>\n"\t\t\t\t\tDouble quote<br>\n\\n\t\t\t\t\tNewline<br>\n\\u or \\U\t\t\tUnicode (2byee &#x26; 4byte)<br>\n\\x\t\t\t\t\tRaw bytes (as hex digits)  </p>\n<pre><code class="language-go">fmt.Printf("%v\\n", 8)\nfmt.Printf("This is a \\"Quote\\"\\n")\n</code></pre>\n<pre><code class="language-go">func surround(msg string, left, right rune) string {\n    return fmt.Sprintf("%c%v%c", left, msg, right)\n}\n\nsurrounded := surround("this message", \'(\', \')\')\nfmt.Println(surrounded)\n</code></pre>\n<h2>Structures</h2>\n<pre><code class="language-go">package main\n\nimport "fmt"\n\ntype Passenger struct {\n    name         string\n    ticketNumber int\n    boarded      bool\n}\n\ntype Bus struct {\n    FrontSeat passenger\n}\n\nfunc main() {\n    var (\n        bill = Passenger{name: "Bill", ticketNumber: 2}\n        ella = Passenger{name: "Ella", ticketNumber: 3}\n    )\n    fmt.Println(bill, ella)\n    var heidi Passenger\n    heidi.name = "Heidi"\n    heidi.ticketNumber = 4\n    fmt.Println(heidi)\n    var vehicle = Bus{FrontSeat: ella}\n    fmt.Println(vehicle)\n}\n</code></pre>\n<h2>Arrays</h2>\n<pre><code class="language-go">Go arrays have fixed size. \n</code></pre>\n<h2>Slices</h2>\n<p>Slices are companion types that work with arrays.\nThey enable a "view" into an array.\nViews are dynamic and not fixed in size.\nFunctions can accept a clice as a function parameter.\nAny array can be operated upon via slice.</p>\n<pre><code class="language-go">mySlice := []int{1, 2, 3}\nitem1 := mySlice[0]\n</code></pre>\n<pre><code class="language-go">numbers := [...]int{1, 2, 3, 4}\nslice1 := numbers[:]\nslice2 := numbers[1:]\nslice3 := numbers[:1]\nslice4 := numbers[:2]\nslice5 := numbers[1:3]\n</code></pre>\n<p>The <code>append()</code> function can add additional elements:</p>\n<pre><code class="language-go">numbers := [...]int{1, 2, 3, 4}\nnumbers = append(numbers, 4, 5, 6)\n</code></pre>\n<p>3 dots can be used to extend a slice with another slice:</p>\n<pre><code class="language-go">part1 := []int{1, 2, 3}\npart2 := []int{4, 5, 6}\ncombined := append(part1, part2...)\n</code></pre>\n<p>Slices can be preallocated with specific capacities using the make function:</p>\n<pre><code class="language-go">slice := make([]int, 10)\n</code></pre>\n<p>This saves computation time.</p>\n<p>The len() function returns the length of any slice;</p>\n<pre><code class="language-go">for i:=0; i &#x3C; len(slice); i++ {\n    // ...\n}\n</code></pre>\n<p>Slices can be multidimensional:</p>\n<pre><code class="language-go">board := [][] string {\n    []string{"_", "_", "_"},\n    {"_", "_", "_"},\n    {"_", "_", "_"},\n}\nboard[0][0] = "X"\nboard[0][0] = "O"\n</code></pre>\n<h2>Ranges</h2>\n<p>The range keyword creates an iterator.</p>\n<pre><code class="language-go">slice := []string{"Hello", "world", "!"}\nfor i, element := range slice {\n    fmt.Println(i, element, ":")\n    for _, ch := range element {\n        fmt.Printf("  %q\\n", ch)\n    }\n}\n</code></pre>\n<h2>Maps</h2>\n<pre><code class="language-go">myMap1 := make(map[string]int)\n\nmyMap2 := map[string]int{\n    "item 1": 1,\n    "item 2": 2,\n    "item 3": 3,\n}\n\nmyMap1["favorite number"] = 5\nmissing := myMap1["age"] // default value\n\ndelete (myMap1, "favorite number")\n\nprice, found := myMap1["price"]\nif !found {\n    fmt.Println("price not found")\n    return\n}\n</code></pre>\n<p>Just like slices, maps can be iterated through using the range keyword:</p>\n<pre><code class="language-go">for key, value := range myMap2 {\n    // ...\n}\n</code></pre>\n<h2>Pointers</h2>\n<p>An asterisk (*) used with a type indicates the value is a pointer.\nAn ampersand (&#x26;) creates a pointer from a variable.</p>\n<pre><code class="language-go">value := 10\nvar valuePtr *int // this declaration is often skipped\nvaluePtr = &#x26;value // value address\n</code></pre>\n<p>An asterisk (*) when used with a pointer will dereference the pointer</p>\n<pre><code class="language-go">func increment(x *int) {\n    *x += 1\n}\n\ni := 1\nincrement(&#x26;i)\n</code></pre>\n<p>Example: </p>\n<pre><code class="language-go">package main\n\nimport "fmt"\n\ntype SecurityTag struct {\n    state bool\n}\n\nfunc activate(tag *SecurityTag) {\n    tag.state = true\n}\n\nfunc deactivate(tag *SecurityTag) {\n    tag.state = false\n}\n\nfunc checkout(slice []*SecurityTag) {\n    for _, tag := range slice {\n        deactivate(tag)\n    }\n}\n\nfunc printSlice(slice []*SecurityTag) {\n    fmt.Printf("%t\\n %t\\n %t\\n %t\\n", slice[0].state, slice[1].state, slice[2].state, slice[3].state)\n}\n\nfunc main() {\n    item1 := SecurityTag{state: true}\n    item2 := SecurityTag{state: true}\n    item3 := SecurityTag{state: true}\n    item4 := SecurityTag{state: true}\n\n    items := []*SecurityTag{&#x26;item1, &#x26;item2, &#x26;item3, &#x26;item4}\n    printSlice(items)\n\n    deactivate(&#x26;item1)\n    printSlice(items)\n\n    checkout(items)\n    printSlice(items)\n\n}\n</code></pre>\n<h2>Idiomatic Go — receiver functions</h2>\n<p>Receiver functions privide the dot notation for structs. This allows to\ncreate more convenient APIs.</p>\n<pre><code class="language-go">type Coordinate struct {\n    X, Y int\n}\n\nfunc (coord *Coordinate) shiftBy(x, y int) {\n    coord.X += x\n    coord.Y += y\n}\n\ncoord := Coordinate{5, 5}\ncoord.shiftBy(1, 1) // (6, 6)\n</code></pre>\n<h2>Idiomatic Go — iota</h2>\n<p>The iota keyword can be used to assign integers to constants.\nThe two following snippets define and initialize constant\nOnline to 0, Offline to 1, Maintenance to 2 and Retired to 3.</p>\n<pre><code class="language-go">// Short form\nconst (\n    Online = iota\n    Offline\n    Maintenance\n    Retired\n)\n</code></pre>\n<pre><code class="language-go">// Long form:\nconst (\n    Online = iota\n    Offline = iota\n    Maintenance = iota\n    Retired = iota\n)\n</code></pre>\n<p>Go allows to skip values as follows:</p>\n<pre><code class="language-go">const (\n    s0 = iota   // 0\n    -           // 1\n    -           // 2\n    s3          // 3\n    s4          // 4\n)\n</code></pre>\n<p>It is possible to start at a different value:</p>\n<pre><code class="language-go">const (\n    i3 = iota + 3   // 3\n    i4              // 4\n    i5              // 5\n)\n</code></pre>\n<h2>Idiomatic Go — variadics</h2>\n<pre><code class="language-go">package main\n\nimport "fmt"\n\nfunc sum(nums ...int) int {\n    sum := 0\n    for _, n := range nums {\n        sum += n\n    }\n    return sum\n}\n\nfunc main() {\n    a := []int{1, 2, 3}\n    a := []int{4, 5, 6}\n\n    all := append(a, b...)\n\n    answer := sum(all...)\n    fmt.Println(answer)\n\n    answer := sum(1, 2, 3, 4, 5, 6)\n    fmt.Println(answer)\n}\n</code></pre>\n<h2>Idiomatic Go — init function</h2>\n<p>Each package can have it\'s own init() function. The init function\nof each will run a single time even when the package is imported\nseveral times.</p>\n<p>For instance an init function can initialize an object in file init.go:</p>\n<pre><code class="language-go">package main\n\nvar EmailExpr *regexp.Regexp\n\nfunc init() {\n    compiled, ok := regexp.Compile(`.+@.+\\..+`)\n    if ok != nil {\n        panic("failed to compile regular expression")\n    }\n    EmailExpr = compiled\n    fmt.Println("regular expression compiled successfully")\n}\n</code></pre>\n<p>The latter object can be used in the main.go like this:</p>\n<pre><code class="language-go">package main\n\nvar EmailExpr *regexp.Regexp\n\nfunc IsValidEmail(addr string) bool {\n    return EmailExpr.Match([]byte(addr))\n}\n\nfunc main() {\n    fmt.Println(isValidEmail("invalid@example"))\n}\n</code></pre>\n<h2>Idiomatic Go — testing</h2>\n<p>A unit test for the above main function can be coded in a file\ncalled <code>main_test.go</code>:</p>\n<pre><code class="language-go">package main\n\nimport "testing"\n\nfunc TestIsValidEmail(t *testing.T) {\n    data := "email@example.com"\n    if !IsValidEmail(data) {\n        t.Errorf("IsValidEmail(%v)=false, want true", data)\n    }\n}\n</code></pre>\n<p>Tests can be executed with</p>\n<pre><code class="language-bash">go test\n</code></pre>\n<p>To execute tests in a specific file execute for instance: </p>\n<pre><code class="language-bash">go test -v ./foo/foo_test.go\n</code></pre>\n<p>Some functions available in the test package:</p>\n<ul>\n<li><code>Fail()</code>: mark the test as failed</li>\n<li><code>Errorf(string)</code>: fail &#x26; add a message</li>\n<li><code>FailNow()</code>: mark the test as failed, abort current test</li>\n<li><code>Fatalf(string)</code>: fail, abort and add a message</li>\n<li><code>Logf()</code>: equivalent to Printf, but only when test fails</li>\n</ul>\n<p>A <a href="https://yourbasic.org/golang/table-driven-unit-test/">test table</a> can\nbe nicely coded to test a function with more than one set of data.</p>\n<h2>Function literals</h2>\n<p>Function literals also known as anonymous function\nare functions within a function. They can encapsulate data.</p>\n<pre><code class="language-go">func helloWorld() {\n    fmt.Printf("Hello, ");\n    world := func() {\n        fmt.Printf("World!\\n")\n    }\n    world()\n    world()\n    world()\n}\n</code></pre>\n<p>A function literal can be passed as a parameter to a function: </p>\n<pre><code class="language-go">func customMsg(fn func(m string), msg string) {\n    msg = strings.ToUpper(msg)\n    fn(msg)\n}\n\nfunc surround() func(msg string) {\n    return func(msg string) {\n        fmt.Printf("%.*s\\n", len(msg), "------------"))\n        fmt.Println(msg)\n        fmt.Printf("%.*s\\n", len(msg), "------------"))\n    }\n}\n\ncustomMsg(surround(), "hello")\n</code></pre>\n<p>Closures are function literals that access variables\ndefined outside of their scope.</p>\n<p>A type alias can be defined for a literal function so\nthat is is simple to pass it as a parameter to a function: </p>\n<pre><code class="language-go">type DiscountFunc func(subTotal float64) float64\n\nfunc calculatePrice(\n        subtotal float64,\n        discountFn DiscountFunc\n    ) float64 {\n        return subTotal - (subTotal * discountFn(subTotal))\n}\n</code></pre>\n<h2>Using defer</h2>\n<pre><code class="language-go">func one() {\n    fmt.Println("1")\n}\n\nfunc two() {\n    fmt.Println("2")\n}\n\nfunc sample() {\n    fmt.Println("Begin")\n    defer one()\n    defer two()\n    fmt.Println("End")\n}\n</code></pre>',id:"/home/nicolas/projects/workshop/src/pages/2022-06-14-go/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2022-06-14T14:24:43.180Z",path:"/go",title:"Go",excerpt:"Go",tags:["go"]}},next:null}}}});
//# sourceMappingURL=path---idioms-3234304f3255c3de7af1.js.map