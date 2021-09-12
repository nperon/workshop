---
path: "/redis"
date: "2021-09-11T18:38:00.451Z"
title: "Redis"
tags: ["Redis"]
excerpt: ""
---

## Links

- [Cheat sheet](https://cheatography.com/tasjaevan/cheat-sheets/redis/)  
- [Redis commands](https://cheatography.com/tasjaevan/cheat-sheets/redis/)  

## Redis cli commands

```
set user:1:name 1
set user:2:name 2
get user:1:name
keys user*
scan 0
del user:1:name 1
get user:1:name
flushddb
set a b ex 10
get a
get a
ttl a
expire a 60
set c d exat 1624737950
```

### xx nx

```
set e f xx
get e
set e f nx
get e
set e g nx
get e
```

### incr

```
set a 1
incr a
get a
flushdb
incr bb
keys *
get bb
decr bb
get b
flushdb
set a 1.02
get a
incrbyfloat a .3
get a
set sam 100
incr sam
incrby sam 20
incrby sam 20
decrby sam 5
```

```
set user:1:lives 3 ex 1800
ttl user:1:lives
decr user:1:lives
decr user:1:lives
decr user:1:lives
flushdb
```

### Hash

```
hset user:1 name sam age 10 city atlanta
keys *
type user:1
hget user:1 name
hget user:1 age
hget user:1 city
hgetall user:1
hset user:2 birthYear 2020 status active
expire user:2 10
ttl user:2*
keys *
hkeys user:1
hvals user:1
hexists user:1 status
hexists user:1 age
hgetall user:1
hdel user:1 age
del user:1
keys *
```

### List & Queue

```
rpush users sam mike jake
keys *
type users
llen users
lrange users 0 -1
lrange users 0 1
lpop users
llen users
rpush 1 2 3 4 5 6
llen users
keys *
rpush 1 2 3 4 5 6
lpop users
lpop users 2
lrange users 0 -1
```

### List as lifo stack

```
flushdb
rpush users 1 2 3 4 5 6
llen users
lrange users 0 -1
rpop users
rpop users
rpop users
llen users
```