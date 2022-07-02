webpackJsonp([86747829675984],{436:function(e,n){e.exports={pathContext:{posts:[{html:'<h2>Terminology</h2>\n<ul>\n<li>kubernetes / k8s / kube: the whole orchestration system</li>\n<li>kubeclt aka cube control: cli to configure kubernetes and manage apps</li>\n<li>node: single server in the k8s cluster</li>\n<li>kubelet: k8s agent running on nodes</li>\n<li>each kubelet can have a kube-proxy controlling its networking</li>\n<li>control plane aka the "master": set of containers that manage the cluster. Includes api server, scheduler, controller manager, etcd, core DNS and more</li>\n</ul>\n<p>A possible local Kubernetes environment could be composed of the following applications: </p>\n<ul>\n<li>minikube: a local cluster which can be installed and run on your machine. </li>\n<li>kubectl: the interface to interact with the cluster</li>\n<li>k9s: a CLI to monitor and manage your local kubernetes clusters</li>\n</ul>\n<!-- ## Links\n\nKubernetes in a browser:  \n\ntry [http://play-with-k8s.com](http://play-with-k8s.com)\nor [katacoda.com](katacoda.com) in browser -->\n<h1>Local install</h1>\n<p>Follow documentation on <a href="https://minikube.sigs.k8s.io/docs/start/">this page</a> to install minikube locally.</p>\n<p>You can then check your minikube status with: </p>\n<pre><code class="language-bash">minikube status\n</code></pre>\n<p>Install now kubectl following documentation on <a href="https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/">this page</a>. </p>\n<p>The <a href="https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/#optional-kubectl-configurations-and-plugins">Optional kubectl configurations and plugins</a> can be skipped in a first stage.</p>\n<p>Configuration can be verified with:</p>\n<pre><code class="language-bash">kubectl cluster-info\n</code></pre>\n<p>You can find out the location of your kubectl executable with:</p>\n<pre><code class="language-bash">which kubectl\n</code></pre>\n<p>Download the <code>k9s_Linux_x86_64.tar.gz</code> archive available on\n<a href="https://github.com/derailed/k9s/releases">this page</a> from the k9s github.\nOnce it is extracted, just execute k9s with:</p>\n<pre><code class="language-bash">./k9s\n</code></pre>',id:"/home/nicolas/projects/workshop/src/pages/2021-11-25-kubernetes/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2021-11-25T10:17:00.823Z",path:"/kubernetes",title:"Kubernetes",excerpt:"",tags:["kubernetes","cloud","devops"]}}],tagName:"cloud"}}}});
//# sourceMappingURL=path---tags-cloud-63df5c392b0eac8c49a6.js.map