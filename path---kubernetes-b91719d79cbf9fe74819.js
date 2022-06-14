webpackJsonp([54858438791056],{424:function(e,n){e.exports={data:{markdownRemark:{html:'<h2>Terminology</h2>\n<ul>\n<li>kubernetes / k8s / kube: the whole orchestration system</li>\n<li>kubeclt aka cube control: cli to configure kubernetes and manage apps</li>\n<li>node: single server in the k8s cluster</li>\n<li>kubelet: k8s agent running on nodes</li>\n<li>each kubelet can have a kube-proxy controlling its networking</li>\n<li>control plane aka the "master": set of containers that manage the cluster. Includes api server, scheduler, controller manager, etcd, core DNS and more</li>\n</ul>\n<p>A possible local Kubernetes environment could be composed of the following applications: </p>\n<ul>\n<li>minikube: a local cluster which can be installed and run on your machine. </li>\n<li>kubectl: the interface to interact with the cluster</li>\n<li>k9s: a CLI to monitor and manage your local kubernetes clusters</li>\n</ul>\n<!-- ## Links\n\nKubernetes in a browser:  \n\ntry [http://play-with-k8s.com](http://play-with-k8s.com)\nor [katacoda.com](katacoda.com) in browser -->\n<h1>Local install</h1>\n<p>Follow documentation on <a href="https://minikube.sigs.k8s.io/docs/start/">this page</a> to install minikube locally.</p>\n<p>You can then check your minikube status with: </p>\n<pre><code class="language-bash">minikube status\n</code></pre>\n<p>It can be started if necessary with</p>\n<pre><code class="language-bash">minikube start\n</code></pre>\n<p>Install now kubectl following documentation on <a href="https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/">this page</a>. </p>\n<p>The <a href="https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/#optional-kubectl-configurations-and-plugins">Optional kubectl configurations and plugins</a> can be skipped in a first stage.</p>\n<p>Configuration can be verified with:</p>\n<pre><code class="language-bash">kubectl cluster-info\n</code></pre>\n<p>You can find out the location of your kubectl executable with:</p>\n<pre><code class="language-bash">which kubectl\n</code></pre>\n<p>Download the <code>k9s_Linux_x86_64.tar.gz</code> archive available on\n<a href="https://github.com/derailed/k9s/releases">this page</a> from the k9s github.\nOnce it is extracted, just execute k9s with:</p>\n<pre><code class="language-bash">./k9s\n</code></pre>\n<h2>Pod commands together with a proper example to apply them:</h2>\n<p><code>kubectl get pod</code><br>\nget information about all running pods  </p>\n<p><code>kubectl describe pod &#x3C;pod></code><br>\ndescribe one pod  </p>\n<p><code>kubectl expose pod &#x3C;pod> --port=444 --name=frontend</code><br>\nexpose the port of a pod (creates a new service)  </p>\n<p><code>kubectl port-forward &#x3C;pod> 8080</code><br>\nport forward the exposed pod port to your local machine  </p>\n<p><code>kubectl attach &#x3C;podname> -i</code><br>\nattach to the pod  </p>\n<p><code>kubectl exec &#x3C;pod> -- command</code><br>\nexecute a command on the pod  </p>\n<p><code>kubectl label pods &#x3C;pod> mylabel=awesome</code><br>\nadd a new label to a pod  </p>\n<p><code>kubectl run -i --tty busybox --imagine=busybox --restart=Never -- sh</code><br>\nrun a shell in a pod  </p>\n<p>With the following example of a pod description\nin a file called <code>helloworld.yml</code>,</p>\n<pre><code class="language-yaml">apiVersion: v1\nkind: Pod\nmetadata:\n  name: nodehelloworld.example.com\n  labels:\n    app: helloworld\nspec:\n  containers:\n  - name: k8s-demo\n    image: wardviaene/k8s-demo\n    ports:\n    - name: nodejs-port\n      containerPort: 3000\n</code></pre>\n<p>The pod can be created with:</p>\n<pre><code class="language-bash">kubectl create -f helloworld.yml\n</code></pre>\n<p>Then, local port 8081 can be forwarded to port 3000 of the pod with:</p>\n<pre><code class="language-bash">kubectl port-forward nodehelloworld.example.com 8081:3000\n</code></pre>\n<p>Or else we can create a service of type NodePort to expose the pod with:</p>\n<pre><code class="language-bash">kubectl expose pod nodehelloworld.example.com --type=NodePort --name nodehelloworld-service\n</code></pre>\n<p>The end point to that service from the local machine can be displayed with:</p>\n<pre><code class="language-bash">minikube service nodehelloworld-service --url\n</code></pre>\n<p>IP addresses of services within the cluster are different. They can be accessed with:</p>\n<pre><code class="language-bash">kubectl get service\n</code></pre>\n<p>It is possible to attach to the pod and watch the possible logs with:</p>\n<pre><code class="language-bash">kubectl attach nodehelloworld.example.com\n</code></pre>\n<p>To execute a command like <code>ls /app</code> run the following line:</p>\n<pre><code class="language-bash">kubectl exec nodehelloworld.example.com -- ls /app\n</code></pre>\n<p>It is instructive to run the two following commands now:</p>\n<pre><code class="language-bash">kubectl exec nodehelloworld.example.com -- touch /app/test.txt\nkubectl exec nodehelloworld.example.com -- ls /app\n</code></pre>\n<p>A description of the pod can be displayed with:</p>\n<pre><code class="language-bash">kubectl describe service nodehelloworld-service\n</code></pre>\n<p>Launch another pod based on the busybox image with:</p>\n<pre><code class="language-bash">kubectl run -i --tty busybox --image=busybox --restart=Never -- sh\n</code></pre>\n<p>Let us assume that the endpoint of our nodehelloworld-service displayed in its description was 172.17.0.2:3000. Then, commands can be executed in the shell of our busybox like:</p>\n<pre><code class="language-bash">ls\ntelnet 172.17.0.2 3000\n</code></pre>\n<p>Pods can finally be deleted with:</p>\n<pre><code class="language-bash">kubectl delete pod busybox\nkubectl delete pod nodehelloworld.example.com\n</code></pre>\n<p>You can also delete the service nodehelloworld-service with:</p>\n<pre><code class="language-bash">kubectl delete service nodehelloworld-service\n</code></pre>\n<h2>Starting a cluster with an nginx container</h2>\n<p>Create a file called <code>deployment.yaml</code> with the following content:</p>\n<pre><code class="language-yaml">apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.21.4\n        ports:\n        - containerPort: 80\n</code></pre>\n<p>Create another file called <code>service.yaml</code> with the following content:</p>\n<pre><code class="language-yaml">apiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-service\n  labels:\n    app: nginx\nspec:\n  selector:\n    app: nginx\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 80\n  type: LoadBalancer\n</code></pre>\n<p>Cluster can now be started with:</p>\n<pre><code class="language-bash">kubectl apply -f deployment.yaml\n</code></pre>\n<p>followed with:</p>\n<pre><code class="language-bash">kubectl apply -f service.yaml\n</code></pre>\n<p>To display services execute:</p>\n<pre><code class="language-bash">kubectl get services\n</code></pre>\n<p>The following command is an interesting one to run now:</p>\n<pre><code class="language-bash">minikube service nginx-service\n</code></pre>\n<p>since it displays the url of the nginx-service and opens the latter\nservice in your default browser.</p>\n<p>To display namespaces execute:</p>\n<pre><code class="language-bash">kubectl get namespaces\n</code></pre>\n<p>To find out the namespace where pods have been created you can run this command:</p>\n<pre><code class="language-bash">kubectl get pods --all-namespaces\n</code></pre>\n<p>To stop one of the pods displayed whose name is for instance <code>hello-minikube-6ddfcc9757-h4ctx</code>\nexecute the following command:</p>\n<pre><code class="language-bash">kubectl delete -n default pod hello-minikube-6ddfcc9757-h4ctx\n</code></pre>\n<p>To display deployments currently running execute:</p>\n<pre><code class="language-bash">kubectl get deployments\n</code></pre>\n<p>To delete a service first display all of your services with:</p>\n<pre><code class="language-bash">kubectl get service -o wide\n</code></pre>\n<p>You can now pick the one you wish to delete from the displayed list\n--- for instance nginx-service --- and then delete it with:</p>\n<pre><code class="language-bash">kubectl delete service nginx-service\n</code></pre>\n<p>Delete deployment nginx-deployment with:</p>\n<pre><code class="language-bash">delete deployment nginx-deployment\n</code></pre>\n<h2>Minikube example</h2>\n<pre><code class="language-bash">kubectl create deployment hello-minikube --image=k8s.gcr.io/echoserver:1.4\n</code></pre>\n<pre><code class="language-bash">kubectl expose deployment hello-minikube --type=NodePort --port=8080\n</code></pre>\n<pre><code class="language-bash">minikube service hello-minikube\n</code></pre>\n<pre><code class="language-bash">kubectl delete deployment hello-minikube\n</code></pre>\n<pre><code class="language-bash">minikube stop\n</code></pre>\n<p>The minikube vm can optionally be completely reset with:</p>\n<pre><code class="language-bash">minikube delete\n</code></pre>\n<p>After this, Minikube will start from scratch the next time it is started.</p>',frontmatter:{title:"Kubernetes",date:"November 25, 2021",path:"/kubernetes",tags:["kubernetes","cloud","devops"],excerpt:""}}},pathContext:{prev:{html:'<h2>Cargo commands</h2>\n<p>Command to create a project:</p>\n<pre><code class="language-bash">cargo new hello\n</code></pre>\n<p>You can compile and run the project now with:</p>\n<pre><code class="language-bash">cargo run\n</code></pre>\n<p>This builds the project in a directory called <code>target/debug</code>.\nTo build the project in the <code>target/release</code> directory intended for prod, just run:</p>\n<pre><code class="language-bash">cargo run --release\n</code></pre>\n<p>A good tip to improve the code with idiomatic rust coding hints/warnings is to run:</p>\n<pre><code class="language-bash">cargo clippy\n</code></pre>\n<h2>Strings</h2>\n<p>String slices refered to as <code>str</code>\nare almost always handled in the shape of borrowed string slices <code>&#x26;str</code>.\nSee also the Rust documentation on <a href="https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html">references and borrowing</a>.</p>\n<p>A string literal stated\n<code>let msg = "Hello 🌎";</code>\nis a borrowed string slice.</p>\n<p>The other string type is String.\nData in a borrowed string slice cannot be modified\nwhile data in a String can be modified.</p>\n<p>A String can be obtained by applying the to_string() method on a\nborrowed string slice:</p>\n<pre><code>let msg = "ab🎉".to_string();\n</code></pre>\n<p>or else by passing the borrowed string slice to String::from:</p>\n<pre><code>let msg = String::from("ab🎉");\n</code></pre>\n<p>Internally, a borrowed string slice is made up of a pointer to some byte and\na length. The length is the number of unicode characters in the string.</p>\n<p>Bytes can be extracted from a borrowed string slice with the bytes() method: <code>word.bytes();</code></p>\n<p>An iterator on unicode scalars can be built with <code>word.chars();</code></p>\n<p>Additionally, an iterator on graphemes can be retrieved using a package called unicode-segmentation with:</p>\n<p><code>graphemes(my_string, true)</code></p>\n<p>A given item in the graphemes can then be accessed with by appending a statement like<code>.nth(3)</code></p>\n<p>All of the helper methods to manipulate String objects are documented\n<a href="https://doc.rust-lang.org/std/string/struct.String.html#method.bytes">here</a>.</p>\n<h2>String literals</h2>\n<pre><code class="language-rust">let rust = "\\x52\\x75\\x73\\x74";\nprintln!("{}", rust);\n</code></pre>\n<h2>Struct with impl</h2>\n<pre><code class="language-rust">struct Square {\n    width: u32,\n    height: u32,\n}\n\nimpl Square {\n    fn area(&#x26;self) -> u32 {\n        self.width * self.height\n    }\n\n    fn whats_my_width(&#x26;self) -> u32 {\n        self.width\n    }\n\n    fn change_width(&#x26;mut self, new_width: u32){\n        self.width = new_width;\n    }\n}\n</code></pre>\n<h2>Struct with Trait</h2>\n<pre><code class="language-rust">#[derive(Debug)]\nstruct RedFox {\n    enemy: bool,\n    life: u32,\n}\n\ntrait Noisy {\n    fn get_noise(&#x26;self) -> &#x26;str;\n}\n\nimpl Noisy for RedFox {\n    fn get_noise(&#x26;self) -> &#x26;str { "Meow?" }\n}\n\nfn print_noise&#x3C;T: Noisy>(item: T) {\n    println!("", item.get_noise());\n}\n\nimpl Noisy for u8 {\n    fn get_noise(&#x26;self) -> &#x26;str { "BYTE!" }\n}\n\nfn main() {\n    print_noise(5_u8); // prints "BYTE!"\n}\n</code></pre>\n<p>There are two other types of Struct. One is the tuple like Struct:</p>\n<pre><code class="language-rust">struct Coordinates(i32, i32, i32);\n</code></pre>\n<p>The other is the unit like Struct which is useful when combined with Traits:</p>\n<pre><code class="language-rust">struct UnitStruct;\n</code></pre>\n<h2>Utility Traits</h2>\n<ul>\n<li>The Drop Trait:</li>\n</ul>\n<pre><code class="language-rust">struct Course {\n    headline: String,\n    author: String,\n}\n\nimpl Drop for Course {\n    fn drop(&#x26;mut self) {\n        println!("Dropping: {}", self.author);\n    }\n}\n\nfn main() {\n    let course1 = Course{ headline: String::from("Headline!"), author: String::from("Tyler"), };\n\n    drop(course1);\n}\n</code></pre>\n<ul>\n<li>The Clone Trait which is for types that can make copies of themselves :</li>\n</ul>\n<pre><code class="language-rust">trait Clone: Sized {\n    fn clone(&#x26;self) -> Self;\n    fn clone_from(&#x26;mut self, source: &#x26;Self) {\n        *self = source.clone()\n    }\n}\n</code></pre>\n<ul>\n<li>\n<p>The Copy is a shallow Clone</p>\n</li>\n<li>\n<p>From and Into, plus: TryFrom and TryInto</p>\n</li>\n</ul>\n<p><code>fn into(self) -> T</code>: take self and returns a value of type T.</p>\n<p><code>fn from(T) -> Self</code>: take a value of type T and returns self.</p>\n<h2>Lifetimes</h2>\n<p>Every reference has a Lifetime. Most of the time, Lifetimes are implicit and inferred.</p>\n<pre><code class="language-rust">fn longest&#x3C;\'a>(x: &#x26;\'a str, y: &#x26;\'a str) -> &#x26;\'a str {\n    if x.len() > y.len() {\n        x\n    } else {\n        y\n    }\n}\n</code></pre>\n<p>Syntax for lifetime in a struct is as follows:</p>\n<pre><code class="language-rust">struct MyString&#x3C;\'a> {\n    text: &#x26;\'a str\n}\n</code></pre>\n<p>Here is an example of a variable defined with a static lifetime:</p>\n<pre><code class="language-rust">let s: &#x26;\'static str = "I have static lifetime";\n</code></pre>\n<h2>Vectors</h2>\n<pre><code class="language-rust">let mut v: Vec&#x3C;i32> = Vec::new();\nv.push(2);\nv.push(4);\nv.push(6);\nlet x = v.pop();    // x is 6\nprintln("{}", v[1]);// prints "4"\nlet mut u = vec![2, 4, 6];\n</code></pre>\n<p>Other ways to instanciate vectors: </p>\n<pre><code class="language-rust">let vect= Vec::&#x3C;i32>::with_capacity(2);\nprintln!("{}", vect.capacity());\n\nlet v: Vec&#x3C;i32> = (0..5).collect();\nprintln!("{:?}", v);\n</code></pre>\n<h2>Slices</h2>\n<pre><code class="language-rust">let v: Vec&#x3C;i32> = (0..5).collect();\nprintln!("{:?}", v);\n\nlet sv: &#x26;[i32] = &#x26;v[2..4];\nprintln!("{:?}", sv);\n</code></pre>\n<p>A slice is a fat pointer i.e. a non owning reference to a <strong>range</strong> of consecutive values.</p>\n<h2>Hashmaps</h2>\n<pre><code class="language-rust">let mut h: HashMap&#x3C;u8, bool> = HashMap::new();\nh.insert(5, true);\nh.insert(6, false);\nlet have_five = h.remove(&#x26;5).unwrap();\n</code></pre>\n<p>Other collections: VecDeque, LinkedList, HashSet, BinaryHeap, BTreeMap, BTreeSet</p>\n<h2>Enums</h2>\n<pre><code class="language-rust">enum Color {\n    Red,\n    Green,\n    Blue,\n}\nlet color = Color::Red;\n</code></pre>\n<pre><code class="language-rust">enum DispenserItem {\n    Empty,\n    Ammo(u8),\n    Things(String, i32),\n    Place {x: i32, y: i32},\n}\n\nuse DispenserItem::*;\nlet item1 = Ammo(69);\nlet item2 = Things("hat".to_string(), 7);\n</code></pre>\n<pre><code class="language-rust">enum Pet {dog, cat, fish}\n\nimpl Pet {\n    fn what_am_i(self) -> &#x26;\'static str {\n        match self {\n            Pet::dog => "I am a dog",\n            Pet::cat => "I am a cat",\n            Pet::fish => "I am a fish",\n        }\n    }\n}\n</code></pre>\n<h3>The rust predefined Option enum</h3>\n<pre><code class="language-rust">enum Option&#x3C;T> {\n    Some(T),\n    None,\n}\n\nlet mut x: Option&#x3C;i32> =  None;\nx = Some(5);\nx.is_some(); // true\nx.is_none(); false\nfor i in x {\n    println!("{}", i); // prints 5\n}\n</code></pre>\n<p>The match expression handles the case when we can have Some<T> or Node:</p>\n<pre><code class="language-rust">enum Pet {dog, cat, fish}\n\nfn main () {\n    let dog = Pet::dog;\n    println!("{}", dog.what_am_i());\n\n    let some_number = Some(5);\n    let some_string = Some("a string");\n    let nothing: Option&#x3C;i32> = None;\n\n    let x: i32 = 5;\n    let y: Option&#x3C;i32> = Some(5);\n\n    let sum = x + y;\n\n    let five = Some(5);\n    let six = plus_one(five);\n    let none = plus_one(None);\n\n    println!("{:?}", six);\n\n    let noneUnw = None.unwrap_or(7);\n    println!("unw: {:?}", noneUnw);\n\n    what_pet("dog");\n    what_pet("cat");\n    what_pet("cow");\n}\n\nfn plus_one(x: Option&#x3C;i32>) -> Option&#x3C;i32> {\n    match x {\n        None => None,\n        Some(i) => Some(i + 1),\n    }\n}\n\nfn plus_one_unw(x: Option&#x3C;i32>) -> i32 {\n    match x {\n        None => 0,\n        Some(i) => i + 1,\n    }\n}\n\nfn what_pet(input: &#x26;str) {\n    match input {\n        "dog" => println!("I have a dog!"),\n        "fish" => println!("I have a fish!"),\n        "cat" => println!("I have a cat!"),\n        _ => println!("I have no clue what pet I have"),\n    }\n}\n</code></pre>\n<h3>The rust predefined Result enum</h3>\n<pre><code class="language-rust">enum Result&#x3C;T, E> {\n    Ok(T),\n    Err(E),\n}\n</code></pre>\n<p>Example with Result:</p>\n<pre><code class="language-rust">use std::fs::File;\n\nfn main() {\n    let res = File::open("foo");\n    let f = res.unwrap();\n}\n\nfn main() {\n    let res = File::open("foo");\n    let f = res.expect("error message");\n}\n\nfn main() {\n    let res = File::open("foo");\n    let f = res.is_ok() {\n        let f = res.unwrap();\n    }\n}\n\nfn main() {\n    let res = File::open("foo");\n    match res {\n        Ok(f) => { /* do stuff */ },\n        Err(e) => { /* do stuff */ },\n    }\n}\n</code></pre>\n<h3>Ownership, references  &#x26; borrowing</h3>\n<p>There are 3 rules to ownership:</p>\n<ol>\n<li>Each value has an owner</li>\n<li>There is only one owner of a value</li>\n<li>Value gets dropped if its owner goes out of scope</li>\n</ol>\n<pre><code class="language-rust">x: &#x26;mut i32\n*x // a mutable i32\n</code></pre>\n<pre><code class="language-rust">x: &#x26;i32\n*x: // an immutable i32\n</code></pre>\n<p>At any time, it is possible to have one mutable reference\nor any number of immutable references to a given value.</p>\n<p>A borrowed variable passed to a function can be dereferenced in two ways.\nThe first way is automated deferencing:</p>\n<pre><code class="language-rust">fn do_stuff(s: &#x26;mut String) {\n    s.insert_str(0, "Hi, ");\n}\n</code></pre>\n<p>And the second way is manual:</p>\n<pre><code class="language-rust">fn do_stuff(s: &#x26;mut String) {\n    *s = String::from("Replacement")\n}\n</code></pre>',id:"/home/nicolas/projects/workshop/src/pages/2022-02-06-rust/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2022-02-06T10:17:00.823Z",path:"/rust",title:"Rust",excerpt:"",tags:["rust"]}},next:null}}}});
//# sourceMappingURL=path---kubernetes-b91719d79cbf9fe74819.js.map