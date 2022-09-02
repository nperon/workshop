webpackJsonp([0xfb919dfbfe03],{441:function(e,n){e.exports={data:{markdownRemark:{html:'<h3>Miscelaneous bash tips</h3>\n<p>The following command displays the status code from the last command:</p>\n<pre><code class="language-bash">echo $?\n</code></pre>\n<p>In the following command, output of a echo command is directed to\nstandard input so that a second command viz more manages it like a file:</p>\n<pre><code class="language-bash">echo \'toto\' | more -\n</code></pre>\n<h3>tree</h3>\n<pre><code class="language-bash">tree --noreport .\n</code></pre>\n<h3>vi</h3>\n<p>Vi command for eliminating all occurences of colon ":" is the following:</p>\n<pre><code>:1,$s/://g\n</code></pre>\n<p>Here is the vi command for replacing all occurences of "old" with "new":</p>\n<pre><code>:1,$s/old/new/g\n</code></pre>\n<p>Vi command for searching string "xyz":</p>\n<pre><code>/xyz\n</code></pre>\n<h3>find</h3>\n<p>File search:</p>\n<pre><code class="language-bash">find ./fvsa/ -name "pvsve*"\n</code></pre>\n<h3>grep</h3>\n<p>Search string \'yourDir\' in dir yourdir:</p>\n<pre><code class="language-bash">grep -nr \'yourString*\' yourdir\n</code></pre>\n<h3>sed</h3>\n<p>Sed is a stream editor for filtering and transforming text.</p>\n<pre><code class="language-bash">sed -i \'s/word1/word2/g\' inputfile\n</code></pre>\n<p>The <code>-i</code> option requests editing in place.\n<code>s</code> stands for substitute. <code>g</code> stands for global replacement.</p>\n<h3>A few tips with watch:</h3>\n<p>Memory usage:</p>\n<pre><code class="language-bash">watch -n 5 free -m\n</code></pre>\n<p>Realtime clock in a term:</p>\n<pre><code class="language-bash">watch -n 1 date\n</code></pre>\n<h3>Modify filenames with rename</h3>\n<p>Delete 4 first characters in all file names in dir:</p>\n<pre><code class="language-bash">rename \'s/.{4}(.*)/$1/\' *\n</code></pre>\n<p>Delete 5 last characters in all file names in dir:</p>\n<pre><code class="language-bash">rename \'s/(.*).{5}/$1/\' *\n</code></pre>\n<h3>wc</h3>\n<p>Display total number of files in \'folder\':</p>\n<pre><code class="language-bash">ls folder | wc -l\n</code></pre>\n<h3>Disk usage</h3>\n<pre><code class="language-bash">sudo ncdu -rx /\n</code></pre>\n<pre><code class="language-bash">sudo du -shc /*\n</code></pre>\n<p>Displaying size occupied by Documents directory:</p>\n<pre><code class="language-bash">cd ~\nsudo du -sh Documents\n</code></pre>\n<h3>Managing JDKs on Debian</h3>\n<pre><code class="language-bash">update-java-alternatives -l\n</code></pre>\n<pre><code class="language-bash">sudo update-java-alternatives -s java-1.8.0-openjdk-amd64\n</code></pre>\n<p>Or in a more interactive way:</p>\n<pre><code class="language-bash">update-alternatives --config java\n</code></pre>\n<h3>Managing screens</h3>\n<pre><code class="language-bash">xrandr\n</code></pre>\n<pre><code class="language-bash">xrandr --addmode HDMI-1 2560x1080\n</code></pre>\n<h3>Serving static content using http-server</h3>\n<p>The following command starts http-server and serves all of the static\ncontent (e.g. geojson files) available in the current directory:</p>\n<pre><code class="language-bash">http-server --cors=\'*\' -p 5252\n</code></pre>\n<h3>Generating random passwords</h3>\n<p>Install pwgen package and run the following command to\nget a randow password with 12 characters including one special\ncharacter at least:</p>\n<pre><code class="language-bash">pwgen 12 1 -y\n</code></pre>\n<h3>Managing permissions</h3>\n<p>Command to state that owner and group of directory mydir have full permission\nto access the directory and its content such as read, write and execute whereas\nothers will have read and execute permission:</p>\n<pre><code class="language-bash">chmod -R 775 mydir\n</code></pre>\n<h3>Probing system on service management tool</h3>\n<p>The following command can be use to check whether the service\nmanagement tool is <code>service</code> or <code>systemctl</code>:</p>\n<pre><code class="language-bash">ps --no-headers -o comm 1\n</code></pre>\n<p>A <code>systemd</code> result indicates that systemd (systemctl) is the service management tool, while\n<code>init</code> indicates that it is System V Init (service).</p>\n<h3>Managing DNS</h3>\n<pre><code class="language-bash">sudo apt install bind9-host\n</code></pre>\n<pre><code class="language-bash">host -t NS google.com\n</code></pre>',frontmatter:{title:"Linux Utils",date:"October 11, 2020",path:"/linux-utils",tags:["Linux","utils","bash","vi","find","grep","rename"],excerpt:""}}},pathContext:{prev:{html:'<h3>Starting</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/_cat/indices\n</code></pre>\n<pre><code class="language-bash">curl -XDELETE 127.0.0.1:9200/movies\n</code></pre>\n<h3>Create an index called movies with a mapping</h3>\n<pre><code class="language-bash">curl -XPUT 127.0.0.1:9200/movies -d \'\n{\n    "mappings": {\n        "properties": {\n            "year": {\n                "type": "date"\n            }\n        }\n    }\n}\'\n</code></pre>\n<h3>Import a document into our movies index</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_mapping\n</code></pre>\n<h3>Post a new document into our movies index</h3>\n<pre><code class="language-bash">curl -XPOST 127.0.0.1:9200/movies/_doc/109487 -d \'\n{\n    "genre" : ["IMAX", "Sci-Fi"],\n    "title": "Interstellar",\n    "year": 2014\n}\'\n</code></pre>\n<h3>Perform search</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty\n</code></pre>\n<h3>Insert a bunch of movies</h3>\n<pre><code class="language-bash">curl -XPUT 127.0.0.1:9200/_bulk -d \'\n{ "create" : { "_index" : "movies", "_id" : "135569" } }\n{ "id": "135569", "title" : "Star Trek Beyond", "year":2016 , "genre":["Action", "Adventure", "Sci-Fi"] }\n{ "create" : { "_index" : "movies", "_id" : "122886" } }\n{ "id": "122886", "title" : "Star Wars: Episode VII - The Force Awakens", "year":2015 , "genre":["Action", "Adventure", "Fantasy", "Sci-Fi", "IMAX"] }\n{ "create" : { "_index" : "movies", "_id" : "109487" } }\n{ "id": "109487", "title" : "Interstellar", "year":2014 , "genre":["Sci-Fi", "IMAX"] }\n{ "create" : { "_index" : "movies", "_id" : "58559" } }\n{ "id": "58559", "title" : "Dark Knight, The", "year":2008 , "genre":["Action", "Crime", "Drama", "IMAX"] }\n{ "create" : { "_index" : "movies", "_id" : "1924" } }\n{ "id": "1924", "title" : "Plan 9 from Outer Space", "year":1959 , "genre":["Horror", "Sci-Fi"] }\n\'\n</code></pre>\n<h3>Updating data</h3>\n<pre><code class="language-bash">curl -XPUT 127.0.0.1:9200/movies/_doc/109487/?pretty -d \'\n{\n    "genres": ["IMAX", "Sci-Fi"],\n    "title": "interstellar foo",\n    "year": 2014\n}\n\'\n</code></pre>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_doc/109487?pretty\n</code></pre>\n<pre><code class="language-bash">curl -XPOST 127.0.0.1:9200/movies/_doc/109487/_update -d \'\n{\n    "doc": {\n        "title": "Interstellar"\n    }\n}\n\'\n</code></pre>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_doc/109487?pretty\n</code></pre>\n<h3>Deleting documents</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?q=Dark\n</code></pre>\n<pre><code class="language-bash">curl -XDELETE 127.0.0.1:9200/movies/_doc/58559?pretty\n</code></pre>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?q=Dark\n</code></pre>\n<h3>Using analyzers and tokenizers for controlling full-text search</h3>\n<p>Sometimes text fields should be exact-match. In that case use keyword mapping instead of text.</p>\n<p>Search on analyzed text fields will return anything remotely relevant. Depending on the analyzer, results will be case-insensitive, stemmed, stopwords removed, synonyms applied, etc. Searches with multiple terms need not match them all.</p>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "match": {\n            "title": "Star Trek"\n        }\n    }   \n}\n\'\n</code></pre>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "match_phrase": {\n            "genre": "sci"\n        }\n    }   \n}\n\'\n</code></pre>\n<p>Blow away the entire index and redefine it. </p>\n<pre><code class="language-bash">curl -XDELETE 127.0.0.1:9200/movies\n</code></pre>\n<pre><code class="language-bash">curl -XPUT 127.0.0.1:9200/movies -d \'\n{\n    "mappings": {\n        "properties": {\n            "id": {"type": "integer"},\n            "year": {"type": "date"},\n            "genre": {"type": "keyword"},\n            "title": {"type": "text", "analyzer": "english"}\n        }\n    }\n}\'\n</code></pre>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_mapping\n</code></pre>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "match_phrase": {\n            "genre": "Sci-Fi"\n        }\n    }   \n}\n\'\n</code></pre>\n<h3>Defining a mapping with a parent/child relationship in Elastic Search</h3>\n<pre><code class="language-bash">curl -XPUT 127.0.0.1:9200/series -d \'\n{\n    "mappings": {\n        "properties": {\n            "film_to_franchise": {\n                "type": "join",\n                "relations": {"franchise": "film"}\n            }       \n        }\n    }\n}\'\n</code></pre>\n<pre><code class="language-bash">curl -XPUT 127.0.0.1:9200/_bulk?pretty --data-binary @series.json\n</code></pre>\n<p>Here content in a file called series.json like the following is involved:</p>\n<pre><code class="language-json">{ "create" : { "_index" : "series", "_id" : "1", "routing" : 1} }\n{ "id": "1", "film_to_franchise": {"name": "franchise"}, "title" : "Star Wars" }\n{ "create" : { "_index" : "series", "_id" : "260", "routing" : 1} }\n{ "id": "260", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode IV - A New Hope", "year":"1977" , "genre":["Action", "Adventure", "Sci-Fi"] }\n{ "create" : { "_index" : "series", "_id" : "1196", "routing" : 1} }\n{ "id": "1196", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode V - The Empire Strikes Back", "year":"1980" , "genre":["Action", "Adventure", "Sci-Fi"] }\n{ "create" : { "_index" : "series", "_id" : "1210", "routing" : 1} }\n{ "id": "1210", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode VI - Return of the Jedi", "year":"1983" , "genre":["Action", "Adventure", "Sci-Fi"] }\n{ "create" : { "_index" : "series", "_id" : "2628", "routing" : 1} }\n{ "id": "2628", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode I - The Phantom Menace", "year":"1999" , "genre":["Action", "Adventure", "Sci-Fi"] }\n{ "create" : { "_index" : "series",  "_id" : "5378", "routing" : 1} }\n{ "id": "5378", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode II - Attack of the Clones", "year":"2002" , "genre":["Action", "Adventure", "Sci-Fi", "IMAX"] }\n{ "create" : { "_index" : "series", "_id" : "33493", "routing" : 1} }\n{ "id": "33493", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode III - Revenge of the Sith", "year":"2005" , "genre":["Action", "Adventure", "Sci-Fi"] }\n{ "create" : { "_index" : "series", "_id" : "122886", "routing" : 1} }\n{ "id": "122886", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode VII - The Force Awakens", "year":"2015" , "genre":["Action", "Adventure", "Fantasy", "Sci-Fi", "IMAX"] }\n</code></pre>\n<p>The following query will search for all films in the Star Wars franchise:</p>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/series/_search?pretty -d \'{\n    "query": {\n        "has_parent": {\n            "parent_type": "franchise",\n            "query": {\n                "match": {\n                    "title": "Star Wars"\n                }\n            }\n        }\n    }\n}\'\n</code></pre>\n<p>Here now is how to get a parent given the child:</p>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/series/_search?pretty -d \'{\n    "query": {\n        "has_child": {\n            "type": "film",\n            "query": {\n                "match": {\n                    "title": "The Force Awakens"\n                }\n            }\n        }\n    }\n}\'\n</code></pre>\n<h3>Flattened Datatype</h3>\n<p>Commands are given are url <a href="https://media.sundog-soft.com/es/flattened.txt">https://media.sundog-soft.com/es/flattened.txt</a>.</p>',id:"/Users/nicolas/repos/github.com/nperon/workshop/src/pages/2020-08-28-ELK-1/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-08-28T00:39:17.235Z",path:"/elk-mapping",title:"Mapping and Indexing Data into Elastic Search",excerpt:"",tags:["Elastic Search","Logstash","mapping","indexing"]}},next:{html:'<h3>Installing Jhipster</h3>\n<pre><code>npm install -g generator-jhipster\n</code></pre>\n<pre><code>jhipster --version\n</code></pre>\n<h3>Generating an app</h3>\n<pre><code>mkdir myPOC &#x26;&#x26; cd myPOC\n</code></pre>\n<pre><code>jhipster\n</code></pre>\n<pre><code>code .\n</code></pre>\n<pre><code>npm install\n</code></pre>\n<p>Hints on available spring boot options can be displayed with:</p>\n<pre><code>mvn spring-boot:help\n</code></pre>\n<p>The application can be started with the dev profile with: </p>\n<pre><code>mvn spring-boot:build-info\n</code></pre>\n<p>followed with:</p>\n<pre><code>mvn spring-boot:run\n</code></pre>\n<p>As an alternative to all of the mvn spring-boot commands above, the user may just run the mvnw available in the application root:</p>\n<pre><code>./mvnw\n</code></pre>\n<pre><code>npm start\n</code></pre>\n<p>To generate entities according to the application requirements, open a text editor like gedit and code a jdl language snipet with a <code>.jh</code> extension describing the different entities and their relationships:</p>\n<pre><code>gedit src/main/resources/entities.jh &#x26;\n</code></pre>\n<p>Sample jh files with entities are available for instance in the <a href="https://github.com/jhipster/jdl-samples">jdl-samples jhipster project on github</a>. Skip the <code>application { ... }</code> statement in your snippet as your application options are already set and you only want to describe your entities at this stage. Once your <code>entities.jh</code> file is ready, go ahead and generate the entities with:</p>\n<pre><code>jhipster import-jdl src/main/resources/entities.jh\n</code></pre>\n<p>To package the application as a “production” JAR in the target directory, type:</p>\n<pre><code>./mvnw -Pprod clean verify\n</code></pre>\n<h3>Leveraging docker according to the selected Jhipster options</h3>\n<p>A number of possible options in using Jhipster are described in the README.md file of the project folder.</p>\n<p>In case the JHipster Registry option was selected, the registry app can be run from the Docker image available in the application src/main/docker directory with: </p>\n<pre><code>docker-compose -f src/main/docker/jhipster-registry.yml up\n</code></pre>\n<p>If you chose OAuth 2.0 as your authentication, Keycloak is used as the default identity provider. Running </p>\n<pre><code>docker-compose -f src/main/docker/keycloak.yml up\n</code></pre>\n<p>starts up Keycloak automatically. A number of other docker-compose scripts can be availabla in the <code>src/main/docker/</code> directory, depending on the options set initially while generating the app. For instance it could well be that a <code>mysql.yml</code> docker-compose script is available to run a container with a mysql database required in dev mode. All of these docker-compose scripts can be run following the same <code>docker-compose</code> command pattern as stated above.</p>\n<h3>Jhipster Marketplace modules of interest</h3>\n<p>Kafka</p>\n<p>Stripe Payment </p>\n<p>Paypal</p>\n<p>Blockchain</p>\n<h3>Links</h3>\n<p><a href="https://www.jhipster.tech/">JHipster Homepage</a></p>\n<p><a href="https://start.jhipster.tech/jdl-studio/">JDL Studio</a></p>\n<p><a href="https://github.com/jhipster">JHipster github page</a></p>',id:"/Users/nicolas/repos/github.com/nperon/workshop/src/pages/2020-07-05-jhipster/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-07-05T18:51:12.235Z",path:"/jhipster",title:"Generate and deploy a Java app on the cloud with Jhipster",excerpt:"",tags:["jhipster","aws"]}}}}}});
//# sourceMappingURL=path---linux-utils-89098dbb9703d2ee8cfe.js.map