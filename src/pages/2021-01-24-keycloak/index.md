---
path: "/keycloak"
date: "2021-01-24T22:04:36.451Z"
title: "Keycloak"
tags: ['Keycloak', 'queries', 'ID Provider', 'Authorization server']
excerpt: ""
---

## REST API calls

### Acquire Admin Access Token. Password Grant.

curl --location --request POST 'http://localhost:9080/auth/realms/master/protocol/openid-connect/token' --header 'Content-Type: application/x-www-form-urlencoded' --data-urlencode 'username=admin' --data-urlencode 'password=admin' --data-urlencode 'grant_type=password' --data-urlencode 'client_id=admin-cli'

{"access_token":"","expires_in":60,"refresh_expires_in":1800,"refresh_token":"","token_type":"bearer","not-before-policy":0,"session_state":"ce79ef94-3af3-4e54-87b3-8012dbbe44b6","scope":"email profile"}

### REST API Call to Create a New User Account

curl --location --request POST 'http://localhost:9080/auth/admin/realms/okp4kvrealm/users' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ' \
--data-raw '{"firstName":"Sergey","lastName":"Kargopolov", "email":"test@test.com", "enabled":"true", "username":"app-user"}'

### REST API Call to Create a new role for the realm

curl -X POST "http://localhost:9080/auth/admin/realms/okp4kvrealm/roles" \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer " \
 -d '{"name": "serguei_role"}'

### REST API call to Get realm-level role mappings [SAT]

curl --location --request GET 'http://localhost:9080/auth/admin/realms/okp4kvrealm/users/c4af4e2f-b432-4c3b-8405-cca86cd5b97b/role-mappings/realm' \
 -H "Authorization: Bearer "
 
### REST API call to Get realm-level roles that can be mapped [SAT]

curl --location --request GET 'http://localhost:9080/auth/admin/realms/okp4kvrealm/users/8d27e594-3512-453f-89d7-5abdb46767fd/role-mappings/realm/available' \
 -H "Authorization: Bearer "
 
response received was: [{"id":"245ee79e-2098-4119-8642-01b8a6c46174","name":"admin","composite":false,"clientRole":false,"containerId":"kibana"}]

### Get role mappings

curl --location --request GET 'http://localhost:9080/auth/admin/realms/okp4kvrealm/users/8d27e594-3512-453f-89d7-5abdb46767fd/role-mappings' \
 -H "Authorization: Bearer " | json_pp


### REST API call to add a new role to user with id 8d27e594-3512-453f-89d7-5abdb46767fd

curl --location --request POST 'http://localhost:9080/auth/admin/realms/okp4kvrealm/users/8d27e594-3512-453f-89d7-5abdb46767fd/role-mappings/' \
 -H 'Content-Type: application/json' \
 -H "Authorization: Bearer "\
 -H '[{
        "name": "admin",
        "description": "bla bla bla",
        "composite": false,
        "clientRole": false,
        "containerId": "kibana"
}]'

