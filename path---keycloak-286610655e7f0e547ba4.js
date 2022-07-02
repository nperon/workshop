webpackJsonp([84860036509320],{397:function(e,a){e.exports={data:{markdownRemark:{html:'<h2>REST API calls</h2>\n<h3>Acquire Admin Access Token. Password Grant.</h3>\n<pre><code class="language-bash">curl --location --request POST \'http://localhost:9080/auth/realms/master/protocol/openid-connect/token\' --header \'Content-Type: application/x-www-form-urlencoded\' --data-urlencode \'username=admin\' --data-urlencode \'password=admin\' --data-urlencode \'grant_type=password\' --data-urlencode \'client_id=admin-cli\'\n</code></pre>\n<p>{"access<em>token":"","expires</em>in":60,"refresh<em>expires</em>in":1800,"refresh<em>token":"","token</em>type":"bearer","not-before-policy":0,"session_state":"ce79ef94-3af3-4e54-87b3-8012dbbe44b6","scope":"email profile"}</p>\n<h3>REST API Call to Create a New User Account</h3>\n<pre><code class="language-bash">curl --location --request POST \'http://localhost:9080/auth/admin/realms/okp4kvrealm/users\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: Bearer \' \\\n--data-raw \'{"firstName":"John","lastName":"Doe", "email":"test@test.com", "enabled":"true", "username":"app-user"}\'\n</code></pre>\n<h3>REST API Call to Create a new role for the realm</h3>\n<pre><code class="language-bash">curl -X POST "http://localhost:9080/auth/admin/realms/okp4kvrealm/roles" \n --header "Content-Type: application/json" \\\n --header "Authorization: Bearer " \\\n --data-raw \'{"name": "john_doe_role"}\'\n</code></pre>\n<h3>REST API call to Get realm-level role mappings [SAT]</h3>\n<pre><code class="language-bash">curl --location --request GET \'http://localhost:9080/auth/admin/realms/okp4kvrealm/users/c4af4e2f-b432-4c3b-8405-cca86cd5b97b/role-mappings/realm\' \\\n --header "Authorization: Bearer "\n</code></pre>\n<h3>REST API call to Get realm-level roles that can be mapped [SAT]</h3>\n<pre><code class="language-bash">curl --location --request GET \'http://localhost:9080/auth/admin/realms/okp4kvrealm/users/2c9707a2-6157-4021-9c69-76bf87073bf5/role-mappings/realm/available\' \\\n --header "Authorization: Bearer "\n</code></pre>\n<p>response received was: [{"id":"245ee79e-2098-4119-8642-01b8a6c46174","name":"admin","composite":false,"clientRole":false,"containerId":"kibana"}]</p>\n<h3>Get role mappings</h3>\n<pre><code class="language-bash">curl --location --request GET \'http://localhost:9080/auth/admin/realms/okp4kvrealm/users/2c9707a2-6157-4021-9c69-76bf87073bf5/role-mappings\' \\\n --header "Authorization: Bearer " | json_pp\n</code></pre>\n<h3>REST API call to add a new role to user with id 2c9707a2-6157-4021-9c69-76bf87073bf5</h3>\n<pre><code class="language-bash">curl --location --request POST \'http://localhost:9080/auth/admin/realms/okp4kvrealm/users/2c9707a2-6157-4021-9c69-76bf87073bf5/role-mappings/realm\' -v \\\n --header \'Content-Type: application/json\' \\\n --header "Authorization: Bearer " \\\n --header \'[{\n        "name": "admin",\n        "description": "bla bla bla",\n        "composite": false,\n        "clientRole": false,\n        "containerId": "kibana"\n}]\'\n</code></pre>',frontmatter:{title:"Keycloak",date:"January 24, 2021",path:"/keycloak",tags:["Keycloak","queries","ID Provider","Authorization server"],excerpt:""}}},pathContext:{prev:{html:'<h3>System parameters</h3>\n<p>Elasticsearch version and more basic parameters:</p>\n<pre><code class="language-bash">curl -XGET https://localhost:9200 -u admin:admin --insecure\n</code></pre>\n<p>Information on nodes:</p>\n<pre><code class="language-bash">curl -XGET https://localhost:9200/_cat/nodes?v -u admin:admin --insecure\n</code></pre>\n<p>Integrated plugins:</p>\n<pre><code class="language-bash">curl -XGET https://localhost:9200/_cat/plugins?v -u admin:admin --insecure\n</code></pre>\n<p>Information on authentication:</p>\n<pre><code class="language-bash">curl -XGET https://localhost:9200/_opendistro/_security/authinfo -u admin:admin --insecure\n</code></pre>\n<p>Information on cluster:</p>\n<pre><code class="language-http">http://localhost:9200/_cluster/settings?include_defaults=true\n</code></pre>\n<p>Indices:</p>\n<pre><code class="language-bash">curl -XGET https://localhost:9200/_cat/indices -u admin:admin --insecure\n</code></pre>\n<h3>Cloning an index from dev tools console:</h3>\n<pre><code>POST _reindex\n{\n  "source": {\n    "index": "portefeuille"\n  },\n  "dest": {\n    "index": "portefeuille_test_1"\n  }\n}\n</code></pre>\n<h3>Creating a sample index from dev tools console:</h3>\n<pre><code>DELETE /bankdata\n</code></pre>\n<pre><code>PUT /bankdata\nPOST /bankdata/1\n{ "age": 42, "balance": 12000 }\nPOST /bankdata/2\n{ "age": 28, "balance": 7000 }\nPOST /bankdata/3\n{ "age": 51, "balance": 2300 }\nPOST /bankdata/4\n{ "age": 15, "balance": 450 }\nPOST /bankdata/5\n{ "age": 33 }\nPOST /bankdata/6\n{ "age": 32 }\nPOST /bankdata/7\n{ "age": 27 }\nPOST /bankdata/8\n{ "age": 79 }\nPOST /bankdata/9\n{ "age": 43, balance: null }\n</code></pre>\n<pre><code>GET /bankdata\n</code></pre>\n<pre><code>GET /bankdata/_search\n{\n    "query": {\n        "match_all": {}\n    }\n}\n</code></pre>\n<h3>Painless language scripts</h3>\n<pre><code>(((ctx?._source["SURF_PARC"]?:0)?:0)/((ctx?._source["Bovin"]?:1)?:1)?:1)\n</code></pre>',id:"/home/nicolas/projects/workshop/src/pages/2020-12-03-ELK-4/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-12-03T22:01:12.451Z",path:"/elk-useful-queries",title:"Useful Queries",excerpt:"",tags:["Elastic Search","queries","environment variables","system"]}},next:null}}}});
//# sourceMappingURL=path---keycloak-286610655e7f0e547ba4.js.map