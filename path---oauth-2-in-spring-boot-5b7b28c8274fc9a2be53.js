webpackJsonp([0xa98187ae188a],{449:function(e,a){e.exports={data:{markdownRemark:{html:'<h3>OAuth 2.0 in Spring Security 5</h3>\n<p>The legacy <a href="https://github.com/spring-projects/spring-security-oauth">Spring Security OAuth Project</a> includes support for implementing all of the three roles involved in OAuth: Client, Resource Server and Authorization Server. However, that project is now deprecated and to be maintained only for a limited time\nuntil not later than may 2022. </p>\n<p>The new OAuth 2 project (<a href="https://github.com/spring-projects-experimental/spring-authorization-server">https://github.com/spring-projects-experimental/spring-authorization-server</a>)\nwhich is part of Spring Security 5 is already available but not fully developed as yet. A\nclient and a resource server are already available. However,\nthe <a href="https://github.com/spring-projects-experimental/spring-authorization-server">authorization server</a> project is not completed as of december 2020. </p>\n<h3>The two types of clients</h3>\n<p>Client applications can be split into two categories: </p>\n<ul>\n<li>confidential clients where the client secret is kept safe.</li>\n<li>public clients which cannot keep their client id and client secret safe. It is the case of\napplications which are browser based like pure front end javascript applications. It is also\nthe case of some native applications stored in smartphones. It is the case of any application\nwhose code can be viewed or decompiled.</li>\n</ul>\n<h2>The different grant types i.e. ways an application gets an access token</h2>\n<p>Authorization code and Client credentials are the most common grant types. Implicit flow and Password grant are two other grant types of Oauth 2 which are now deprecated. There are now two additional possible grant types which can be relevant in some types of applications: PKCE Enhanced authorization code and Device code. Note that PKCE stands for Proof Key for Code Exchange.</p>\n<p>Here are five different types of applications with their relevant grant types:</p>\n<ul>\n<li>Server Side Web Apps: <strong>Authorisation Code</strong> ; Password grant (deprecated).</li>\n<li>Server Side Script with no UI : <strong>Client Credentials</strong></li>\n<li>Javascript Single Page Application with no back end: <strong>PKCE Enhanced Authorization Code</strong>; Implicit Flow (deprecated) ; Password Grant (deprecated).</li>\n<li>Mobile native app : <strong>Authorization Code</strong>; <strong>PKCE Enhanced Authorization Code</strong> ; Implicit Flow (deprecated) ; Password Grant (deprecated).</li>\n<li>Device : <strong>Device Code</strong>.</li>\n</ul>\n<p>Finally, Refresh Token is an additional Grant Type where a refresh token is exchanged for an access token.</p>',frontmatter:{title:"Oauth 2.0 in Spring Boot",date:"November 15, 2020",path:"/oauth2-in-spring-boot",tags:["web security","OAuth 2.0","Spring Boot","Spring Security","Spring 5"],excerpt:""}}},pathContext:{prev:{html:'<h3>Aggregations, buckets and metrics</h3>\n<p>Bucket by rating value:</p>\n<pre><code class="language-bash">curl -XGET \'127.0.0.1:9200/ratings/_search?size=0&#x26;pretty\' -d \'\n{\n    "aggs": {\n        "ratings": {\n            "terms": {\n                "field": "rating"\n            }\n        }\n    }\n}\'\n</code></pre>\n<p>Count only 5-start ratings:</p>\n<pre><code class="language-bash">curl -XGET \'127.0.0.1:9200/ratings/_search?size=0&#x26;pretty\' -d \'\n{\n    "query": {\n        "match": {\n            "rating": 5.0\n        }\n    },\n    "aggs": {\n        "ratings": {\n            "terms": {\n                "field": "rating"\n            }\n        }\n    }\n}\'\n</code></pre>\n<p>Average rating for Star Wars:</p>\n<pre><code class="language-bash">curl -XGET \'127.0.0.1:9200/ratings/_search?size=0&#x26;pretty\' -d \'\n{\n    "query": {\n        "match_phrase": {\n            "title": "Star Wars Episode IV"\n        }\n    },\n    "aggs": {\n        "avg_rating": {\n            "avg": {\n                "field": "rating"\n            }\n        }\n    }\n}\'\n</code></pre>\n<h3>Histograms</h3>\n<p>Display ratings by 1.0-rating intervals</p>\n<pre><code class="language-bash">curl -XGET \'127.0.0.1:9200/ratings/_search?size=0&#x26;pretty\' -d \'\n{\n    "aggs": {\n        "whole_rating": {\n            "histogram": {\n                "field": "rating",\n                "interval": 1.0\n            }\n        }\n    }\n}\'\n</code></pre>',id:"/Users/nicolas/repos/github.com/nperon/workshop/src/pages/2020-08-29-ELK-3/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-08-29T22:47:32.235Z",path:"/elk-searching",title:"Aggregations",excerpt:"",tags:["Elastic Search","aggregations"]}},next:{html:'<h2>REST API calls</h2>\n<h3>Acquire Admin Access Token. Password Grant.</h3>\n<pre><code class="language-bash">curl --location --request POST \'http://localhost:9080/auth/realms/master/protocol/openid-connect/token\' --header \'Content-Type: application/x-www-form-urlencoded\' --data-urlencode \'username=admin\' --data-urlencode \'password=admin\' --data-urlencode \'grant_type=password\' --data-urlencode \'client_id=admin-cli\'\n</code></pre>\n<p>{"access<em>token":"","expires</em>in":60,"refresh<em>expires</em>in":1800,"refresh<em>token":"","token</em>type":"bearer","not-before-policy":0,"session_state":"ce79ef94-3af3-4e54-87b3-8012dbbe44b6","scope":"email profile"}</p>\n<h3>REST API Call to Create a New User Account</h3>\n<pre><code class="language-bash">curl --location --request POST \'http://localhost:9080/auth/admin/realms/marvelrealm/users\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: Bearer \' \\\n--data-raw \'{"firstName":"John","lastName":"Doe", "email":"test@test.com", "enabled":"true", "username":"app-user"}\'\n</code></pre>\n<h3>REST API Call to Create a new role for the realm</h3>\n<pre><code class="language-bash">curl -X POST "http://localhost:9080/auth/admin/realms/marvelrealm/roles" \n --header "Content-Type: application/json" \\\n --header "Authorization: Bearer " \\\n --data-raw \'{"name": "john_doe_role"}\'\n</code></pre>\n<h3>REST API call to Get realm-level role mappings [SAT]</h3>\n<pre><code class="language-bash">curl --location --request GET \'http://localhost:9080/auth/admin/realms/marvelrealm/users/c4af4e2f-b432-4c3b-8405-cca86cd5b97b/role-mappings/realm\' \\\n --header "Authorization: Bearer "\n</code></pre>\n<h3>REST API call to Get realm-level roles that can be mapped [SAT]</h3>\n<pre><code class="language-bash">curl --location --request GET \'http://localhost:9080/auth/admin/realms/marvelrealm/users/2c9707a2-6157-4021-9c69-76bf87073bf5/role-mappings/realm/available\' \\\n --header "Authorization: Bearer "\n</code></pre>\n<p>response received was: [{"id":"245ee79e-2098-4119-8642-01b8a6c46174","name":"admin","composite":false,"clientRole":false,"containerId":"bateman"}]</p>\n<h3>REST API call to add a new role to user with id 2c9707a2-6157-4021-9c69-76bf87073bf5</h3>\n<pre><code class="language-bash">curl --location --request POST \'http://localhost:9080/auth/admin/realms/marvelrealm/users/2c9707a2-6157-4021-9c69-76bf87073bf5/role-mappings/realm\' -v \\\n --header \'Content-Type: application/json\' \\\n --header "Authorization: Bearer " \\\n --data-raw \'[{\n        "id": "b9e89099-75c0-43f4-8100-2804a14d2399",\n        "name": "all_access",\n        "composite": false,\n        "clientRole": false,\n        "containerId": "bateman"\n}]\'\n</code></pre>',id:"/Users/nicolas/repos/github.com/nperon/workshop/src/pages/2021-01-24-keycloak/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2021-01-08T22:04:36.451Z",path:"/keycloak",title:"Keycloak",excerpt:"",tags:["Keycloak","queries","ID Provider","Authorization server"]}}}}}});
//# sourceMappingURL=path---oauth-2-in-spring-boot-5b7b28c8274fc9a2be53.js.map