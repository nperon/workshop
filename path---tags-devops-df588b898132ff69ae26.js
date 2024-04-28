webpackJsonp([0xc1b5bd8be376],{452:function(e,n){e.exports={pathContext:{posts:[{html:'<h3>Create a container with a mongo database and connect to it</h3>\n<p>Start with displaying all currently running containers:</p>\n<pre><code class="language-bash">docker ps\n</code></pre>\n<p>Then create locally the container associated with the mongo docker image:</p>\n<pre><code class="language-bash">docker run -p 27017:27017 -d mongo\n</code></pre>\n<p>Executing another time <code>docker ps</code> results in information on the created container like the following being displayed:</p>\n<pre><code>CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                      NAMES\n2c6a61aba41b        mongo               "docker-entrypoint.s…"   3 minutes ago       Up 3 minutes        0.0.0.0:27017->27017/tcp   clever_dubinsky\n</code></pre>\n<p>Connection to the database at url localhost:27017 can be opened using for instance the robo-3t nosql database editor.\nFinally, the container when not needed anymore can be stopped with:</p>\n<pre><code>docker stop 2c6a61aba41b\n</code></pre>\n<h3>Create a container with a PostgreSQL database given the database name and the user credentials</h3>\n<p>Let us assume we need to connect to a database called course_data in a PostgreSQL SGBD with the following credentials: the user is postgres and the password is password. The command line to launch a docker container with such a database is:</p>\n<pre><code class="language-bash">docker run --name postgresdb -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=course_data -d -p 5432:5432 postgres\n</code></pre>\n<p>Terminal access to the database prompt is obtained by first accessing the container shell:</p>\n<pre><code class="language-bash">docker container exec -it postgresdb bash\n</code></pre>\n<p>The postgre prompt of user \'postgres\' may then be accessed with:</p>\n<pre><code class="language-bash">psql course_data postgres\n</code></pre>',id:"/home/nicolas/projects/workshop/src/pages/2020-03-31-docker-recipes/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-03-31T16:09:12.235Z",path:"/docker-recipes",title:"Docker Recipes",excerpt:"Some Docker Recipes",tags:["docker","container","devops"]}},{html:'<h2>Terminology</h2>\n<ul>\n<li>kubernetes / k8s / kube: the whole orchestration system</li>\n<li>kubeclt aka cube control: cli to configure kubernetes and manage apps</li>\n<li>node: single server in the k8s cluster</li>\n<li>kubelet: k8s agent running on nodes</li>\n<li>each kubelet can have a kube-proxy controlling its networking</li>\n<li>control plane aka the "master": set of containers that manage the cluster. Includes api server, scheduler, controller manager, etcd, core DNS and more</li>\n</ul>\n<p>A possible local Kubernetes environment could be composed of the following applications: </p>\n<ul>\n<li>minikube: a local cluster which can be installed and run on your machine. </li>\n<li>kubectl: the interface to interact with the cluster</li>\n<li>k9s: a CLI to monitor and manage your local kubernetes clusters</li>\n</ul>\n<!-- ## Links\n\nKubernetes in a browser:  \n\ntry [http://play-with-k8s.com](http://play-with-k8s.com)\nor [katacoda.com](katacoda.com) in browser -->\n<h1>Local install</h1>\n<p>Follow documentation on <a href="https://minikube.sigs.k8s.io/docs/start/">this page</a> to install minikube locally.</p>\n<p>You can then check your minikube status with: </p>\n<pre><code class="language-bash">minikube status\n</code></pre>\n<p>It can be started if necessary with</p>\n<pre><code class="language-bash">minikube start\n</code></pre>\n<p>Install now kubectl following documentation on <a href="https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/">this page</a>. </p>\n<p>The <a href="https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/#optional-kubectl-configurations-and-plugins">Optional kubectl configurations and plugins</a> can be skipped in a first stage.</p>\n<p>Configuration can be verified with:</p>\n<pre><code class="language-bash">kubectl cluster-info\n</code></pre>\n<p>You can find out the location of your kubectl executable with:</p>\n<pre><code class="language-bash">which kubectl\n</code></pre>\n<p>Download the <code>k9s_Linux_x86_64.tar.gz</code> archive available on\n<a href="https://github.com/derailed/k9s/releases">this page</a> from the k9s github.\nOnce it is extracted, just execute k9s with:</p>\n<pre><code class="language-bash">./k9s\n</code></pre>\n<h2>Pod commands together with a proper example to apply them:</h2>\n<p><code>kubectl get pod</code><br>\nget information about all running pods  </p>\n<p><code>kubectl describe pod &#x3C;pod></code><br>\ndescribe one pod  </p>\n<p><code>kubectl expose pod &#x3C;pod> --port=444 --name=frontend</code><br>\nexpose the port of a pod (creates a new service)  </p>\n<p><code>kubectl port-forward &#x3C;pod> 8080</code><br>\nport forward the exposed pod port to your local machine  </p>\n<p><code>kubectl attach &#x3C;podname> -i</code><br>\nattach to the pod  </p>\n<p><code>kubectl exec &#x3C;pod> -- command</code><br>\nexecute a command on the pod  </p>\n<p><code>kubectl label pods &#x3C;pod> mylabel=awesome</code><br>\nadd a new label to a pod  </p>\n<p><code>kubectl run -i --tty busybox --imagine=busybox --restart=Never -- sh</code><br>\nrun a shell in a pod  </p>\n<p>With the following example of a pod description\nin a file called <code>helloworld.yml</code>,</p>\n<pre><code class="language-yaml">apiVersion: v1\nkind: Pod\nmetadata:\n  name: nodehelloworld.example.com\n  labels:\n    app: helloworld\nspec:\n  containers:\n  - name: k8s-demo\n    image: wardviaene/k8s-demo\n    ports:\n    - name: nodejs-port\n      containerPort: 3000\n</code></pre>\n<p>The pod can be created with:</p>\n<pre><code class="language-bash">kubectl create -f helloworld.yml\n</code></pre>\n<p>Then, local port 8081 can be forwarded to port 3000 of the pod with:</p>\n<pre><code class="language-bash">kubectl port-forward nodehelloworld.example.com 8081:3000\n</code></pre>\n<p>Or else we can create a service of type NodePort to expose the pod with:</p>\n<pre><code class="language-bash">kubectl expose pod nodehelloworld.example.com --type=NodePort --name nodehelloworld-service\n</code></pre>\n<p>The end point to that service from the local machine can be displayed with:</p>\n<pre><code class="language-bash">minikube service nodehelloworld-service --url\n</code></pre>\n<p>IP addresses of services within the cluster are different. They can be accessed with:</p>\n<pre><code class="language-bash">kubectl get service\n</code></pre>\n<p>It is possible to attach to the pod and watch the possible logs with:</p>\n<pre><code class="language-bash">kubectl attach nodehelloworld.example.com\n</code></pre>\n<p>To execute a command like <code>ls /app</code> run the following line:</p>\n<pre><code class="language-bash">kubectl exec nodehelloworld.example.com -- ls /app\n</code></pre>\n<p>It is instructive to run the two following commands now:</p>\n<pre><code class="language-bash">kubectl exec nodehelloworld.example.com -- touch /app/test.txt\nkubectl exec nodehelloworld.example.com -- ls /app\n</code></pre>\n<p>To operate with a bash prompt in a pod use the following command: </p>\n<pre><code class="language-bash">kubectl exec nodehelloworld.example.com -i -t -- /bin/bash\n</code></pre>\n<p>A description of the pod can be displayed with:</p>\n<pre><code class="language-bash">kubectl describe service nodehelloworld-service\n</code></pre>\n<p>Launch another pod based on the busybox image with:</p>\n<pre><code class="language-bash">kubectl run -i --tty busybox --image=busybox --restart=Never -- sh\n</code></pre>\n<p>Let us assume that the endpoint of our nodehelloworld-service displayed in its description was 172.17.0.2:3000. Then, commands can be executed in the shell of our busybox like:</p>\n<pre><code class="language-bash">ls\ntelnet 172.17.0.2 3000\n</code></pre>\n<p>Pods can finally be deleted with:</p>\n<pre><code class="language-bash">kubectl delete pod busybox\nkubectl delete pod nodehelloworld.example.com\n</code></pre>\n<p>You can also delete the service nodehelloworld-service with:</p>\n<pre><code class="language-bash">kubectl delete service nodehelloworld-service\n</code></pre>\n<h2>Starting a cluster with an nginx container</h2>\n<p>Create a file called <code>deployment.yaml</code> with the following content:</p>\n<pre><code class="language-yaml">apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.21.4\n        ports:\n        - containerPort: 80\n</code></pre>\n<p>Create another file called <code>service.yaml</code> with the following content:</p>\n<pre><code class="language-yaml">apiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-service\n  labels:\n    app: nginx\nspec:\n  selector:\n    app: nginx\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 80\n  type: LoadBalancer\n</code></pre>\n<p>Cluster can now be started with:</p>\n<pre><code class="language-bash">kubectl apply -f deployment.yaml\n</code></pre>\n<p>followed with:</p>\n<pre><code class="language-bash">kubectl apply -f service.yaml\n</code></pre>\n<p>To display services execute:</p>\n<pre><code class="language-bash">kubectl get services\n</code></pre>\n<p>The following command is an interesting one to run now:</p>\n<pre><code class="language-bash">minikube service nginx-service\n</code></pre>\n<p>since it displays the url of the nginx-service and opens the latter\nservice in your default browser.</p>\n<p>To display namespaces execute:</p>\n<pre><code class="language-bash">kubectl get namespaces\n</code></pre>\n<p>To find out the namespace where pods have been created you can run this command:</p>\n<pre><code class="language-bash">kubectl get pods --all-namespaces\n</code></pre>\n<p>To stop one of the pods displayed whose name is for instance <code>hello-minikube-6ddfcc9757-h4ctx</code>\nexecute the following command:</p>\n<pre><code class="language-bash">kubectl delete -n default pod hello-minikube-6ddfcc9757-h4ctx\n</code></pre>\n<p>To display deployments currently running execute:</p>\n<pre><code class="language-bash">kubectl get deployments\n</code></pre>\n<p>To delete a service first display all of your services with:</p>\n<pre><code class="language-bash">kubectl get service -o wide\n</code></pre>\n<p>You can now pick the one you wish to delete from the displayed list\n--- for instance nginx-service --- and then delete it with:</p>\n<pre><code class="language-bash">kubectl delete service nginx-service\n</code></pre>\n<p>Delete deployment nginx-deployment with:</p>\n<pre><code class="language-bash">delete deployment nginx-deployment\n</code></pre>\n<h2>Minikube example</h2>\n<pre><code class="language-bash">kubectl create deployment hello-minikube --image=k8s.gcr.io/echoserver:1.4\n</code></pre>\n<pre><code class="language-bash">kubectl expose deployment hello-minikube --type=NodePort --port=8080\n</code></pre>\n<pre><code class="language-bash">minikube service hello-minikube\n</code></pre>\n<pre><code class="language-bash">kubectl delete deployment hello-minikube\n</code></pre>\n<pre><code class="language-bash">minikube stop\n</code></pre>\n<p>The minikube vm can optionally be completely reset with:</p>\n<pre><code class="language-bash">minikube delete\n</code></pre>\n<p>After this, Minikube will start from scratch the next time it is started.</p>',id:"/home/nicolas/projects/workshop/src/pages/2021-11-25-kubernetes/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2021-11-25T10:17:00.823Z",path:"/kubernetes",title:"Kubernetes",excerpt:"",tags:["kubernetes","cloud","devops"]}}],tagName:"devops"}}}});
//# sourceMappingURL=path---tags-devops-df588b898132ff69ae26.js.map