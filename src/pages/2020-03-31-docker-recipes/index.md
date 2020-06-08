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

Executing another time ```docker ps``` results in information on the created container like the following being displayed:
```
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                      NAMES
2c6a61aba41b        mongo               "docker-entrypoint.s…"   3 minutes ago       Up 3 minutes        0.0.0.0:27017->27017/tcp   clever_dubinsky
```

Connection to the database at url localhost:27017 can be opened using for instance the robo-3t nosql database editor. 
Finally, the container when not needed anymore can be stopped with:
```
docker stop 2c6a61aba41b
```

### Create a container with a PostgreSQL database given the database name and the user credentials

Let us assume we need to connect to a database called course_data in a PostgreSQL SGBD with the following credentials: the user is postgres and the password is password. The command line to launch a docker container with such a database is:

```bash
docker run --name postgresdb -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=course_data -d -p 5432:5432 postgres
```

Terminal access to the database prompt is obtained by first accessing the container shell:

```bash
docker container exec -it postgresdb bash
```

The postgre prompt of user 'postgres' may then be accessed with:

```bash
psql course_data postgres
```
