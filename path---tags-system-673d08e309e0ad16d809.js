webpackJsonp([0xee891a66278f],{542:function(e,n){e.exports={pathContext:{posts:[{html:'<h3>System parameters</h3>\n<p>Elasticsearch version and more basic parameters:</p>\n<pre><code class="language-bash">curl -XGET https://localhost:9200 -u admin:admin --insecure\n</code></pre>\n<p>Information on nodes:</p>\n<pre><code class="language-bash">curl -XGET https://localhost:9200/_cat/nodes?v -u admin:admin --insecure\n</code></pre>\n<p>Integrated plugins:</p>\n<pre><code class="language-bash">curl -XGET https://localhost:9200/_cat/plugins?v -u admin:admin --insecure\n</code></pre>\n<p>Information on authentication:</p>\n<pre><code class="language-bash">curl -XGET https://localhost:9200/_opendistro/_security/authinfo -u admin:admin --insecure\n</code></pre>\n<p>Information on cluster:</p>\n<pre><code class="language-http">http://localhost:9200/_cluster/settings?include_defaults=true\n</code></pre>\n<p>Indices:</p>\n<pre><code class="language-bash">curl -XGET https://localhost:9200/_cat/indices -u admin:admin --insecure\n</code></pre>\n<h3>Cloning an index from dev tools console:</h3>\n<pre><code>POST _reindex\n{\n  "source": {\n    "index": "portefeuille"\n  },\n  "dest": {\n    "index": "portefeuille_test_1"\n  }\n}\n</code></pre>\n<h3>Creating a sample index from dev tools console:</h3>\n<pre><code>DELETE /bankdata\n</code></pre>\n<pre><code>PUT /bankdata\nPOST /bankdata/1\n{ "age": 42, "balance": 12000 }\nPOST /bankdata/2\n{ "age": 28, "balance": 7000 }\nPOST /bankdata/3\n{ "age": 51, "balance": 2300 }\nPOST /bankdata/4\n{ "age": 15, "balance": 450 }\nPOST /bankdata/5\n{ "age": 33 }\nPOST /bankdata/6\n{ "age": 32 }\nPOST /bankdata/7\n{ "age": 27 }\nPOST /bankdata/8\n{ "age": 79 }\nPOST /bankdata/9\n{ "age": 43, balance: null }\n</code></pre>\n<pre><code>GET /bankdata\n</code></pre>\n<pre><code>GET /bankdata/_search\n{\n    "query": {\n        "match_all": {}\n    }\n}\n</code></pre>\n<h3>Updating a given field in an index</h3>\n<pre><code>POST lanturlu_portefeuille/_update_by_query\n{\n  "script": {\n    "lang": "painless",\n    "source": """\n   try {\n        String fieldName = \'nom_conseille_pv\';\n        String value = ctx._source[fieldName];\n        ctx._source[fieldName] = value.replace(" ","_");\n      }\n      catch(Exception e) {\n      }\n    """\n  }\n}\n</code></pre>\n<h3>Template for indexing a field as a geo_shape</h3>\n<pre><code>PUT _template/geotemplate_geoshape_dpt\n{ "index_patterns": [\n  "index_pattern_title"\n  ],\n  "settings": {},\n    "mappings": {\n      "properties": {\n        "wkt" :{\n          "type": "geo_shape"\n        }\n      }\n    },\n    "aliases": {}\n}\n</code></pre>\n<h3>Painless language scripts</h3>\n<pre><code>(((ctx?._source["MY_PARAMETER"]?:0)?:0)/((ctx?._source["OtherVariable"]?:1)?:1)?:1)\n</code></pre>',id:"/home/nicolas/projects/workshop/src/pages/2020-12-03-ELK-4/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-12-03T22:01:12.451Z",path:"/elk-useful-queries",title:"Useful Queries",excerpt:"",tags:["Elastic Search","queries","environment variables","system"]}}],tagName:"system"}}}});
//# sourceMappingURL=path---tags-system-673d08e309e0ad16d809.js.map