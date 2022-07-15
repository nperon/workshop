webpackJsonp([27451989507627],{488:function(e,n){e.exports={pathContext:{posts:[{html:'<h3>Query Lite alias URI Search</h3>\n<pre><code class="language-bash">curl -XGET "127.0.0.1:9200/movies/_search?q=title:star&#x26;pretty"\n</code></pre>\n<pre><code class="language-bash">curl -XGET "127.0.0.1:9200/movies/_search?q=+year>2010+title:trek&#x26;pretty"\n</code></pre>\n<h3>JSON Search</h3>\n<p>Some types of filters</p>\n<p>Term: filter by exact values\n{"term": {"year": 2014}}</p>\n<p>Terms: match if any exact values in a list match\n{"terms": {"genre": ["Sci-Fi", "Adventure"] } }</p>\n<p>Range: find numbers or dates in a given range (gt, gte, lt, lte)\n{"range": {"year": {"gte": 2010}}}</p>\n<p>Exists: find documents where a field exists\n{"exists": {"field": "tags"}}</p>\n<p>Missing: find documents where a field is missing\n{"missing": {"field": "tags"}}</p>\n<p>Bool: combine filters with boolean logic (must, must_not, should)</p>\n<p>Some types of Queries</p>\n<p>Match<em>all: returns all documents and is the default. Normally used with a filter.\n{"match</em>all": {}}</p>\n<p>Match: searches analyzed results, such as full text search.\n{"match": {"title": "star"}}</p>\n<p>Multi-match: run the same query on multiple fields.\n{"multi-match": {"query":"star", "fields": ["title", "synopsis"]}}</p>\n<p>Bool: works like a bool filter, but results are scored by relevance.</p>\n<p>Syntax:\nQueries are wrapped in a "query": { } block.\nFilters are wrapped in a "filter": { } block.</p>\n<p>You can combine filters inside queries, or queries inside filters too:</p>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d\'\n{\n    "query": {\n        "bool": {\n            "must": {"term": {"title": "trek"}},\n            "filter": {"range": {"year": {"gte": 2010}}}\n        }\n    }\n}\'\n</code></pre>\n<p>Example of a match query: </p>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d\'\n{\n    "query": {\n        "match": {\n            "title": "star"\n        }\n    }\n}\'\n</code></pre>\n<p>Example of a bool query: </p>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d\'\n{\n    "query": {\n        "bool": {\n            "must": {"term": {"title": "trek"}},\n            "filter": {"range": {"year": {"gte": 2010}}}\n        }\n    }\n}\'\n</code></pre>\n<p>Another example:</p>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d\'\n{\n    "query": {\n        "bool": {\n            "must": {"match_phrase": {"title": "Star Wars"}},\n            "filter": {"range": {"year": {"gte": 1980}}}\n        }\n    }\n}\'\n</code></pre>\n<h3>Phrase matching</h3>\n<p>Must find all terms, in the right order: </p>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "match_phrase": {\n            "title": "star wars"\n        }\n    }\n}\'\n</code></pre>\n<p>Assume order matters, but you\'re OK with some words being in between the terms. In that case use slop:</p>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "match_phrase": {\n            "title": {"query": "star beyond", "slop": 1}\n        }\n    }\n}\'\n</code></pre>\n<p>The slop represents how far you\'re willing to let a term move to satisfy a phrase (in either direction!).</p>\n<h3>Pagination</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "from": 2,\n    "size": 2,\n    "query": {"match": {"genre": "Sci-Fi"}}\n}\'\n</code></pre>\n<h3>Sorting</h3>\n<h3>More with filters</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "bool": {\n            "must": {"match": {"genre": "Sci-Fi"}},\n            "must_not": {"match": {"title": "trek"}},\n            "filter": {"range": {"year": {"gte": 2010, "lt": 2015}}}\n        }\n    }\n}\'\n</code></pre>\n<h3>Fuzzy queries</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "fuzzy": {\n            "title": {"value": "intersteller", "fuzziness": 1}\n        }\n    }\n}\'\n</code></pre>\n<h3>Partial matching</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "prefix": {\n            "year": "201"\n        }\n    }\n}\'\n</code></pre>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "wildcard": {\n            "year": "1*"\n        }\n    }\n}\'\n</code></pre>\n<pre><code class="language-bash">curl -XDELETE 127.0.0.1:9200/movies\n\ncurl -XPUT 127.0.0.1:9200/movies -d \'\n{\n    "mappings": {\n        "properties": {\n            "year": {\n                "type": "text"\n            }\n        }\n    }\n}\'\n\ncurl -XPUT 127.0.0.1:9200/_bulk --data-binary @movies.json\n</code></pre>\n<h3>Search as you type</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "match_phrase_prefix": {\n            "title": {\n                "query": "star tr",\n                "slop": 10\n            }\n        }\n    }\n}\'\n</code></pre>',id:"/home/nicolas/projects/workshop/src/pages/2020-08-29-ELK-2/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-08-29T22:47:32.235Z",path:"/elk-searching",title:"Searching with Elasticsearch",excerpt:"",tags:["Elastic Search","searching"]}}],tagName:"searching"}}}});
//# sourceMappingURL=path---tags-searching-51a1eb971eaef0a4d65d.js.map