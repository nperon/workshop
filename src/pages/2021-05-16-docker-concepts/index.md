---
path: "/docker-concepts"
date: "2021-05-16T22:21:00.451Z"
title: "Docker concepts"
tags: ['Docker', 'containers', 'networks', 'images']
excerpt: ""
---

## Basic commands

```bash
docker info
docker
```

## Containers

```bash
docker container run --publish 80:80 --detach --name webhost nginx
docker container logs webhost
docker container stop webhost
docker container top webhost
docker container ls -a
```

```bash
docker container run --detach --publish 3306:3306 --name db --env MYSQL_RANDOM_ROOT_PASSWORD=yes mysql
docker container logs db
docker container inspect db
docker container stats db
```

```bash
docker container run -it --name proxy nginx bash
```

## Networks

```bash
docker container run -p 80:80 --name webhost --detach nginx
docker container port webhost
docker container inspect --format '{{ .NetworkSettings.IPAddress }}' webhost
ifconfig
```

```bash
docker network ls
docker network inspect bridge
docker network create my_app_net
docker network inspect my_app_net
docker container run --detach --name new_nginx --network my_app_net nginx
docker network inspect my_app_net
docker network connect my_app_net webhost
docker container inspect webhost
docker network disconnect my_app_net webhost
docker container inspect webhost
```

## DNS

```bash
docker network inspect my_app_net
docker container run --detach --name my_nginx --network my_app_net nginx:alpine
docker network inspect my_app_net
docker container exec -it my_nginx ping new_nginx
```

```bash
docker network create dude
docker container run --detach --network dude --network-alias search elasticsearch:2
docker container run --detach --network dude --network-alias search elasticsearch:2
docker container run --rm --network dude alpine nslookup search
docker container run --rm --network dude centos curl -s search:9200
docker container run --rm --network dude centos curl -s search:9200
```

## Images

