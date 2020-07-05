---
path: "/jhipster"
date: "2020-07-05T18:51:12.235Z"
title: "Generate and deploy a Java app on the cloud with Jhipster"
tags: ['jhipster', 'aws']
excerpt: ""
---

### Installing Jhipster

```
npm install -g generator-jhipster
```

```
jhipster --version
```

### Generating an app


```
mkdir myPOC && cd myPOC
```

```
jhipster
```

```
code .
```

```
npm install
```

```
mvn spring-boot:run
```

```
npm start
```

```
gedit src/main/resources/entities.jh
```

```
jhipster import-jdl src/main/resources/entities.jh
```


### Leveraging available Jhipster options

A number of possible options in using Jhipster are described in the README.md file of the project folder.

In case the JHipster Registry option was selected, the registry app can be run from the Docker image available in the application src/main/docker directory with: 

```
docker-compose -f src/main/docker/jhipster-registry.yml up
```

If you chose OAuth 2.0 as your authentication, Keycloak is used as the default identity provider. Running 

```
docker-compose -f src/main/docker/keycloak.yml up
```

starts up Keycloak automatically.

### Jhipster Marketplace modules of interest

Kafka

Stripe Payment 

Paypal

Blockchain

### Links

[JHipster Homepage](https://www.jhipster.tech/)

[JDL Studio](https://start.jhipster.tech/jdl-studio/)

[JHipster github page](https://github.com/jhipster)