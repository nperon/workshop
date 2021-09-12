webpackJsonp([0xf85477f31617],{444:function(e,n){e.exports={pathContext:{posts:[{html:'<h3>Starting</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/_cat/indices\n</code></pre>\n<pre><code class="language-bash">curl -XDELETE 127.0.0.1:9200/movies\n</code></pre>\n<h3>Create an index called movies with a mapping</h3>\n<pre><code class="language-bash">curl -XPUT 127.0.0.1:9200/movies -d \'\n{\n    "mappings": {\n        "properties": {\n            "year": {\n                "type": "date"\n            }\n        }\n    }\n}\'\n</code></pre>\n<h3>Import a document into our movies index</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_mapping\n</code></pre>\n<h3>Post a new document into our movies index</h3>\n<pre><code class="language-bash">curl -XPOST 127.0.0.1:9200/movies/_doc/109487 -d \'\n{\n    "genre" : ["IMAX", "Sci-Fi"],\n    "title": "Interstellar",\n    "year": 2014\n}\'\n</code></pre>\n<h3>Perform search</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty\n</code></pre>\n<h3>Insert a bunch of movies</h3>\n<pre><code class="language-bash">curl -XPUT 127.0.0.1:9200/_bulk -d \'\n{ "create" : { "_index" : "movies", "_id" : "135569" } }\n{ "id": "135569", "title" : "Star Trek Beyond", "year":2016 , "genre":["Action", "Adventure", "Sci-Fi"] }\n{ "create" : { "_index" : "movies", "_id" : "122886" } }\n{ "id": "122886", "title" : "Star Wars: Episode VII - The Force Awakens", "year":2015 , "genre":["Action", "Adventure", "Fantasy", "Sci-Fi", "IMAX"] }\n{ "create" : { "_index" : "movies", "_id" : "109487" } }\n{ "id": "109487", "title" : "Interstellar", "year":2014 , "genre":["Sci-Fi", "IMAX"] }\n{ "create" : { "_index" : "movies", "_id" : "58559" } }\n{ "id": "58559", "title" : "Dark Knight, The", "year":2008 , "genre":["Action", "Crime", "Drama", "IMAX"] }\n{ "create" : { "_index" : "movies", "_id" : "1924" } }\n{ "id": "1924", "title" : "Plan 9 from Outer Space", "year":1959 , "genre":["Horror", "Sci-Fi"] }\n\'\n</code></pre>\n<h3>Updating data</h3>\n<pre><code class="language-bash">curl -XPUT 127.0.0.1:9200/movies/_doc/109487/?pretty -d \'\n{\n    "genres": ["IMAX", "Sci-Fi"],\n    "title": "interstellar foo",\n    "year": 2014\n}\n\'\n</code></pre>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_doc/109487?pretty\n</code></pre>\n<pre><code class="language-bash">curl -XPOST 127.0.0.1:9200/movies/_doc/109487/_update -d \'\n{\n    "doc": {\n        "title": "Interstellar"\n    }\n}\n\'\n</code></pre>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_doc/109487?pretty\n</code></pre>\n<h3>Deleting documents</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?q=Dark\n</code></pre>\n<pre><code class="language-bash">curl -XDELETE 127.0.0.1:9200/movies/_doc/58559?pretty\n</code></pre>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?q=Dark\n</code></pre>\n<h3>Using analyzers and tokenizers for controlling full-text search</h3>\n<p>Sometimes text fields should be exact-match. In that case use keyword mapping instead of text.</p>\n<p>Search on analyzed text fields will return anything remotely relevant. Depending on the analyzer, results will be case-insensitive, stemmed, stopwords removed, synonyms applied, etc. Searches with multiple terms need not match them all.</p>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "match": {\n            "title": "Star Trek"\n        }\n    }   \n}\n\'\n</code></pre>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "match_phrase": {\n            "genre": "sci"\n        }\n    }   \n}\n\'\n</code></pre>\n<p>Blow away the entire index and redefine it. </p>\n<pre><code class="language-bash">curl -XDELETE 127.0.0.1:9200/movies\n</code></pre>\n<pre><code class="language-bash">curl -XPUT 127.0.0.1:9200/movies -d \'\n{\n    "mappings": {\n        "properties": {\n            "id": {"type": "integer"},\n            "year": {"type": "date"},\n            "genre": {"type": "keyword"},\n            "title": {"type": "text", "analyzer": "english"}\n        }\n    }\n}\'\n</code></pre>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_mapping\n</code></pre>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "match_phrase": {\n            "genre": "Sci-Fi"\n        }\n    }   \n}\n\'\n</code></pre>\n<h3>Defining a mapping with a parent/child relationship in Elastic Search</h3>\n<pre><code class="language-bash">curl -XPUT 127.0.0.1:9200/series -d \'\n{\n    "mappings": {\n        "properties": {\n            "film_to_franchise": {\n                "type": "join",\n                "relations": {"franchise": "film"}\n            }       \n        }\n    }\n}\'\n</code></pre>\n<pre><code class="language-bash">curl -XPUT 127.0.0.1:9200/_bulk?pretty --data-binary @series.json\n</code></pre>\n<p>Here content in a file called series.json like the following is involved:</p>\n<pre><code class="language-json">{ "create" : { "_index" : "series", "_id" : "1", "routing" : 1} }\n{ "id": "1", "film_to_franchise": {"name": "franchise"}, "title" : "Star Wars" }\n{ "create" : { "_index" : "series", "_id" : "260", "routing" : 1} }\n{ "id": "260", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode IV - A New Hope", "year":"1977" , "genre":["Action", "Adventure", "Sci-Fi"] }\n{ "create" : { "_index" : "series", "_id" : "1196", "routing" : 1} }\n{ "id": "1196", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode V - The Empire Strikes Back", "year":"1980" , "genre":["Action", "Adventure", "Sci-Fi"] }\n{ "create" : { "_index" : "series", "_id" : "1210", "routing" : 1} }\n{ "id": "1210", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode VI - Return of the Jedi", "year":"1983" , "genre":["Action", "Adventure", "Sci-Fi"] }\n{ "create" : { "_index" : "series", "_id" : "2628", "routing" : 1} }\n{ "id": "2628", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode I - The Phantom Menace", "year":"1999" , "genre":["Action", "Adventure", "Sci-Fi"] }\n{ "create" : { "_index" : "series",  "_id" : "5378", "routing" : 1} }\n{ "id": "5378", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode II - Attack of the Clones", "year":"2002" , "genre":["Action", "Adventure", "Sci-Fi", "IMAX"] }\n{ "create" : { "_index" : "series", "_id" : "33493", "routing" : 1} }\n{ "id": "33493", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode III - Revenge of the Sith", "year":"2005" , "genre":["Action", "Adventure", "Sci-Fi"] }\n{ "create" : { "_index" : "series", "_id" : "122886", "routing" : 1} }\n{ "id": "122886", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode VII - The Force Awakens", "year":"2015" , "genre":["Action", "Adventure", "Fantasy", "Sci-Fi", "IMAX"] }\n</code></pre>\n<p>The following query will search for all films in the Star Wars franchise:</p>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/series/_search?pretty -d \'{\n    "query": {\n        "has_parent": {\n            "parent_type": "franchise",\n            "query": {\n                "match": {\n                    "title": "Star Wars"\n                }\n            }\n        }\n    }\n}\'\n</code></pre>\n<p>Here now is how to get a parent given the child:</p>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/series/_search?pretty -d \'{\n    "query": {\n        "has_child": {\n            "type": "film",\n            "query": {\n                "match": {\n                    "title": "The Force Awakens"\n                }\n            }\n        }\n    }\n}\'\n</code></pre>\n<h3>Flattened Datatype</h3>\n<p>Commands are given are url <a href="https://media.sundog-soft.com/es/flattened.txt">https://media.sundog-soft.com/es/flattened.txt</a>.</p>',id:"/home/nicolas/projects/workshop/src/pages/2020-08-28-ELK-1/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-08-28T00:39:17.235Z",path:"/elk-mapping",title:"Mapping and Indexing Data into Elastic Search",excerpt:"",tags:["Elastic Search","Logstash","mapping","indexing"]}}],tagName:"mapping"}}}});
//# sourceMappingURL=path---tags-mapping-e70079e7e0e2b87743c8.js.map