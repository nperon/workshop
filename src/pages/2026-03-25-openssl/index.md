---
path: "/openssl"
date: "2026-03-25T21:54:00.000Z"
title: "OpenSSL"
tags: ["openssl"]
excerpt: ""
---

## Public and Private Keys in OpenSSL

Here is how to generate a private key with a size of 2048 bit:

```bash
openssl genrsa -out nicolas-rsa.pem 2048
```
Here is how to decompose the generated privated key:

```bash
openssl rsa -text -in nicolas-rsa.pem -noout
```

This displays the elements of the private key: modulus, publicExponent, privateExponent, prime1, prime2, exponent1, exponent2 and coefficient.

Here is how to get the public key:

```bash
openssl rsa -in nicolas-rsa.pem -pubout -text
```

Here is how to get the public key writen in a file:

```bash
openssl rsa -in nicolas-rsa.pem -pubout -out nicolas-rsa-pub.pem
```

Let us write a message into a file:

```bash
echo -n 'this is a message' > file.txt
```

This is how to encrypt this file with our public key:

```bash
openssl pkeyutl -encrypt -inkey nicolas-rsa-pub.pem -pubin -in file.txt -out encrypted-file.txt
```

This is how to now decrypt the encrypted file with the private key:

```bash
openssl pkeyutl -decrypt -inkey nicolas-rsa.pem -in encrypted-file.txt -out result.txt
```

If we want to use elliptic cryptography instead of rsa as the algorithm, let us display all of the possible types of curves:

```bash
openssl ecparam -list_curves
```

A prime256v1 curve is a standard option. Let us generate a private key with this option:

```bash
openssl ecparam -genkey -name prime256v1 -out ecc-key.pem
```

With an additional -noout option, the elliptic curve parameters are not included in the file:

```bash
openssl ecparam -genkey -name prime256v1 -noout -out ecc-key.pem
```

About the pem file extension: pem means "Privacy Enhanced Mail". 
A pem file may contain almost anything base64 encoded and wrapped with BEGIN and END lines.

About the der file extension: DER means Distinguished Encoding Rules. Data in der files (for instance X.509 certificates or private keys) are in binary format. DER files do not contain human readable plain text.

Here is how to print elements about our ecc key :

```bash
openssl ec -in ecc-key.pem -text
```

This is how to save the public key in a file: 

```bash
openssl ec -in ecc-key.pem -pubout -out ecc-pub.pem
```

## Creating a root certificate

A root certificate and the associated private key can be created with:

```bash
openssl req -x509 -sha256 -days 365 -key ecc-key.pem -out ecc-cert.pem
```

and then displayed with:

```bash
openssl x509 -in ecc-cert.pem -text -noout
```

Here is how to create a certificate using a configuration file called certificate.conf
(and we use the private key nicolas-rsa.pem):

```bash
openssl req -x509 -days 365 -key nicolas-rsa.pem -config certificate.conf -out cert-config.pem
```

```bash
openssl x509 -in cert-config.pem -text -noout
```

The same certificate can be created without any prompting using a conf file stating ```prompt = no```:

```
countryName = US
stateOrProvinceName = California
localityName = San Francisco
organizationName = Nicolas Ltd
organizationalUnitName = Information Department
commonName = nicolas-ltd.com
emailAddress = info@nicolas-ltd.com

[ v3_extensions ]
subjectKeyIdentifier = hash
# copies the subject key identifier (or if it fails then it uses the issuer and serial number)
authorityKeyIdentifier = keyid, issuer
# whether the certificate is a root or not
basicConstraints = critical, CA:true, pathlen:2
# key usage- use the certificate for signing or key encipherment
keyUsage = digitalSignature, keyEncipherment
```

Here is the command to create the certificate:

```bash
openssl req -x509 -days 365 -key nicolas-rsa.pem -config certificate_no_prompt.conf -out cert-config.pem
```

and here is how to display the certificate thus created:

```bash
openssl x509 -in cert-config.pem -text -noout
```

