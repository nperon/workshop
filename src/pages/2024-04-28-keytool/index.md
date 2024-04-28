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

Help command is just

```bash
keytool -h
```

Command to generate a key pair:

```bash
keytool -genkeypair -alias myalias -keyalg RSA -keysize 2048 -validity 730 -keystore myjavakeystore.jks
```

```bash

```

```bash
```

```bash
```

