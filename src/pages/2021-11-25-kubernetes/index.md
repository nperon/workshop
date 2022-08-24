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

A possible local Kubernetes environment could be composed of the following applications: 
- minikube: a local cluster which can be installed and run on your machine. 
- kubectl: the interface to interact with the cluster
- k9s: a CLI to monitor and manage your local kubernetes clusters

<!-- ## Links

Kubernetes in a browser:  

try [http://play-with-k8s.com](http://play-with-k8s.com)
or [katacoda.com](katacoda.com) in browser -->

# Local install

Follow documentation on [this page](https://minikube.sigs.k8s.io/docs/start/) to install minikube locally.

You can then check your minikube status with: 

```bash
minikube status
```

It can be started if necessary with

```bash
minikube start
```

Install now kubectl following documentation on [this page](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/). 

The [Optional kubectl configurations and plugins](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/#optional-kubectl-configurations-and-plugins) can be skipped in a first stage.

Configuration can be verified with:

```bash
kubectl cluster-info
```

You can find out the location of your kubectl executable with:

```bash
which kubectl
```

Download the ```k9s_Linux_x86_64.tar.gz``` archive available on
[this page](https://github.com/derailed/k9s/releases) from the k9s github.
Once it is extracted, just execute k9s with:

```bash
./k9s
```

## Pod commands together with a proper example to apply them:

```kubectl get pod```  
get information about all running pods  

```kubectl describe pod <pod>```  
describe one pod  

```kubectl expose pod <pod> --port=444 --name=frontend```  
expose the port of a pod (creates a new service)  

```kubectl port-forward <pod> 8080```  
port forward the exposed pod port to your local machine  

```kubectl attach <podname> -i```  
attach to the pod  

```kubectl exec <pod> -- command```  
execute a command on the pod  

```kubectl label pods <pod> mylabel=awesome```  
add a new label to a pod  

```kubectl run -i --tty busybox --image=busybox --restart=Never -- sh```  
run a shell in a pod  

With the following example of a pod description 
in a file called ```helloworld.yml```,

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nodehelloworld.example.com
  labels:
    app: helloworld
spec:
  containers:
  - name: k8s-demo
    image: wardviaene/k8s-demo
    ports:
    - name: nodejs-port
      containerPort: 3000
```

The pod can be created with:

```bash
kubectl create -f helloworld.yml
```

Then, local port 8081 can be forwarded to port 3000 of the pod with:

```bash
kubectl port-forward nodehelloworld.example.com 8081:3000
```

Or else we can create a service of type NodePort to expose the pod with:

```bash
kubectl expose pod nodehelloworld.example.com --type=NodePort --name nodehelloworld-service
```

The end point to that service from the local machine can be displayed with:

```bash
minikube service nodehelloworld-service --url
```

IP addresses of services within the cluster are different. They can be accessed with:

```bash
kubectl get service
```

It is possible to attach to the pod and watch the possible logs with:

```bash
kubectl attach nodehelloworld.example.com
```

To execute a command like ```ls /app``` run the following line:

```bash
kubectl exec nodehelloworld.example.com -- ls /app
```

It is instructive to run the two following commands now:

```bash
kubectl exec nodehelloworld.example.com -- touch /app/test.txt
kubectl exec nodehelloworld.example.com -- ls /app
```

To operate with a bash prompt in a pod use the following command: 

```bash
kubectl exec nodehelloworld.example.com -i -t -- /bin/bash
```

A description of the pod can be displayed with:

```bash
kubectl describe service nodehelloworld-service
```

Launch another pod based on the busybox image with:

```bash
kubectl run -i --tty busybox --image=busybox --restart=Never -- sh
```
Let us assume that the endpoint of our nodehelloworld-service displayed in its description was 172.17.0.2:3000. Then, commands can be executed in the shell of our busybox like:

```bash
ls
telnet 172.17.0.2 3000
```

Pods can finally be deleted with:

```bash
kubectl delete pod busybox
kubectl delete pod nodehelloworld.example.com
```

You can also delete the service nodehelloworld-service with:

```bash
kubectl delete service nodehelloworld-service
```

## Starting a cluster with an nginx container

Create a file called ```deployment.yaml``` with the following content:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.21.4
        ports:
        - containerPort: 80
```

Create another file called ```service.yaml``` with the following content:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
  labels:
    app: nginx
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: LoadBalancer
```

Cluster can now be started with:

```bash
kubectl apply -f deployment.yaml
```

followed with:

```bash
kubectl apply -f service.yaml
```

To display services execute:

```bash
kubectl get services
```

The following command is an interesting one to run now:

```bash
minikube service nginx-service
```

since it displays the url of the nginx-service and opens the latter 
service in your default browser.

To display namespaces execute:

```bash
kubectl get namespaces
```

To find out the namespace where pods have been created you can run this command:

```bash
kubectl get pods --all-namespaces
```

To stop one of the pods displayed whose name is for instance ```hello-minikube-6ddfcc9757-h4ctx```
execute the following command:

```bash
kubectl delete -n default pod hello-minikube-6ddfcc9757-h4ctx
```

To display deployments currently running execute:

```bash
kubectl get deployments
```

To delete a service first display all of your services with:

```bash
kubectl get service -o wide
```

You can now pick the one you wish to delete from the displayed list 
--- for instance nginx-service --- and then delete it with:

```bash
kubectl delete service nginx-service
```

Delete deployment nginx-deployment with:

```bash
delete deployment nginx-deployment
```

## Minikube example 

```bash
kubectl create deployment hello-minikube --image=k8s.gcr.io/echoserver:1.4
```

```bash
kubectl expose deployment hello-minikube --type=NodePort --port=8080
```

```bash
minikube service hello-minikube
```

```bash
kubectl delete deployment hello-minikube
```

```bash
minikube stop
```

The minikube vm can optionally be completely reset with:

```bash
minikube delete
```

After this, Minikube will start from scratch the next time it is started.

## Advanced topics

### Service discovery

```zsh
kubectl run -i --tty busybox --image=busybox --restart=Never -- sh
```
