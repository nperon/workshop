---
path: "/java-environment"
date: "2025-12-08T23:18:00.000Z"
title: "Java Environment"
tags: ["java", "environment"]
excerpt: ""
---

#### In Windows


Command to import a private PKI root chain certificate of an artifactory registry into the local JDK is the following:

```cmd
keytool -importcert -alias artifactory2025 -file "C:\Users\myusername\Downloads\artifactory.example.com.crt" -cacerts -storepass changeit
```
It is assumed that the root chain certificate "artifactory.example.com.crt" of the registry server has been imported into "C:\Users\myusername\Downloads".