---
path: "/kubernetes"
date: "2021-11-25T10:17:00.823Z"
title: "Kubernetes"
tags: ["kubernetes", "cloud", "devops"]
excerpt: ""
---

## Terminology

- kubernetes / k8s / kube: the whole orchestration system
- kubeclt aka cube control: cli to configure kubernetes and manage apps
- node: single server in the k8s cluster
- kubelet: k8s agent running on nodes
- each kubelet can have a kube-proxy controlling its networking
- control plane aka the "master": set of containers that manage the cluster. Includes api server, scheduler, controller manager, etcd, core DNS and more

## Links

Kubernetes in a browser:  

try [http://play-with-k8s.com](http://play-with-k8s.com)
or [katacoda.com](katacoda.com) in browser

Local install:  

- use snap for install on linux 
- control the microK8s service via microk8s. commands
- kubectl accessible wia microk8s.kubectl
- add an alias to your shell (.bash_profile): 
    - alias kubectl=microk8s.kubectl
    

