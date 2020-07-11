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

Hints on available spring boot options can be displayed with:

```
mvn spring-boot:help
```

The application can be started with the dev profile with: 

```
mvn spring-boot:build-info
```

followed with:

```
mvn spring-boot:run
```

As an alternative to all of the mvn spring-boot commands above, the user may just run the mvnw available in the application root:

```
./mvnw
```

```
npm start
```

To generate entities according to the application requirements, open a text editor like gedit and code a jdl language snipet with a ```.jh``` extension describing the different entities and their relationships:

```
gedit src/main/resources/entities.jh &
```

Sample jh files with entities are available for instance in the [jdl-samples jhipster project on github](https://github.com/jhipster/jdl-samples). Skip the ```application { ... }``` statement in your snippet as your application options are already set and you only want to describe your entities at this stage. Once your ```entities.jh``` file is ready, go ahead and generate the entities with:

```
jhipster import-jdl src/main/resources/entities.jh
```

To package the application as a “production” JAR in the target directory, type:

```
./mvnw -Pprod clean verify
```

### Leveraging docker according to the selected Jhipster options

A number of possible options in using Jhipster are described in the README.md file of the project folder.

In case the JHipster Registry option was selected, the registry app can be run from the Docker image available in the application src/main/docker directory with: 

```
docker-compose -f src/main/docker/jhipster-registry.yml up
```

If you chose OAuth 2.0 as your authentication, Keycloak is used as the default identity provider. Running 

```
docker-compose -f src/main/docker/keycloak.yml up
```

starts up Keycloak automatically. A number of other docker-compose scripts can be availabla in the ```src/main/docker/``` directory, depending on the options set initially while generating the app. For instance it could well be that a ```mysql.yml``` docker-compose script is available to run a container with a mysql database required in dev mode. All of these docker-compose scripts can be run following the same ```docker-compose``` command pattern as stated above.

### Jhipster Marketplace modules of interest

Kafka

Stripe Payment 

Paypal

Blockchain

### Links

[JHipster Homepage](https://www.jhipster.tech/)

[JDL Studio](https://start.jhipster.tech/jdl-studio/)

[JHipster github page](https://github.com/jhipster)