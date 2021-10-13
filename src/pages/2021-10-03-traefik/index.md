---
path: "/traefik"
date: "2021-10-03T10:17:00.823Z"
title: "Traefik"
tags: ["Traefik"]
excerpt: ""
---

## Links

- [Traefik labs website](https://traefik.io/)
- [Brian Christner 56 k Cloud github link](https://github.com/56kcloud/traefik-training)
- [Docker API Access documentation](https://docs.traefik.io/providers/docker/#docker-api-access)
- [General Router documentation](https://docs.traefik.io/routing/routers/)
- [Docker Provider Router configurations](https://docs.traefik.io/routing/providers/docker/#routers)

## Traefik concepts

- Providers: discover the services that live on the infrastructure (IP, health, ...)
- Entrypoints: listen for incoming traffic (ports, ...)
- Routers: analyse the requests (host, path, headers, SSL,...).
- Services: forward the request to services (load balancing, ...)
- Middlewares: may update the request or make decisions based on the request (authentication, rate limiting, headers, ...)

## Routers: Connect Requests to Services

A traefik label like ```traefik.http.routers.<router_name>.rule```
complies with a structure of  
```[Docker Service].[Protocol].[Traefik Configuration].[User Defined Name for Config].[Option]```  

A option of rule just means we are tying a rule to the router, e.g.:  

```traefik.http.routers.whoami.rule=Host(`whoami.localhost`)```  

or in an equivalent way:  

```traefik.http.routers.whoami.rule=Host(\"whoami.localhost\")```  

Traefik creates, for each container, a corresponding service and router.
The service automatically gets a server per instance of the container, 
and the router automatically gets a rule defined by defaultRule (if 
no rule for it was defined in labels).

More examples of router configuration with labels:
- ```traefik.http.routers.<router_name>.rule```:  
```traefik.http.routers.myrouter.rule=Host(`example.com`)```  
- ```traefik.http.routers.<router_name>.entrypoints```:  
```traefik.http.routers.myrouter.entrypoints=ep1,ep2```  
- ```traefik.http.routers.<router_name>.service```:  
```traefik.http.routers.myrouter.service=myservice```  
- ```traefik.http.routers.<router_name>.tls```:  
```traefik.http.routers.myrouter.tls=true```  

# Services: Configure how to reach the Application

- Each service has its own Load Balancer. 
- Load Balancers can load balance requests between multiple instances of your application
- The target of the Load Balancer is an instance of an application and is called a Server.  
- A Service can be assigned to one of more Routers.

Examples of Service configuration with labels:

- ```traefik.http.services.<service_name>.loadbalancer.server.port```:  
```traefik.http.services.myservice.loadbalancer.server.port=8080```
- ```traefik.http.services.<service_name>.loadbalancer.passhostheader```:  
```traefik.http.services.myservice.loadbalancer.server.passhostheader=true```
- ```traefik.http.services.<service_name>.loadbalancer.healthcheck.path```:  
```traefik.http.services.myservice.loadbalancer.server.healthcheck.path=/foo```
- ```traefik.http.services.<service_name>.loadbalancer.healthcheck.port```:  
```traefik.http.services.myservice.loadbalancer.healthcheck.port=42```

Docker specific options:
- ```traefik.enable```  
tells Traefik to override the exposedbyDefault setting for this particular container
- ```traefik.docker.network``` 
overrides the default network used by Traefik

# HTTPS / TLS / Let's Encrypt

[DNS providers traefik can handle](https://docs.traefik.io/v2.3/https/acme/#providers
