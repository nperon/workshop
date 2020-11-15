webpackJsonp([0x60bdd278217a],{390:function(n,a){n.exports={pathContext:{posts:[{html:'<h3>Aggregations, buckets and metrics</h3>\n<p>Bucket by rating value:</p>\n<pre><code class="language-bash">curl -XGET \'127.0.0.1:9200/ratings/_search?size=0&#x26;pretty\' -d \'\n{\n    "aggs": {\n        "ratings": {\n            "terms": {\n                "field": "rating"\n            }\n        }\n    }\n}\'\n</code></pre>\n<p>Count only 5-start ratings:</p>\n<pre><code class="language-bash">curl -XGET \'127.0.0.1:9200/ratings/_search?size=0&#x26;pretty\' -d \'\n{\n    "query": {\n        "match": {\n            "rating": 5.0\n        }\n    },\n    "aggs": {\n        "ratings": {\n            "terms": {\n                "field": "rating"\n            }\n        }\n    }\n}\'\n</code></pre>\n<p>Average rating for Star Wars:</p>\n<pre><code class="language-bash">curl -XGET \'127.0.0.1:9200/ratings/_search?size=0&#x26;pretty\' -d \'\n{\n    "query": {\n        "match_phrase": {\n            "title": "Star Wars Episode IV"\n        }\n    },\n    "aggs": {\n        "avg_rating": {\n            "avg": {\n                "field": "rating"\n            }\n        }\n    }\n}\'\n</code></pre>\n<h3>Histograms</h3>\n<p>Display ratings by 1.0-rating intervals</p>\n<pre><code class="language-bash">curl -XGET \'127.0.0.1:9200/ratings/_search?size=0&#x26;pretty\' -d \'\n{\n    "aggs": {\n        "whole_rating": {\n            "histogram": {\n                "field": "rating",\n                "interval": 1.0\n            }\n        }\n    }\n}\'\n</code></pre>',id:"/home/nicolas/Documents/workshop/src/pages/2020-08-29-ELK-3/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-08-29T22:47:32.235Z",path:"/elk-searching",title:"Aggregations",excerpt:"",tags:["Elastic Search","aggregations"]}}],tagName:"aggregations"}}}});
//# sourceMappingURL=path---tags-aggregations-f9f37321e6281c496bc4.js.map