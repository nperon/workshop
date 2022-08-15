---
path: "/argocd"
date: "2022-08-14T22:51:00.823Z"
title: "Argo CD"
tags: ["continuous delivery", "cloud", "devops", "gitops", "kubernetes", "kustomize"]
excerpt: ""
---

The following few steps can be taken as a quick start to Argo CD 
that can be done with a local cluster, say minikube. 

## Starting argocd non HA with cluster privilege

```zsh
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

## Displaying argocd initial admin secret 

```zsh
ENCODED=$(kubectl -n argocd get secret argocd-initial-admin-secret -o yaml | yq .data.password)
echo $ENCODED
echo $ENCODED | base64 --decode
```

## Exposing argocd server with a port forward argocd server pod

```zsh
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

Open browser at https://localhost:8080

## Using ArgoCD CLI

CLI allows to manage everything: applications, repos, clusters, tasks, projects...

```zsh
argocd login localhost:8080
argocd cluster list
```

## Applications

Given the following yaml content in a file called ```application.yml```:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: guestbook
  namespace: argocd
spec: 
  destination:
    namespace: guestbook
    server: "https://kubernetes.default.svc"
  project: default
  source:
    path: guestbook
    repoURL: "https://github.com/mabusaa/argocd-example-apps.git"
    targetRevision: master
  syncPolicy:
    syncOptions:
      - CreateNamespace=true
```

run the following commands:

```zsh
kubectl apply -f application.yml
```

And then verify the application was created with:

```zsh
kubectl get application -n argocd
```

Other app based on helm can be started the same way:

```zsh
kubectl apply -f application_helm_options.yml
```

where application_helm_options.yml has a content like:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: helm-app
  namespace: argocd
spec: 
  destination:
    namespace: helm-app
    server: "https://kubernetes.default.svc"
  project: default
  source:
    path: helm-guestbook
    repoURL: "https://github.com/mabusaa/argocd-example-apps.git"
    targetRevision: master
    helm:
      releaseName: my-release
  syncPolicy:
    syncOptions:
      - CreateNamespace=true
```

Finally, an application loaded recursively from
a local directory can be started with:

```zsh
kubectl apply -f application_subdirectories_options.yml
```

with a file ```application_subdirectories_options.yml``` 
with a content:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: directory-app
  namespace: argocd
spec: 
  destination:
    namespace: directory-app
    server: "https://kubernetes.default.svc"
  project: default
  source:
    path: guestbook-with-sub-directories
    repoURL: "https://github.com/mabusaa/argocd-example-apps.git"
    targetRevision: master
    directory:
      recurse: true
  syncPolicy:
    syncOptions:
      - CreateNamespace=true
```

Here are ArgoCD options which can be adjusted with kustomize:

- Name prefix: appended to resources
- Name suffix: appended to resources
- Images: to override images
- Common labels: set labels on all resources
- Common annotations: set annotations on all resources
- Version: explicitly set kustomize version

The manifest below called for instance ```application_kustomize.yaml``` is an example of an kustomize argocd application. Two options are adjusted with kustomize: namePrefix
and a commonLabel with a key of app and a value of demo. 

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: kustomize-app
  namespace: argocd
spec: 
  destination:
    namespace: kustomize-app
    server: "https://kubernetes.default.svc"
  project: default
  source:
    path: kustomize-guestbook
    repoURL: "https://github.com/mabusaa/argocd-example-apps.git"
    targetRevision: master
    kustomize:
      namePrefix: staging-
      commonLabels:
        app: demo
  syncPolicy:
    syncOptions:
      - CreateNamespace=true
```

Application can be started with:

```zsh
kubectl apply -f application_kustomize.yml
```

Note that Argo CD automatically detects that 
it is a Kustomize application.

## Projects

Display info on by default project:

```zsh
kubectl get appproject -n argocd -o yaml
```

Now a project can be created by running 

```zsh
kubectl apply -f ./project.yaml
```

with a file called project.yaml: 

```yaml
apiVersion: argoproj.io/v1alpha1
kind: AppProject
metadata:
  name: demo-project
  namespace: argocd
spec:
  description: Demo Project
  sourceRepos:
  - '*'

  destinations:
  - namespace: '*'
    server: '*'

  clusterResourceWhitelist:
  - group: '*'
    kind: '*'

  namespaceResourceWhitelist:
  - group: '*'
    kind: '*'
```

Display info on projects again with:

```zsh
kubectl get appproject -n argocd -o yaml
```

An application can be defined to start in the project thus created with:

```zsh
kubectl apply -f './application.yml'
```

with the following content for application.yml:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: guestbook-demo-project
  namespace: argocd
spec: 
  destination:
    namespace: guestbook-demo-project
    server: "https://kubernetes.default.svc"
  project: demo-project
  source:
    path: guestbook
    repoURL: "https://github.com/mabusaa/argocd-example-apps.git"
    targetRevision: master
  syncPolicy:
    syncOptions:
      - CreateNamespace=true
```

