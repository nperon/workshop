webpackJsonp([0xe92da2062f35],{466:function(e,a){e.exports={pathContext:{posts:[{html:'<p>The following few steps can be taken as a quick start to Argo CD\nthat can be done with a local cluster, say minikube. </p>\n<h2>Starting argocd non HA with cluster privilege</h2>\n<pre><code class="language-zsh">kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\n</code></pre>\n<h2>Displaying argocd initial admin secret</h2>\n<pre><code class="language-zsh">ENCODED=$(kubectl -n argocd get secret argocd-initial-admin-secret -o yaml | yq .data.password)\necho $ENCODED\necho $ENCODED | base64 --decode\n</code></pre>\n<h2>Exposing argocd server with a port forward argocd server pod</h2>\n<pre><code class="language-zsh">kubectl port-forward svc/argocd-server -n argocd 8080:443\n</code></pre>\n<p>Open browser at <a href="https://localhost:8080">https://localhost:8080</a></p>\n<h2>Using ArgoCD CLI</h2>\n<p>CLI allows to manage everything: applications, repos, clusters, tasks, projects...</p>\n<pre><code class="language-zsh">argocd login localhost:8080\nargocd cluster list\n</code></pre>\n<h2>Applications</h2>\n<p>Given the following yaml content in a file called <code>application.yml</code>:</p>\n<pre><code class="language-yaml">apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: guestbook\n  namespace: argocd\nspec: \n  destination:\n    namespace: guestbook\n    server: "https://kubernetes.default.svc"\n  project: default\n  source:\n    path: guestbook\n    repoURL: "https://github.com/mabusaa/argocd-example-apps.git"\n    targetRevision: master\n  syncPolicy:\n    syncOptions:\n      - CreateNamespace=true\n</code></pre>\n<p>run the following commands:</p>\n<pre><code class="language-zsh">kubectl apply -f application.yml\n</code></pre>\n<p>And then verify the application was created with:</p>\n<pre><code class="language-zsh">kubectl get application -n argocd\n</code></pre>\n<p>Other app based on helm can be started the same way:</p>\n<pre><code class="language-zsh">kubectl apply -f application_helm_options.yml\n</code></pre>\n<p>where application<em>helm</em>options.yml has a content like:</p>\n<pre><code class="language-yaml">apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: helm-app\n  namespace: argocd\nspec: \n  destination:\n    namespace: helm-app\n    server: "https://kubernetes.default.svc"\n  project: default\n  source:\n    path: helm-guestbook\n    repoURL: "https://github.com/mabusaa/argocd-example-apps.git"\n    targetRevision: master\n    helm:\n      releaseName: my-release\n  syncPolicy:\n    syncOptions:\n      - CreateNamespace=true\n</code></pre>\n<p>Finally, an application loaded recursively from\na local directory can be started with:</p>\n<pre><code class="language-zsh">kubectl apply -f application_subdirectories_options.yml\n</code></pre>\n<p>with a file <code>application_subdirectories_options.yml</code>\nwith a content:</p>\n<pre><code class="language-yaml">apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: directory-app\n  namespace: argocd\nspec: \n  destination:\n    namespace: directory-app\n    server: "https://kubernetes.default.svc"\n  project: default\n  source:\n    path: guestbook-with-sub-directories\n    repoURL: "https://github.com/mabusaa/argocd-example-apps.git"\n    targetRevision: master\n    directory:\n      recurse: true\n  syncPolicy:\n    syncOptions:\n      - CreateNamespace=true\n</code></pre>\n<p>Here are ArgoCD options which can be adjusted with kustomize:</p>\n<ul>\n<li>Name prefix: appended to resources</li>\n<li>Name suffix: appended to resources</li>\n<li>Images: to override images</li>\n<li>Common labels: set labels on all resources</li>\n<li>Common annotations: set annotations on all resources</li>\n<li>Version: explicitly set kustomize version</li>\n</ul>\n<p>The manifest below called for instance <code>application_kustomize.yaml</code> is an example of an kustomize argocd application. Two options are adjusted with kustomize: namePrefix\nand a commonLabel with a key of app and a value of demo. </p>\n<pre><code class="language-yaml">apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: kustomize-app\n  namespace: argocd\nspec: \n  destination:\n    namespace: kustomize-app\n    server: "https://kubernetes.default.svc"\n  project: default\n  source:\n    path: kustomize-guestbook\n    repoURL: "https://github.com/mabusaa/argocd-example-apps.git"\n    targetRevision: master\n    kustomize:\n      namePrefix: staging-\n      commonLabels:\n        app: demo\n  syncPolicy:\n    syncOptions:\n      - CreateNamespace=true\n</code></pre>\n<p>Application can be started with:</p>\n<pre><code class="language-zsh">kubectl apply -f application_kustomize.yml\n</code></pre>\n<p>Note that Argo CD automatically detects that\nit is a Kustomize application.</p>\n<h2>Projects</h2>\n<p>Display info on by default project:</p>\n<pre><code class="language-zsh">kubectl get appproject -n argocd -o yaml\n</code></pre>\n<p>Now a project can be created by running </p>\n<pre><code class="language-zsh">kubectl apply -f ./project.yaml\n</code></pre>\n<p>with a file called project.yaml: </p>\n<pre><code class="language-yaml">apiVersion: argoproj.io/v1alpha1\nkind: AppProject\nmetadata:\n  name: demo-project\n  namespace: argocd\nspec:\n  description: Demo Project\n  sourceRepos:\n  - \'*\'\n\n  destinations:\n  - namespace: \'*\'\n    server: \'*\'\n\n  clusterResourceWhitelist:\n  - group: \'*\'\n    kind: \'*\'\n\n  namespaceResourceWhitelist:\n  - group: \'*\'\n    kind: \'*\'\n</code></pre>\n<p>Display info on projects again with:</p>\n<pre><code class="language-zsh">kubectl get appproject -n argocd -o yaml\n</code></pre>\n<p>An application can be defined to start in the project thus created with:</p>\n<pre><code class="language-zsh">kubectl apply -f \'./application.yml\'\n</code></pre>\n<p>with the following content for application.yml:</p>\n<pre><code class="language-yaml">apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: guestbook-demo-project\n  namespace: argocd\nspec: \n  destination:\n    namespace: guestbook-demo-project\n    server: "https://kubernetes.default.svc"\n  project: demo-project\n  source:\n    path: guestbook\n    repoURL: "https://github.com/mabusaa/argocd-example-apps.git"\n    targetRevision: master\n  syncPolicy:\n    syncOptions:\n      - CreateNamespace=true\n</code></pre>',id:"/home/nicolas/projects/workshop/src/pages/2022-08-14-argocd/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2022-08-14T22:51:00.823Z",path:"/argocd",title:"Argo CD",excerpt:"",tags:["continuous delivery","cloud","devops","gitops","kubernetes","kustomize"]}}],tagName:"gitops"}}}});
//# sourceMappingURL=path---tags-gitops-cb46f4429f12208f752f.js.map