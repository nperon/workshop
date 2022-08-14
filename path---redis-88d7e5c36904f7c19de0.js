webpackJsonp([0x8141c72fac19],{443:function(e,s){e.exports={data:{markdownRemark:{html:'<h2>Links</h2>\n<ul>\n<li><a href="https://cheatography.com/tasjaevan/cheat-sheets/redis/">Cheat sheet</a>  </li>\n<li><a href="https://cheatography.com/tasjaevan/cheat-sheets/redis/">Redis commands</a></li>\n</ul>\n<h2>Redis configuration</h2>\n<p><a href="https://redis.io/topics/notifications#configuration">Documentation on configuration</a></p>\n<p>Command to get the expired events from Redis:</p>\n<pre><code>config set notify-keyspace-events AKE\n</code></pre>\n<h2>Redis cli commands</h2>\n<pre><code>set user:1:name 1\nset user:2:name 2\nget user:1:name\nkeys user*\nscan 0\ndel user:1:name 1\nget user:1:name\nflushddb\nset a b ex 10\nget a\nget a\nttl a\nexpire a 60\nset c d exat 1624737950\n</code></pre>\n<h3>xx nx</h3>\n<pre><code>set e f xx\nget e\nset e f nx\nget e\nset e g nx\nget e\n</code></pre>\n<h3>incr</h3>\n<pre><code>set a 1\nincr a\nget a\nflushdb\nincr bb\nkeys *\nget bb\ndecr bb\nget b\nflushdb\nset a 1.02\nget a\nincrbyfloat a .3\nget a\nset sam 100\nincr sam\nincrby sam 20\nincrby sam 20\ndecrby sam 5\n</code></pre>\n<pre><code>set user:1:lives 3 ex 1800\nttl user:1:lives\ndecr user:1:lives\ndecr user:1:lives\ndecr user:1:lives\nflushdb\n</code></pre>\n<h3>Hash</h3>\n<pre><code>hset user:1 name sam age 10 city atlanta\nkeys *\ntype user:1\nhget user:1 name\nhget user:1 age\nhget user:1 city\nhgetall user:1\nhset user:2 birthYear 2020 status active\nexpire user:2 10\nttl user:2*\nkeys *\nhkeys user:1\nhvals user:1\nhexists user:1 status\nhexists user:1 age\nhgetall user:1\nhdel user:1 age\ndel user:1\nkeys *\n</code></pre>\n<h3>List &#x26; Queue</h3>\n<pre><code>rpush users sam mike jake\nkeys *\ntype users\nllen users\nlrange users 0 -1\nlrange users 0 1\nlpop users\nllen users\nrpush 1 2 3 4 5 6\nllen users\nkeys *\nrpush 1 2 3 4 5 6\nlpop users\nlpop users 2\nlrange users 0 -1\n</code></pre>\n<h3>List as lifo stack</h3>\n<pre><code>flushdb\nrpush users 1 2 3 4 5 6\nllen users\nlrange users 0 -1\nrpop users\nrpop users\nrpop users\nllen users\nlrange users 0 -1\nlpush users 4\nkeys *\nlpop users\nlpop users\nlpop users\nkeys *\nllen users\nlpop users\nkeys *\n</code></pre>\n<h3>Set</h3>\n<p>A redis set is an unordered collection of unique items (string)\nsimilar to a Java set.</p>\n<h4>Use cases</h4>\n<ul>\n<li>maintain currently logged in users  </li>\n<li>maintain blacklisted IP address / users  </li>\n<li>set intersection  </li>\n</ul>\n<h4>Basic commands</h4>\n<pre><code>sadd users 1 2 3\nsadd users 4\nsadd users 5\nscard users\nsmembers users\nsadd users 4.5\nsadd users 10\nsmembers users\nsadd users 1\nsmembers users\nsismember users 5\nsismember users 100\nsrem users 100\nsrem users 5\nsismember users 5\nsmembers users\nspop users\nspop users\nscard users\n</code></pre>\n<h4>Set intersection and union</h4>\n<pre><code>flushdb\nsadd skill:java 1 2 3 4\nsadd skill:js 2 3 4\nsadd skill:aws 4 5 6\nsinter skill:java skill:js skill:aws\nsunion skill:java skill js\nsadd candidate:criminal 4 5 6\nsdiff skill:java candidate:criminal\n</code></pre>\n<pre><code>sinterstore java-js skill:java skill:js\nkeys *\nscard java-js\nsmembers java-js\n</code></pre>',frontmatter:{title:"Redis",date:"September 11, 2021",path:"/redis",tags:["Redis"],excerpt:""}}},pathContext:{prev:{html:'<h3>Miscelaneous bash tips</h3>\n<p>The following command displays the status code from the last command:</p>\n<pre><code class="language-bash">echo $?\n</code></pre>\n<h3>vi</h3>\n<p>Vi command for eliminating all occurences of colon ":" is the following:</p>\n<pre><code>:1,$s/://g\n</code></pre>\n<p>Here is the vi command for replacing all occurences of "old" with "new":</p>\n<pre><code>:1,$s/old/new/g\n</code></pre>\n<p>Vi command for searching string "xyz":</p>\n<pre><code>/xyz\n</code></pre>\n<h3>find</h3>\n<p>File search:</p>\n<pre><code class="language-bash">find ./fvsa/ -name "pvsve*"\n</code></pre>\n<h3>grep</h3>\n<p>Search string \'yourDir\' in dir yourdir:</p>\n<pre><code class="language-bash">grep -nr \'yourString*\' yourdir\n</code></pre>\n<h3>sed</h3>\n<p>Sed is a stream editor for filtering and transforming text.</p>\n<pre><code class="language-bash">sed -i \'s/word1/word2/g\' inputfile\n</code></pre>\n<p>The <code>-i</code> option requests editing in place.\n<code>s</code> stands for substitute. <code>g</code> stands for global replacement.</p>\n<h3>Memory usage with watch</h3>\n<pre><code class="language-bash">watch -n 5 free -m\n</code></pre>\n<h3>Modify filenames with rename</h3>\n<p>Delete 4 first characters in all file names in dir:</p>\n<pre><code class="language-bash">rename \'s/.{4}(.*)/$1/\' *\n</code></pre>\n<p>Delete 5 last characters in all file names in dir:</p>\n<pre><code class="language-bash">rename \'s/(.*).{5}/$1/\' *\n</code></pre>\n<h3>wc</h3>\n<p>Display total number of files in \'folder\':</p>\n<pre><code class="language-bash">ls folder | wc -l\n</code></pre>\n<h3>Disk usage</h3>\n<pre><code class="language-bash">sudo ncdu -rx /\n</code></pre>\n<pre><code class="language-bash">sudo du -shc /*\n</code></pre>\n<p>Displaying size occupied by Documents directory:</p>\n<pre><code class="language-bash">cd ~\nsudo du -sh Documents\n</code></pre>\n<h3>Managing JDKs on Debian</h3>\n<pre><code class="language-bash">update-java-alternatives -l\n</code></pre>\n<pre><code class="language-bash">sudo update-java-alternatives -s java-1.8.0-openjdk-amd64\n</code></pre>\n<p>Or in a more interactive way:</p>\n<pre><code class="language-bash">update-alternatives --config java\n</code></pre>\n<h3>Managing screens</h3>\n<pre><code class="language-bash">xrandr\n</code></pre>\n<pre><code class="language-bash">xrandr --addmode HDMI-1 2560x1080\n</code></pre>\n<h3>Serving static content using http-server</h3>\n<p>The following command starts http-server and serves all of the static\ncontent (e.g. geojson files) available in the current directory:</p>\n<pre><code class="language-bash">http-server --cors=\'*\' -p 5252\n</code></pre>\n<h3>Generating random passwords</h3>\n<p>Install pwgen package and run the following command to\nget a randow password with 12 characters including one special\ncharacter at least:</p>\n<pre><code class="language-bash">pwgen 12 1 -y\n</code></pre>\n<h3>Managing permissions</h3>\n<p>Command to state that owner and group of directory mydir have full permission\nto access the directory and its content such as read, write and execute whereas\nothers will have read and execute permission:</p>\n<pre><code class="language-bash">chmod -R 775 mydir\n</code></pre>\n<h3>Probing system on service management tool</h3>\n<p>The following command can be use to check whether the service\nmanagement tool is <code>service</code> or <code>systemctl</code>:</p>\n<pre><code class="language-bash">ps --no-headers -o comm 1\n</code></pre>\n<p>A <code>systemd</code> result indicates that systemd (systemctl) is the service management tool, while\n<code>init</code> indicates that it is System V Init (service).</p>',id:"/home/nicolas/projects/workshop/src/pages/2020-10-11-linux-utils/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-10-11T22:47:32.235Z",path:"/linux-utils",title:"Linux Utils",excerpt:"",tags:["Linux","utils","bash","vi","find","grep","rename"]}},next:null}}}});
//# sourceMappingURL=path---redis-88d7e5c36904f7c19de0.js.map