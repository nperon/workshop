---
path: "/maven"
date: "2022-08-27T00:47:00.342Z"
title: "Maven"
tags: ["devops", "continuous integration", "java"]
excerpt: ""
---

## Goals

```zsh
mvn clean
```

```zsh
mvn package
```

To display a POM that includes all of the inherited properties, execute:

```zsh
mvn help:effective-pom
```

## Dependency Scope

- Compile: Default. Available on all classpaths of project. Also, propagated to downstream projects.
- Provided: Like Compile, but expected to be provided by JDK or container at runtime.
- Runtime: Not required for compile, but needed for runtime. On runtime and test classpaths, not compile.
- Test: Only available on test classpath, not transitive.
- System: similar to provided, but jar is added to system explicitly (via file path)
- Import: imports dependency of POM

#### Dependency plugin goals

- dependency:tree
- dependency:go-offline
- dependency:purge-local-repository
- dependency:sources

## Maven Build Lifecycles

Maven is based on the concept of build lifecycles.
A licecycle is a pre-defined group of build steps called **phases**.
Each phase can be bound to one or more plugin **goals**.
All work done in Maven is done by plugins.
Lifecycles and phases provide the framework to call plugin goals in a sequence.

There are three pre-defined lifecycles:
- clean
- default: does the build and deployment of the project. It is defined without plugin bindings, bindings are defined for each packaging. The default lifecycle include the phases but a number of them are not mentioned: validate, compile, test, package, verify, install and deploy.
- site: least used in practice

For instance phases of the default lifecycle involved in the case of a jar
packaging are the following:
- process-resources (maven-resources-plugin: resources)
- compile (maven-compiler-plugin: compile)
- process-test-resources (maven-compiler-plugin: testResources)
- test-compile (maven-compiler-plugin: testCompile)
- test (maven-surefire-plugin: jar)
- package (maven-jar-plugin: jar)
- install (maven-install-plugin: install)
- deploy (maven-deploy-plugin: deploy)

