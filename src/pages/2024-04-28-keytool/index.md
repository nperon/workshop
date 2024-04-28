---
path: "/keytool"
date: "2024-04-28T14:02:00.438Z"
title: "Keytool"
tags: ["java", "security", "tls", "ssl", "keytool"]
excerpt: ""
---

Keytool is a tool used to manage java keystores. It allows to do the following:
- listing keystore contens
- changing (add/remove) keys and certificates
- generating keys and key pairs

Links:
- [Self signed certificates for a known community](https://blogs.oracle.com/java-platform-group/self-signed-certificates-for-a-known-community)

Help command is just:

```bash
keytool -h
```

Command to generate a key pair:

```bash
keytool -genkeypair -alias myalias -keyalg RSA -keysize 2048 -validity 730 -keystore ownjavakeystore.jks
```

Now to display the updated keystore content:

```bash
keytool -list -keystore ownjavakeystore.jks
```

Here is the command to export the myalias key pair into a certificate file called myalias.cer:

```bash
keytool -exportcert -keystore ownjavakeystore.jks -alias myalias -file myalias.cer
```


