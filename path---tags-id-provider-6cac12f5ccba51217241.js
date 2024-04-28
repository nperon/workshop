webpackJsonp([0xa965f4535bf1],{420:function(e,a){e.exports={pathContext:{posts:[{html:'<h2>REST API calls</h2>\n<h3>Acquire Admin Access Token. Password Grant.</h3>\n<p>curl --location --request POST \'<a href="http://localhost:9080/auth/realms/master/protocol/openid-connect/token">http://localhost:9080/auth/realms/master/protocol/openid-connect/token</a>\' --header \'Content-Type: application/x-www-form-urlencoded\' --data-urlencode \'username=admin\' --data-urlencode \'password=admin\' --data-urlencode \'grant<em>type=password\' --data-urlencode \'client</em>id=admin-cli\'</p>\n<p>{"access<em>token":"","expires</em>in":60,"refresh<em>expires</em>in":1800,"refresh<em>token":"","token</em>type":"bearer","not-before-policy":0,"session_state":"ce79ef94-3af3-4e54-87b3-8012dbbe44b6","scope":"email profile"}</p>\n<h3>REST API Call to Create a New User Account</h3>\n<p>curl --location --request POST \'<a href="http://localhost:9080/auth/admin/realms/okp4kvrealm/users">http://localhost:9080/auth/admin/realms/okp4kvrealm/users</a>\' <br>\n--header \'Content-Type: application/json\' <br>\n--header \'Authorization: Bearer \' <br>\n--data-raw \'{"firstName":"Sergey","lastName":"Kargopolov", "email":"test@test.com", "enabled":"true", "username":"app-user"}\'</p>\n<h3>REST API Call to Create a new role for the realm</h3>\n<p>curl -X POST "<a href="http://localhost:9080/auth/admin/realms/okp4kvrealm/roles">http://localhost:9080/auth/admin/realms/okp4kvrealm/roles</a>" <br>\n-H "Content-Type: application/json" <br>\n-H "Authorization: Bearer " <br>\n-d \'{"name": "serguei_role"}\'</p>\n<h3>REST API call to Get realm-level role mappings [SAT]</h3>\n<p>curl --location --request GET \'<a href="http://localhost:9080/auth/admin/realms/okp4kvrealm/users/c4af4e2f-b432-4c3b-8405-cca86cd5b97b/role-mappings/realm">http://localhost:9080/auth/admin/realms/okp4kvrealm/users/c4af4e2f-b432-4c3b-8405-cca86cd5b97b/role-mappings/realm</a>\' <br>\n-H "Authorization: Bearer "</p>\n<h3>REST API call to Get realm-level roles that can be mapped [SAT]</h3>\n<p>curl --location --request GET \'<a href="http://localhost:9080/auth/admin/realms/okp4kvrealm/users/8d27e594-3512-453f-89d7-5abdb46767fd/role-mappings/realm/available">http://localhost:9080/auth/admin/realms/okp4kvrealm/users/8d27e594-3512-453f-89d7-5abdb46767fd/role-mappings/realm/available</a>\' <br>\n-H "Authorization: Bearer "</p>\n<p>response received was: [{"id":"245ee79e-2098-4119-8642-01b8a6c46174","name":"admin","composite":false,"clientRole":false,"containerId":"kibana"}]</p>\n<h3>Get role mappings</h3>\n<p>curl --location --request GET \'<a href="http://localhost:9080/auth/admin/realms/okp4kvrealm/users/8d27e594-3512-453f-89d7-5abdb46767fd/role-mappings">http://localhost:9080/auth/admin/realms/okp4kvrealm/users/8d27e594-3512-453f-89d7-5abdb46767fd/role-mappings</a>\' <br>\n-H "Authorization: Bearer " | json_pp</p>\n<h3>REST API call to add a new role to user with id 8d27e594-3512-453f-89d7-5abdb46767fd</h3>\n<p>curl --location --request POST \'<a href="http://localhost:9080/auth/admin/realms/okp4kvrealm/users/8d27e594-3512-453f-89d7-5abdb46767fd/role-mappings/">http://localhost:9080/auth/admin/realms/okp4kvrealm/users/8d27e594-3512-453f-89d7-5abdb46767fd/role-mappings/</a>\' <br>\n-H \'Content-Type: application/json\' <br>\n-H "Authorization: Bearer "<br>\n-H \'[{\n"name": "admin",\n"description": "bla bla bla",\n"composite": false,\n"clientRole": false,\n"containerId": "kibana"\n}]\'</p>',id:"/home/nicolas/projects/workshop/src/pages/2021-01-24-keycloak/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2021-01-24T22:04:36.451Z",path:"/keycloak",title:"Keycloak",excerpt:"",tags:["Keycloak","queries","ID Provider","Authorization server"]}}],tagName:"ID Provider"}}}});
//# sourceMappingURL=path---tags-id-provider-6cac12f5ccba51217241.js.map