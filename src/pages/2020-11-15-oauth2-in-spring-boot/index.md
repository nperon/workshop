---
path: "/oauth2-in-spring-boot"
date: "2020-11-15T17:23:14.538Z"
title: "Oauth 2.0 in Spring Boot"
tags: ['web security', 'OAuth 2.0', 'Spring Boot', 'Spring Security', 'Spring 5']
excerpt: ""
---

### OAuth 2.0 in Spring Security 5

The legacy [Spring Security OAuth Project](https://github.com/spring-projects/spring-security-oauth)includes support for implementating all of the three roles involved in OAuth: Client, Resource Server and Authorization Server. However, that project is now deprecated and to be maintained only for a limited time 
until not later than may 2022. 

The new OAuth 2 project (https://github.com/spring-projects-experimental/spring-authorization-server) 
which is part of Spring Security 5 is already available but not fully developed as yet. A 
client and a resource server are already available. However, 
the [authorization server](https://github.com/spring-projects-experimental/spring-authorization-server) project is not completed as of december 2020. 

### The two types of clients

Client applications can be split into two categories: 
- confidential clients where the client secret is kept safe.
- public clients which cannot keep their client id and client secret safe. It is the case of
applications which are browser based like pure front end javascript applications. It is also
the case of some native applications stored in smartphones. It is the case of any application 
whose code can be viewed or decompiled.

## The different grant types i.e. ways an application gets an access token

Authorization code and Client credentials are the most common grant types. Implicit flow and Password grant are two other grant types of Oauth 2 which are now deprecated. There are now two additional possible grant types which can be relevant in some types of applications: PKCE Enhanced authorization code and Device code. Note that PKCE stands for Proof Key for Code Exchange.

Here are five different types of applications with their relevant grant types:
- Server Side Web Apps: **Authorisation Code** ; Password grant (deprecated).
- Server Side Script with no UI : **Client Credentials**
- Javascript Single Page Application with no back end: **PKCE Enhanced Authorization Code**; Implicit Flow (deprecated) ; Password Grant (deprecated).
- Mobile native app : **Authorization Code**; **PKCE Enhanced Authorization Code** ; Implicit Flow (deprecated) ; Password Grant (deprecated).
- Device : **Device Code**.

Finally, Refresh Token is an additional Grant Type where a refresh token is exchanged for an access token.



