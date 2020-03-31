---
path: "/docker"
date: "2019-03-05T22:35:12.235Z"
title: "Docker Recipes"
tags: ['docker', 'container', 'devops']
excerpt: "Some Docker Recipes"
---

### Create a container with a mongo database and connect to it

Start with displaying all currently running containers:
```bash
docker ps
```

Then create locally the container associated with the mongo docker image:
```bash
docker run -p 27017:27017 -d mongo
```

The resulting mongo db container is then displayed by executing another time 
```bash
docker ps
```
Information on the running container like the following is displayed:
```
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                      NAMES
2c6a61aba41b        mongo               "docker-entrypoint.s…"   3 minutes ago       Up 3 minutes        0.0.0.0:27017->27017/tcp   clever_dubinsky
```

Connection to the database at url localhost:27017 can be open using for instance the robo-3t nosql database editor. 
Finally, the container when not needed anymore can be stopped with:
```
docker stop 2c6a61aba41b
```
