webpackJsonp([54858438791056],{459:function(e,n){e.exports={data:{markdownRemark:{html:'<h2>Terminology</h2>\n<ul>\n<li>kubernetes / k8s / kube: the whole orchestration system</li>\n<li>kubeclt aka cube control: cli to configure kubernetes and manage apps</li>\n<li>node: single server in the k8s cluster</li>\n<li>kubelet: k8s agent running on nodes</li>\n<li>each kubelet can have a kube-proxy controlling its networking</li>\n<li>control plane aka the "master": set of containers that manage the cluster. Includes api server, scheduler, controller manager, etcd, core DNS and more</li>\n</ul>\n<p>A possible local Kubernetes environment could be composed of the following applications: </p>\n<ul>\n<li>minikube: a local cluster which can be installed and run on your machine. </li>\n<li>kubectl: the interface to interact with the cluster</li>\n<li>k9s: a CLI to monitor and manage your local kubernetes clusters</li>\n</ul>\n<!-- ## Links\n\nKubernetes in a browser:  \n\ntry [http://play-with-k8s.com](http://play-with-k8s.com)\nor [katacoda.com](katacoda.com) in browser -->\n<h1>Local install</h1>\n<p>Follow documentation on <a href="https://minikube.sigs.k8s.io/docs/start/">this page</a> to install minikube locally.</p>\n<p>You can then check your minikube status with: </p>\n<pre><code class="language-bash">minikube status\n</code></pre>\n<p>It can be started if necessary with</p>\n<pre><code class="language-bash">minikube start\n</code></pre>\n<p>Install now kubectl following documentation on <a href="https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/">this page</a>. </p>\n<p>The <a href="https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/#optional-kubectl-configurations-and-plugins">Optional kubectl configurations and plugins</a> can be skipped in a first stage.</p>\n<p>Configuration can be verified with:</p>\n<pre><code class="language-bash">kubectl cluster-info\n</code></pre>\n<p>You can find out the location of your kubectl executable with:</p>\n<pre><code class="language-bash">which kubectl\n</code></pre>\n<p>Download the <code>k9s_Linux_x86_64.tar.gz</code> archive available on\n<a href="https://github.com/derailed/k9s/releases">this page</a> from the k9s github.\nOnce it is extracted, just execute k9s with:</p>\n<pre><code class="language-bash">./k9s\n</code></pre>\n<h2>Pod commands together with a proper example to apply them:</h2>\n<p><code>kubectl get pod</code><br>\nget information about all running pods  </p>\n<p><code>kubectl describe pod &#x3C;pod></code><br>\ndescribe one pod  </p>\n<p><code>kubectl expose pod &#x3C;pod> --port=444 --name=frontend</code><br>\nexpose the port of a pod (creates a new service)  </p>\n<p><code>kubectl port-forward &#x3C;pod> 8080</code><br>\nport forward the exposed pod port to your local machine  </p>\n<p><code>kubectl attach &#x3C;podname> -i</code><br>\nattach to the pod  </p>\n<p><code>kubectl exec &#x3C;pod> -- command</code><br>\nexecute a command on the pod  </p>\n<p><code>kubectl label pods &#x3C;pod> mylabel=awesome</code><br>\nadd a new label to a pod  </p>\n<p><code>kubectl run -i --tty busybox --image=busybox --restart=Never -- sh</code><br>\nrun a shell in a pod  </p>\n<p>With the following example of a pod description\nin a file called <code>helloworld.yml</code>,</p>\n<pre><code class="language-yaml">apiVersion: v1\nkind: Pod\nmetadata:\n  name: nodehelloworld.example.com\n  labels:\n    app: helloworld\nspec:\n  containers:\n  - name: k8s-demo\n    image: wardviaene/k8s-demo\n    ports:\n    - name: nodejs-port\n      containerPort: 3000\n</code></pre>\n<p>The pod can be created with:</p>\n<pre><code class="language-bash">kubectl create -f helloworld.yml\n</code></pre>\n<p>Then, local port 8081 can be forwarded to port 3000 of the pod with:</p>\n<pre><code class="language-bash">kubectl port-forward nodehelloworld.example.com 8081:3000\n</code></pre>\n<p>Or else we can create a service of type NodePort to expose the pod with:</p>\n<pre><code class="language-bash">kubectl expose pod nodehelloworld.example.com --type=NodePort --name nodehelloworld-service\n</code></pre>\n<p>The end point to that service from the local machine can be displayed with:</p>\n<pre><code class="language-bash">minikube service nodehelloworld-service --url\n</code></pre>\n<p>IP addresses of services within the cluster are different. They can be accessed with:</p>\n<pre><code class="language-bash">kubectl get service\n</code></pre>\n<p>It is possible to attach to the pod and watch the possible logs with:</p>\n<pre><code class="language-bash">kubectl attach nodehelloworld.example.com\n</code></pre>\n<p>To execute a command like <code>ls /app</code> run the following line:</p>\n<pre><code class="language-bash">kubectl exec nodehelloworld.example.com -- ls /app\n</code></pre>\n<p>It is instructive to run the two following commands now:</p>\n<pre><code class="language-bash">kubectl exec nodehelloworld.example.com -- touch /app/test.txt\nkubectl exec nodehelloworld.example.com -- ls /app\n</code></pre>\n<p>To operate with a bash prompt in a pod use the following command: </p>\n<pre><code class="language-bash">kubectl exec nodehelloworld.example.com -i -t -- /bin/bash\n</code></pre>\n<p>A description of the pod can be displayed with:</p>\n<pre><code class="language-bash">kubectl describe service nodehelloworld-service\n</code></pre>\n<p>Launch another pod based on the busybox image with:</p>\n<pre><code class="language-bash">kubectl run -i --tty busybox --image=busybox --restart=Never -- sh\n</code></pre>\n<p>Let us assume that the endpoint of our nodehelloworld-service displayed in its description was 172.17.0.2:3000. Then, commands can be executed in the shell of our busybox like:</p>\n<pre><code class="language-bash">ls\ntelnet 172.17.0.2 3000\n</code></pre>\n<p>Pods can finally be deleted with:</p>\n<pre><code class="language-bash">kubectl delete pod busybox\nkubectl delete pod nodehelloworld.example.com\n</code></pre>\n<p>You can also delete the service nodehelloworld-service with:</p>\n<pre><code class="language-bash">kubectl delete service nodehelloworld-service\n</code></pre>\n<h2>Starting a cluster with an nginx container</h2>\n<p>Create a file called <code>deployment.yaml</code> with the following content:</p>\n<pre><code class="language-yaml">apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.21.4\n        ports:\n        - containerPort: 80\n</code></pre>\n<p>Create another file called <code>service.yaml</code> with the following content:</p>\n<pre><code class="language-yaml">apiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-service\n  labels:\n    app: nginx\nspec:\n  selector:\n    app: nginx\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 80\n  type: LoadBalancer\n</code></pre>\n<p>Cluster can now be started with:</p>\n<pre><code class="language-bash">kubectl apply -f deployment.yaml\n</code></pre>\n<p>followed with:</p>\n<pre><code class="language-bash">kubectl apply -f service.yaml\n</code></pre>\n<p>To display services execute:</p>\n<pre><code class="language-bash">kubectl get services\n</code></pre>\n<p>The following command is an interesting one to run now:</p>\n<pre><code class="language-bash">minikube service nginx-service\n</code></pre>\n<p>since it displays the url of the nginx-service and opens the latter\nservice in your default browser.</p>\n<p>To display namespaces execute:</p>\n<pre><code class="language-bash">kubectl get namespaces\n</code></pre>\n<p>To find out the namespace where pods have been created you can run this command:</p>\n<pre><code class="language-bash">kubectl get pods --all-namespaces\n</code></pre>\n<p>To stop one of the pods displayed whose name is for instance <code>hello-minikube-6ddfcc9757-h4ctx</code>\nexecute the following command:</p>\n<pre><code class="language-bash">kubectl delete -n default pod hello-minikube-6ddfcc9757-h4ctx\n</code></pre>\n<p>To display deployments currently running execute:</p>\n<pre><code class="language-bash">kubectl get deployments\n</code></pre>\n<p>To delete a service first display all of your services with:</p>\n<pre><code class="language-bash">kubectl get service -o wide\n</code></pre>\n<p>You can now pick the one you wish to delete from the displayed list\n--- for instance nginx-service --- and then delete it with:</p>\n<pre><code class="language-bash">kubectl delete service nginx-service\n</code></pre>\n<p>Delete deployment nginx-deployment with:</p>\n<pre><code class="language-bash">delete deployment nginx-deployment\n</code></pre>\n<h2>Minikube example</h2>\n<pre><code class="language-bash">kubectl create deployment hello-minikube --image=k8s.gcr.io/echoserver:1.4\n</code></pre>\n<pre><code class="language-bash">kubectl expose deployment hello-minikube --type=NodePort --port=8080\n</code></pre>\n<pre><code class="language-bash">minikube service hello-minikube\n</code></pre>\n<pre><code class="language-bash">kubectl delete deployment hello-minikube\n</code></pre>\n<pre><code class="language-bash">minikube stop\n</code></pre>\n<p>The minikube vm can optionally be completely reset with:</p>\n<pre><code class="language-bash">minikube delete\n</code></pre>\n<p>After this, Minikube will start from scratch the next time it is started.</p>\n<h2>Advanced topics</h2>\n<h4>Service discovery</h4>\n<pre><code class="language-zsh">kubectl run -i --tty busybox --image=busybox --restart=Never -- sh\n</code></pre>\n<pre><code class="language-sh">cat /etc/resolv.conf\n</code></pre>\n<pre><code class="language-zsh">kubectl exec database -i -t -- mysql -u root -p\n</code></pre>\n<h4>ConfigMap</h4>\n<pre><code class="language-sh">kubectl create configmap app-config --fromfile=app.properties\n</code></pre>\n<h4>Ingress Controller</h4>\n<h4>External DNS</h4>\n<h4>Volumes</h4>\n<h4>K9S</h4>\n<pre><code class="language-sh">k9s help\n</code></pre>\n<pre><code class="language-sh">k9s -n my-namespace\n</code></pre>\n<p>The : mode --- typing : followed with a kubernetes concept:</p>\n<pre><code class="language-sh">:ns\n:pod\n:svc\n:deploy\n:ing\n:crd\n:pulse\n:popeye\n:xray\n</code></pre>\n<p><code>popeye</code>  displays score card for the cluster. Takes one to the sanitizer.</p>\n<p><code>xray pod default</code> brings up windows like file explorer for folder structure navigation</p>\n<p>The / mode for filtering --- example:</p>\n<p><code>/ followed with -l version=v2</code> filters by labels version of v2</p>\n<p>Killing a pod can be done with ctrl + d</p>',frontmatter:{title:"Kubernetes",date:"November 25, 2021",path:"/kubernetes",tags:["kubernetes","cloud","devops"],excerpt:""}}},pathContext:{prev:{html:'<h3>Miscelaneous bash tips</h3>\n<p>The following command displays the status code from the last command:</p>\n<pre><code class="language-bash">echo $?\n</code></pre>\n<p>In the following command, output of a echo command is directed to\nstandard input so that a second command viz more manages it like a file:</p>\n<pre><code class="language-bash">echo \'toto\' | more -\n</code></pre>\n<h3>tree</h3>\n<pre><code class="language-bash">tree --noreport .\n</code></pre>\n<h3>vi</h3>\n<p>Vi command for eliminating all occurences of colon ":" is the following:</p>\n<pre><code>:1,$s/://g\n</code></pre>\n<p>Here is the vi command for replacing all occurences of "old" with "new":</p>\n<pre><code>:1,$s/old/new/g\n</code></pre>\n<p>Vi command for searching string "xyz":</p>\n<pre><code>/xyz\n</code></pre>\n<h3>find</h3>\n<p>File search:</p>\n<pre><code class="language-bash">find ./fvsa/ -name "pvsve*"\n</code></pre>\n<h3>grep</h3>\n<p>Search string \'yourDir\' in dir yourdir:</p>\n<pre><code class="language-bash">grep -nr \'yourString*\' yourdir\n</code></pre>\n<h3>sed</h3>\n<p>Sed is a stream editor for filtering and transforming text.</p>\n<pre><code class="language-bash">sed -i \'s/word1/word2/g\' inputfile\n</code></pre>\n<p>The <code>-i</code> option requests editing in place.\n<code>s</code> stands for substitute. <code>g</code> stands for global replacement.</p>\n<h3>A few tips with watch:</h3>\n<p>Memory usage:</p>\n<pre><code class="language-bash">watch -n 5 free -m\n</code></pre>\n<p>Realtime clock in a term:</p>\n<pre><code class="language-bash">watch -n 1 date\n</code></pre>\n<h3>Modify filenames with rename</h3>\n<p>Delete 4 first characters in all file names in dir:</p>\n<pre><code class="language-bash">rename \'s/.{4}(.*)/$1/\' *\n</code></pre>\n<p>Delete 5 last characters in all file names in dir:</p>\n<pre><code class="language-bash">rename \'s/(.*).{5}/$1/\' *\n</code></pre>\n<h3>wc</h3>\n<p>Display total number of files in \'folder\':</p>\n<pre><code class="language-bash">ls folder | wc -l\n</code></pre>\n<h3>Disk usage</h3>\n<pre><code class="language-bash">sudo ncdu -rx /\n</code></pre>\n<pre><code class="language-bash">sudo du -shc /*\n</code></pre>\n<p>Displaying size occupied by Documents directory:</p>\n<pre><code class="language-bash">cd ~\nsudo du -sh Documents\n</code></pre>\n<h3>Managing JDKs on Debian</h3>\n<pre><code class="language-bash">update-java-alternatives -l\n</code></pre>\n<pre><code class="language-bash">sudo update-java-alternatives -s java-1.8.0-openjdk-amd64\n</code></pre>\n<p>Or in a more interactive way:</p>\n<pre><code class="language-bash">update-alternatives --config java\n</code></pre>\n<h3>Managing screens</h3>\n<pre><code class="language-bash">xrandr\n</code></pre>\n<pre><code class="language-bash">xrandr --addmode HDMI-1 2560x1080\n</code></pre>\n<h3>Serving static content using http-server</h3>\n<p>The following command starts http-server and serves all of the static\ncontent (e.g. geojson files) available in the current directory:</p>\n<pre><code class="language-bash">http-server --cors=\'*\' -p 5252\n</code></pre>\n<h3>Generating random passwords</h3>\n<p>Install pwgen package and run the following command to\nget a randow password with 12 characters including one special\ncharacter at least:</p>\n<pre><code class="language-bash">pwgen 12 1 -y\n</code></pre>\n<h3>Managing permissions</h3>\n<p>Command to state that owner and group of directory mydir have full permission\nto access the directory and its content such as read, write and execute whereas\nothers will have read and execute permission:</p>\n<pre><code class="language-bash">chmod -R 775 mydir\n</code></pre>\n<h3>Probing system on service management tool</h3>\n<p>The following command can be use to check whether the service\nmanagement tool is <code>service</code> or <code>systemctl</code>:</p>\n<pre><code class="language-bash">ps --no-headers -o comm 1\n</code></pre>\n<p>A <code>systemd</code> result indicates that systemd (systemctl) is the service management tool, while\n<code>init</code> indicates that it is System V Init (service).</p>\n<h3>Managing DNS</h3>\n<pre><code class="language-bash">sudo apt install bind9-host\n</code></pre>\n<pre><code class="language-bash">host -t NS google.com\n</code></pre>\n<h2>Configuring Postfix on a debian server</h2>\n<p>First hostname has to be configured. Display current hostname with <code>hostnamectl</code>.\nThen configure new hostname with:</p>\n<pre><code class="language-sh">hostnamectl set-hostname muydomain.com\n</code></pre>\n<p>Verify it by running the <code>hostnamectl</code> command again.</p>\n<p>Here is the <a href="https://wiki.debian.org/Postfix">link</a> to configure postfix.</p>\n<h2>Configuring mailutils on debian</h2>\n<p>See parameters that may be configured with `<code></code>mail --config-help<code></code></p>\n<p>Now to configure them, create a file <code>/etc/mailutils.conf</code> if it does not already exist.</p>\n<p>To configure for instance the domain name, complement <code>/etc/mailutils.conf</code> with</p>\n<pre><code>address {\n  email-domain somedomain.com;\n};\n</code></pre>',id:"/home/nicolas/projects/workshop/src/pages/2020-10-11-linux-utils/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-10-11T22:47:32.235Z",path:"/linux-utils",title:"Linux Utils",excerpt:"",tags:["Linux","utils","bash","vi","find","grep","rename"]}},next:{html:'<h2>Goals</h2>\n<pre><code class="language-zsh">mvn clean\n</code></pre>\n<pre><code class="language-zsh">mvn package\n</code></pre>\n<p>To display a POM that includes all of the inherited properties, execute:</p>\n<pre><code class="language-zsh">mvn help:effective-pom\n</code></pre>\n<h2>Dependency Scope</h2>\n<ul>\n<li>Compile: Default. Available on all classpaths of project. Also, propagated to downstream projects.</li>\n<li>Provided: Like Compile, but expected to be provided by JDK or container at runtime.</li>\n<li>Runtime: Not required for compile, but needed for runtime. On runtime and test classpaths, not compile.</li>\n<li>Test: Only available on test classpath, not transitive.</li>\n<li>System: similar to provided, but jar is added to system explicitly (via file path)</li>\n<li>Import: imports dependency of POM</li>\n</ul>\n<h4>Dependency plugin goals</h4>\n<ul>\n<li>dependency:tree</li>\n<li>dependency:go-offline</li>\n<li>dependency:purge-local-repository</li>\n<li>dependency:sources</li>\n</ul>\n<h2>Maven Build Lifecycles</h2>\n<p>Maven is based on the concept of build lifecycles.\nA licecycle is a pre-defined group of build steps called <strong>phases</strong>.\nEach phase can be bound to one or more plugin <strong>goals</strong>.\nAll work done in Maven is done by plugins.\nLifecycles and phases provide the framework to call plugin goals in a sequence.</p>\n<p>There are three pre-defined lifecycles:</p>\n<ul>\n<li>clean</li>\n<li>default: does the build and deployment of the project. It is defined without plugin bindings, bindings are defined for each packaging. The default lifecycle include the phases but a number of them are not mentioned: validate, compile, test, package, verify, install and deploy.</li>\n<li>site: least used in practice</li>\n</ul>\n<p>For instance phases of the default lifecycle involved in the case of a jar\npackaging are the following:</p>\n<ul>\n<li>process-resources (maven-resources-plugin: resources)</li>\n<li>compile (maven-compiler-plugin: compile)</li>\n<li>process-test-resources (maven-compiler-plugin: testResources)</li>\n<li>test-compile (maven-compiler-plugin: testCompile)</li>\n<li>test (maven-surefire-plugin: jar)</li>\n<li>package (maven-jar-plugin: jar)</li>\n<li>install (maven-install-plugin: install)</li>\n<li>deploy (maven-deploy-plugin: deploy)</li>\n</ul>\n<h2>Maven configuration — <code>settings.xml</code></h2>',id:"/home/nicolas/projects/workshop/src/pages/2022-08-27-maven/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2022-08-27T00:47:00.342Z",path:"/maven",title:"Maven",excerpt:"",tags:["maven","devops","continuous integration","build","java","kotlin"]}}}}}});
//# sourceMappingURL=path---kubernetes-17bcaec32bdafaf04cb2.js.map