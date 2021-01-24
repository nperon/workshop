---
path: "/keycloak"
date: "2021-01-08T22:04:36.451Z"
title: "Keycloak"
tags: ['Keycloak', 'queries', 'ID Provider', 'Authorization server']
excerpt: ""
---

## REST API calls

### Acquire Admin Access Token. Password Grant.

```bash
curl --location --request POST 'http://localhost:9080/auth/realms/master/protocol/openid-connect/token' --header 'Content-Type: application/x-www-form-urlencoded' --data-urlencode 'username=admin' --data-urlencode 'password=admin' --data-urlencode 'grant_type=password' --data-urlencode 'client_id=admin-cli'
```

{"access_token":"","expires_in":60,"refresh_expires_in":1800,"refresh_token":"","token_type":"bearer","not-before-policy":0,"session_state":"ce79ef94-3af3-4e54-87b3-8012dbbe44b6","scope":"email profile"}

### REST API Call to Create a New User Account

```bash
curl --location --request POST 'http://localhost:9080/auth/admin/realms/marvelrealm/users' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ' \
--data-raw '{"firstName":"John","lastName":"Doe", "email":"test@test.com", "enabled":"true", "username":"app-user"}'
```

### REST API Call to Create a new role for the realm

```bash
curl -X POST "http://localhost:9080/auth/admin/realms/marvelrealm/roles" 
 --header "Content-Type: application/json" \
 --header "Authorization: Bearer " \
 --data-raw '{"name": "john_doe_role"}'
```

### REST API call to Get realm-level role mappings [SAT]

```bash
curl --location --request GET 'http://localhost:9080/auth/admin/realms/marvelrealm/users/c4af4e2f-b432-4c3b-8405-cca86cd5b97b/role-mappings/realm' \
 --header "Authorization: Bearer "
```
 
### REST API call to Get realm-level roles that can be mapped [SAT]

```bash
curl --location --request GET 'http://localhost:9080/auth/admin/realms/marvelrealm/users/2c9707a2-6157-4021-9c69-76bf87073bf5/role-mappings/realm/available' \
 --header "Authorization: Bearer "
```
 
response received was: [{"id":"245ee79e-2098-4119-8642-01b8a6c46174","name":"admin","composite":false,"clientRole":false,"containerId":"bateman"}]

### REST API call to add a new role to user with id 2c9707a2-6157-4021-9c69-76bf87073bf5

```bash
curl --location --request POST 'http://localhost:9080/auth/admin/realms/marvelrealm/users/2c9707a2-6157-4021-9c69-76bf87073bf5/role-mappings/realm' -v \
 --header 'Content-Type: application/json' \
 --header "Authorization: Bearer " \
 --data-raw '[{
        "id": "b9e89099-75c0-43f4-8100-2804a14d2399",
        "name": "all_access",
        "composite": false,
        "clientRole": false,
        "containerId": "bateman"
}]'
```
