webpackJsonp([44495949915592],{377:function(a,t){a.exports={data:{markdownRemark:{html:'<p><a href="https://www.codewars.com/dashboard">Codewars</a></p>\n<p><a href="https://gpcchs.slack.com/threads/">Slack</a></p>\n<p><a href="https://jestjs.io/docs/en/asynchronous.html">Jest asynchronous</a></p>\n<p><a href="https://willowtreeapps.com/ideas/best-practices-for-unit-testing-with-a-react-redux-approach">unit-testing-with-a-react-redux-approach</a></p>\n<p><a href="https://www.datchley.name/es6-promises/">ES6 Promises</a></p>\n<p><a href="https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9">ES6 Async/Await</a></p>\n<p><a href="https://javascript.info/regexp-introduction">regexp</a></p>\n<p><a href="https://lodash.com/">lodash</a></p>\n<p><a href="https://lodash.com/docs/4.17.10">lodash documentation</a></p>\n<p><a href="https://en.wikipedia.org/wiki/Lodash">lodash wiki</a></p>\n<p><a href="https://github.com/lodash/lodash/wiki/FP-Guide">lodash-fp documentation</a></p>\n<p><a href="https://blog.codeminer42.com/functional-programming-with-lodash-fp-8fe0619b3024">Functional programming with lodash-fp</a></p>\n<p><a href="https://github.com/toddmotto/public-apis/blob/master/README.md">Public REST APIs</a></p>\n<p><a href="https://github.com/angular/angular-cli">Angular CLI</a></p>\n<p><a href="https://d3js.org/">d3</a></p>\n<p><a href="https://www.smashingmagazine.com/2018/02/react-d3-ecosystem">Bringing Together React, D3, And Their Ecosystem</a></p>\n<p><a href="https://medium.com/front-end-hacking/if-and-when-to-use-d3-js-with-react-639a651c6257">if-and-when-to-use-d3-js-with-react</a></p>\n<p><a href="https://hackernoon.com/how-and-why-to-use-d3-with-react-d239eb1ea274">How (and why) to use D3 with React</a></p>\n<p><a href="https://github.com/larkintuckerllc/hello-d3/tree/master/react-d3-introduction">react-d3-introduction</a></p>\n<p><a href="https://github.com/alanbuchanan/redux-form-course">Redux Form Course</a></p>',frontmatter:{title:"Bookmarks",date:"July 23, 2018",path:"/bookmarks",tags:["bookmarks"],excerpt:"Some bookmarks"}}},pathContext:{prev:{html:'<h3>General documentation</h3>\n<p><a href="https://facebook.github.io/react-native/docs/getting-started.html">Quickly get started (with create-react-native-app)</a></p>\n<p><a href="https://facebook.github.io/react-native/docs/tutorial.html">Keep the official docs in mind</a></p>\n<p><a href="https://github.com/react-community/create-react-native-app">The create-react-native-app Github repo</a></p>\n<h3>Styling</h3>\n<p><a href="https://github.com/vhpoet/react-native-styling-cheat-sheet">On react native supported style properties</a></p>\n<p><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">On flexbox in general (not specifically in React Native)</a></p>\n<p><a href="https://facebook.github.io/react-native/docs/images.html">More about images</a></p>\n<h3>Navigation</h3>\n<p><a href="https://github.com/wix/react-native-navigation">React Native Navigation</a></p>',id:"/home/nicolas/Documents/workshop/src/pages/2019-02-18-react-native/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2019-01-01T22:09:20.235Z",path:"/react-native",title:"React Native",excerpt:"Documentation on React Native",tags:["react native","mobile app"]}},next:{html:'<h3>Aggregations, buckets and metrics</h3>\n<p>Bucket by rating value:</p>\n<pre><code class="language-bash">curl -XGET \'127.0.0.1:9200/ratings/_search?size=0&#x26;pretty\' -d \'\n{\n    "aggs": {\n        "ratings": {\n            "terms": {\n                "field": "rating"\n            }\n        }\n    }\n}\'\n</code></pre>\n<p>Count only 5-start ratings:</p>\n<pre><code class="language-bash">curl -XGET \'127.0.0.1:9200/ratings/_search?size=0&#x26;pretty\' -d \'\n{\n    "query": {\n        "match": {\n            "rating": 5.0\n        }\n    },\n    "aggs": {\n        "ratings": {\n            "terms": {\n                "field": "rating"\n            }\n        }\n    }\n}\'\n</code></pre>\n<p>Average rating for Star Wars:</p>\n<pre><code class="language-bash">curl -XGET \'127.0.0.1:9200/ratings/_search?size=0&#x26;pretty\' -d \'\n{\n    "query": {\n        "match_phrase": {\n            "title": "Star Wars Episode IV"\n        }\n    },\n    "aggs": {\n        "avg_rating": {\n            "avg": {\n                "field": "rating"\n            }\n        }\n    }\n}\'\n</code></pre>\n<h3>Histograms</h3>\n<p>Display ratings by 1.0-rating intervals</p>\n<pre><code class="language-bash">curl -XGET \'127.0.0.1:9200/ratings/_search?size=0&#x26;pretty\' -d \'\n{\n    "aggs": {\n        "whole_rating": {\n            "histogram": {\n                "field": "rating",\n                "interval": 1.0\n            }\n        }\n    }\n}\'\n</code></pre>',id:"/home/nicolas/Documents/workshop/src/pages/2020-08-29-ELK-3/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-08-29T22:47:32.235Z",path:"/elk-searching",title:"Aggregations",excerpt:"",tags:["Elastic Search","aggregations"]}}}}}});
//# sourceMappingURL=path---bookmarks-ea82b7ed38318070fa34.js.map