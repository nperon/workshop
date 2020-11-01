---
path: "/transport-layer-security"
date: "2020-11-01T21:15:34.235Z"
title: "Transport Layer Security"
tags: ['TLS', 'web security', 'TLS certificate']
excerpt: ""
---

### Getting a letsencrypt certificate on a host with shell access

Use the Certbot ACME client documented in the [certbot pages](https://certbot.eff.org).

### Decoding and evaluating the generated TLS certificate

- paste the certificate contained in the ```cert.pem``` file found somewhere under the 
```/etc/letsencrypt``` directory into the form provided 
in the [SSLHopper pages](https://www.sslshopper.com/certificate-decoder.html).
The same test can be done with the ```chain.pem``` or with 
the ```fullchain.pem``` file.

- paste the domain of the site to be evaluated into the form found in 
the SSL Server test page of the [www.ssllabs.com/ssltest/](https://www.ssllabs.com/ssltest/).

- another similar test is available at [www.digicert.com/help](https://www.digicert.com/help).
