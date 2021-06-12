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

```bash
docker history nginx:latest
docker image inspect nginx:latest

docker image tag nginx nperon/nginx
docker login
cat ~/.docker/config.json
docker logout
```

```bash
cd dockerfile-sample-1/

docker build -t nperon/nodeapp .
docker container run --rm --publish 80:3000 --detach nperon/nodeapp
docker push nperon/nodeapp
```

## Using Prune to Keep Your Docker System Clean

Command to see space usage:

```bash
docker system df
```

Command to clean up just dangling images:

```bash
docker image prune
```

Command to clean up everything: 

```bash
docker system prune
```

Command to remove all unused images: 

```bash
docker image prune -a
```

## Persistent Data: Data Volumes

```bash
docker container run --detach --name mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=True mysql

docker container run --detach --name mysql3 -e MYSQL_ALLOW_EMPTY_PASSWORD=True -v mysql-db:/var/lib/mysql mysql
```

```bash
docker container run --detach --name psql -v psql-data:/var/lib/postgresql/data postgres:9.6.1
docker container logs -f psql
```

## Persistent Data: Bind Mounting

```bash
cd dockerfile-sample-2
docker container run -d --name nginx -p 80:80 -v $(pwd):/usr/share/nginx/html nginx
```

```bash
cd bindmount-sample-1
docker run -p 80:4000 -v $(pwd):/site bretfisher/jekyll-serve
```

## docker-compose

### Structure of docker-compose yml

```yml
version: '3.2'  # if no version is specified then v1 is assumed. Recommend v2 minimum

services:  # containers. same as docker run
  servicename: # a friendly name. this is also DNS name inside network
    image: # Optional if you use build:
    command: # Optional, replace the default CMD specified by the image
    environment: # Optional, same as -e in docker run
    volumes: # Optional, same as -v in docker run
  servicename2:

volumes: # Optional, same as docker volume create

networks: # Optional, same as docker network create
```

