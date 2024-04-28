webpackJsonp([0xb0b42976fdab],{456:function(e,n){e.exports={pathContext:{posts:[{html:'<h2>Terminology</h2>\n<ul>\n<li>kubernetes / k8s / kube: the whole orchestration system</li>\n<li>kubeclt aka cube control: cli to configure kubernetes and manage apps</li>\n<li>node: single server in the k8s cluster</li>\n<li>kubelet: k8s agent running on nodes</li>\n<li>each kubelet can have a kube-proxy controlling its networking</li>\n<li>control plane aka the "master": set of containers that manage the cluster. Includes api server, scheduler, controller manager, etcd, core DNS and more</li>\n</ul>\n<p>A possible local Kubernetes environment could be composed of the following applications: </p>\n<ul>\n<li>minikube: a local cluster which can be installed and run on your machine. </li>\n<li>kubectl: the interface to interact with the cluster</li>\n<li>k9s: a CLI to monitor and manage your local kubernetes clusters</li>\n</ul>\n<!-- ## Links\n\nKubernetes in a browser:  \n\ntry [http://play-with-k8s.com](http://play-with-k8s.com)\nor [katacoda.com](katacoda.com) in browser -->\n<h1>Local install</h1>\n<p>Follow documentation on <a href="https://minikube.sigs.k8s.io/docs/start/">this page</a> to install minikube locally.</p>\n<p>You can then check your minikube status with: </p>\n<pre><code class="language-bash">minikube status\n</code></pre>\n<p>Install now kubectl following documentation on <a href="https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/">this page</a>. </p>\n<p>The <a href="https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/#optional-kubectl-configurations-and-plugins">Optional kubectl configurations and plugins</a> can be skipped in a first stage.</p>\n<p>Configuration can be verified with:</p>\n<pre><code class="language-bash">kubectl cluster-info\n</code></pre>\n<p>You can find out the location of your kubectl executable with:</p>\n<pre><code class="language-bash">which kubectl\n</code></pre>\n<p>Download the <code>k9s_Linux_x86_64.tar.gz</code> archive available on\n<a href="https://github.com/derailed/k9s/releases">this page</a> from the k9s github.\nOnce it is extracted, just execute k9s with:</p>\n<pre><code class="language-bash">./k9s\n</code></pre>\n<h2>Starting a cluster with an nginx container</h2>\n<p>Create a file called <code>deployment.yaml</code> with the following content:</p>\n<pre><code class="language-yaml">apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.21.4\n        ports:\n        - containerPort: 80\n</code></pre>\n<p>Create another file called <code>service.yaml</code> with the following content:</p>\n<pre><code class="language-yaml">apiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-service\n  labels:\n    app: nginx\nspec:\n  selector:\n    app: nginx\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 80\n  type: LoadBalancer\n</code></pre>\n<p>Cluster can now be started with:</p>\n<pre><code class="language-bash">kubectl apply -f deployment.yaml\n</code></pre>\n<p>followed with:</p>\n<pre><code class="language-bash">kubectl apply -f service.yaml\n</code></pre>\n<p>To display services execute:</p>\n<pre><code class="language-bash">kubectl get services\n</code></pre>\n<p>The following command is an interesting one to run now:</p>\n<pre><code class="language-bash">minikube service nginx-service\n</code></pre>\n<p>since it displays the url of the nginx-service and opens the latter\nservice in your default browser.</p>\n<p>To display namespaces execute:</p>\n<pre><code class="language-bash">kubectl get namespaces\n</code></pre>\n<p>To find out the namespace where pods have been created you can run this command:</p>\n<pre><code class="language-bash">kubectl get pods --all-namespaces\n</code></pre>\n<p>To stop one of the pods displayed whose name is for instance <code>hello-minikube-6ddfcc9757-h4ctx</code>\nexecute the following command:</p>\n<pre><code class="language-bash">kubectl delete -n default pod hello-minikube-6ddfcc9757-h4ctx\n</code></pre>\n<p>To display deployments currently running execute:</p>\n<pre><code class="language-bash">kubectl get deployments\n</code></pre>\n<p>To delete a service first display all of your services with:</p>\n<pre><code class="language-bash">kubectl get service -o wide\n</code></pre>\n<p>You can now pick the one you wish to delete from the displayed list\n--- for instance nginx-service --- and then delete it with:</p>\n<pre><code class="language-bash">kubectl delete service nginx-service\n</code></pre>\n<h2>Minikube example</h2>\n<pre><code class="language-bash">kubectl create deployment hello-node --image=k8s.gcr.io/echoserver:1.4\n</code></pre>\n<pre><code class="language-bash">kubectl expose deployment hello-minikube --type=NodePort --port=8080\n</code></pre>\n<pre><code class="language-bash">minikube service hello-minikube\n</code></pre>\n<pre><code class="language-bash">minikube stop\n</code></pre>\n<p>The minikube vm can optionally be completely reset with:</p>\n<pre><code class="language-bash">minikube delete\n</code></pre>\n<p>After this, Minikube will start from scratch the next time it is started.</p>',id:"/home/nicolas/projects/workshop/src/pages/2021-11-25-kubernetes/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2021-11-25T10:17:00.823Z",path:"/kubernetes",title:"Kubernetes",excerpt:"",tags:["kubernetes","cloud","devops"]}}],tagName:"kubernetes"}}}});
//# sourceMappingURL=path---tags-kubernetes-47c589dccd664a4833d4.js.map