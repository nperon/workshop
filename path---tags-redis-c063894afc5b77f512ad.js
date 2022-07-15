webpackJsonp([0x7e0321569d7b],{481:function(e,s){e.exports={pathContext:{posts:[{html:'<h2>Links</h2>\n<ul>\n<li><a href="https://cheatography.com/tasjaevan/cheat-sheets/redis/">Cheat sheet</a>  </li>\n<li><a href="https://cheatography.com/tasjaevan/cheat-sheets/redis/">Redis commands</a></li>\n</ul>\n<h2>Redis configuration</h2>\n<p><a href="https://redis.io/topics/notifications#configuration">Documentation on configuration</a></p>\n<p>Command to get the expired events from Redis:</p>\n<pre><code>config set notify-keyspace-events AKE\n</code></pre>\n<h2>Redis cli commands</h2>\n<pre><code>set user:1:name 1\nset user:2:name 2\nget user:1:name\nkeys user*\nscan 0\ndel user:1:name 1\nget user:1:name\nflushddb\nset a b ex 10\nget a\nget a\nttl a\nexpire a 60\nset c d exat 1624737950\n</code></pre>\n<h3>xx nx</h3>\n<pre><code>set e f xx\nget e\nset e f nx\nget e\nset e g nx\nget e\n</code></pre>\n<h3>incr</h3>\n<pre><code>set a 1\nincr a\nget a\nflushdb\nincr bb\nkeys *\nget bb\ndecr bb\nget b\nflushdb\nset a 1.02\nget a\nincrbyfloat a .3\nget a\nset sam 100\nincr sam\nincrby sam 20\nincrby sam 20\ndecrby sam 5\n</code></pre>\n<pre><code>set user:1:lives 3 ex 1800\nttl user:1:lives\ndecr user:1:lives\ndecr user:1:lives\ndecr user:1:lives\nflushdb\n</code></pre>\n<h3>Hash</h3>\n<pre><code>hset user:1 name sam age 10 city atlanta\nkeys *\ntype user:1\nhget user:1 name\nhget user:1 age\nhget user:1 city\nhgetall user:1\nhset user:2 birthYear 2020 status active\nexpire user:2 10\nttl user:2*\nkeys *\nhkeys user:1\nhvals user:1\nhexists user:1 status\nhexists user:1 age\nhgetall user:1\nhdel user:1 age\ndel user:1\nkeys *\n</code></pre>\n<h3>List &#x26; Queue</h3>\n<pre><code>rpush users sam mike jake\nkeys *\ntype users\nllen users\nlrange users 0 -1\nlrange users 0 1\nlpop users\nllen users\nrpush 1 2 3 4 5 6\nllen users\nkeys *\nrpush 1 2 3 4 5 6\nlpop users\nlpop users 2\nlrange users 0 -1\n</code></pre>\n<h3>List as lifo stack</h3>\n<pre><code>flushdb\nrpush users 1 2 3 4 5 6\nllen users\nlrange users 0 -1\nrpop users\nrpop users\nrpop users\nllen users\nlrange users 0 -1\nlpush users 4\nkeys *\nlpop users\nlpop users\nlpop users\nkeys *\nllen users\nlpop users\nkeys *\n</code></pre>\n<h3>Set</h3>\n<p>A redis set is an unordered collection of unique items (string)\nsimilar to a Java set.</p>\n<h4>Use cases</h4>\n<ul>\n<li>maintain currently logged in users  </li>\n<li>maintain blacklisted IP address / users  </li>\n<li>set intersection  </li>\n</ul>\n<h4>Basic commands</h4>\n<pre><code>sadd users 1 2 3\nsadd users 4\nsadd users 5\nscard users\nsmembers users\nsadd users 4.5\nsadd users 10\nsmembers users\nsadd users 1\nsmembers users\nsismember users 5\nsismember users 100\nsrem users 100\nsrem users 5\nsismember users 5\nsmembers users\nspop users\nspop users\nscard users\n</code></pre>\n<h4>Set intersection and union</h4>\n<pre><code>flushdb\nsadd skill:java 1 2 3 4\nsadd skill:js 2 3 4\nsadd skill:aws 4 5 6\nsinter skill:java skill:js skill:aws\nsunion skill:java skill js\nsadd candidate:criminal 4 5 6\nsdiff skill:java candidate:criminal\n</code></pre>\n<pre><code>sinterstore java-js skill:java skill:js\nkeys *\nscard java-js\nsmembers java-js\n</code></pre>',id:"/home/nicolas/projects/workshop/src/pages/2021-09-11-redis/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2021-09-11T18:38:00.451Z",path:"/redis",title:"Redis",excerpt:"",tags:["Redis"]}}],tagName:"Redis"}}}});
//# sourceMappingURL=path---tags-redis-c063894afc5b77f512ad.js.map