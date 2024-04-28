webpackJsonp([0xc4263c92922d],{426:function(e,a){e.exports={pathContext:{posts:[{html:'<h2>REST API calls</h2>\n<h3>Acquire Admin Access Token. Password Grant.</h3>\n<pre><code class="language-bash">curl --location --request POST \'http://localhost:9080/auth/realms/master/protocol/openid-connect/token\' --header \'Content-Type: application/x-www-form-urlencoded\' --data-urlencode \'username=admin\' --data-urlencode \'password=admin\' --data-urlencode \'grant_type=password\' --data-urlencode \'client_id=admin-cli\'\n</code></pre>\n<p>{"access<em>token":"","expires</em>in":60,"refresh<em>expires</em>in":1800,"refresh<em>token":"","token</em>type":"bearer","not-before-policy":0,"session_state":"ce79ef94-3af3-4e54-87b3-8012dbbe44b6","scope":"email profile"}</p>\n<h3>REST API Call to Create a New User Account</h3>\n<pre><code class="language-bash">curl --location --request POST \'http://localhost:9080/auth/admin/realms/okp4kvrealm/users\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: Bearer \' \\\n--data-raw \'{"firstName":"John","lastName":"Doe", "email":"test@test.com", "enabled":"true", "username":"app-user"}\'\n</code></pre>\n<h3>REST API Call to Create a new role for the realm</h3>\n<pre><code class="language-bash">curl -X POST "http://localhost:9080/auth/admin/realms/okp4kvrealm/roles" \n --header "Content-Type: application/json" \\\n --header "Authorization: Bearer " \\\n --data-raw \'{"name": "john_doe_role"}\'\n</code></pre>\n<h3>REST API call to Get realm-level role mappings [SAT]</h3>\n<pre><code class="language-bash">curl --location --request GET \'http://localhost:9080/auth/admin/realms/okp4kvrealm/users/c4af4e2f-b432-4c3b-8405-cca86cd5b97b/role-mappings/realm\' \\\n --header "Authorization: Bearer "\n</code></pre>\n<h3>REST API call to Get realm-level roles that can be mapped [SAT]</h3>\n<pre><code class="language-bash">curl --location --request GET \'http://localhost:9080/auth/admin/realms/okp4kvrealm/users/2c9707a2-6157-4021-9c69-76bf87073bf5/role-mappings/realm/available\' \\\n --header "Authorization: Bearer "\n</code></pre>\n<p>response received was: [{"id":"245ee79e-2098-4119-8642-01b8a6c46174","name":"admin","composite":false,"clientRole":false,"containerId":"kibana"}]</p>\n<h3>REST API call to add a new role to user with id 2c9707a2-6157-4021-9c69-76bf87073bf5</h3>\n<pre><code class="language-bash">curl --location --request POST \'http://localhost:9080/auth/admin/realms/okp4kvrealm/users/2c9707a2-6157-4021-9c69-76bf87073bf5/role-mappings/realm\' -v \\\n --header \'Content-Type: application/json\' \\\n --header "Authorization: Bearer " \\\n --data-raw \'[{\n        "id": "b9e89099-75c0-43f4-8100-2804a14d2399",\n        "name": "all_access",\n        "composite": false,\n        "clientRole": false,\n        "containerId": "kibana"\n}]\'\n</code></pre>',id:"/home/nicolas/projects/workshop/src/pages/2021-01-24-keycloak/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2021-01-24T22:04:36.451Z",path:"/keycloak",title:"Keycloak",excerpt:"",tags:["Keycloak","queries","ID Provider","Authorization server"]}}],tagName:"Keycloak"}}}});
//# sourceMappingURL=path---tags-keycloak-5eb6797e8ca8e9fb128a.js.map