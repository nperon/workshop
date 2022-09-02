webpackJsonp([0xfaf43bcfa5ed],{437:function(e,n){e.exports={data:{markdownRemark:{html:'<h3>Installing Jhipster</h3>\n<pre><code>npm install -g generator-jhipster\n</code></pre>\n<pre><code>jhipster --version\n</code></pre>\n<h3>Generating an app</h3>\n<pre><code>mkdir myPOC &#x26;&#x26; cd myPOC\n</code></pre>\n<pre><code>jhipster\n</code></pre>\n<pre><code>code .\n</code></pre>\n<pre><code>npm install\n</code></pre>\n<p>Hints on available spring boot options can be displayed with:</p>\n<pre><code>mvn spring-boot:help\n</code></pre>\n<p>The application can be started with the dev profile with: </p>\n<pre><code>mvn spring-boot:build-info\n</code></pre>\n<p>followed with:</p>\n<pre><code>mvn spring-boot:run\n</code></pre>\n<p>As an alternative to all of the mvn spring-boot commands above, the user may just run the mvnw available in the application root:</p>\n<pre><code>./mvnw\n</code></pre>\n<pre><code>npm start\n</code></pre>\n<p>To generate entities according to the application requirements, open a text editor like gedit and code a jdl language snipet with a <code>.jh</code> extension describing the different entities and their relationships:</p>\n<pre><code>gedit src/main/resources/entities.jh &#x26;\n</code></pre>\n<p>Sample jh files with entities are available for instance in the <a href="https://github.com/jhipster/jdl-samples">jdl-samples jhipster project on github</a>. Skip the <code>application { ... }</code> statement in your snippet as your application options are already set and you only want to describe your entities at this stage. Once your <code>entities.jh</code> file is ready, go ahead and generate the entities with:</p>\n<pre><code>jhipster import-jdl src/main/resources/entities.jh\n</code></pre>\n<p>To package the application as a “production” JAR in the target directory, type:</p>\n<pre><code>./mvnw -Pprod clean verify\n</code></pre>\n<h3>Leveraging docker according to the selected Jhipster options</h3>\n<p>A number of possible options in using Jhipster are described in the README.md file of the project folder.</p>\n<p>In case the JHipster Registry option was selected, the registry app can be run from the Docker image available in the application src/main/docker directory with: </p>\n<pre><code>docker-compose -f src/main/docker/jhipster-registry.yml up\n</code></pre>\n<p>If you chose OAuth 2.0 as your authentication, Keycloak is used as the default identity provider. Running </p>\n<pre><code>docker-compose -f src/main/docker/keycloak.yml up\n</code></pre>\n<p>starts up Keycloak automatically. A number of other docker-compose scripts can be availabla in the <code>src/main/docker/</code> directory, depending on the options set initially while generating the app. For instance it could well be that a <code>mysql.yml</code> docker-compose script is available to run a container with a mysql database required in dev mode. All of these docker-compose scripts can be run following the same <code>docker-compose</code> command pattern as stated above.</p>\n<h3>Jhipster Marketplace modules of interest</h3>\n<p>Kafka</p>\n<p>Stripe Payment </p>\n<p>Paypal</p>\n<p>Blockchain</p>\n<h3>Links</h3>\n<p><a href="https://www.jhipster.tech/">JHipster Homepage</a></p>\n<p><a href="https://start.jhipster.tech/jdl-studio/">JDL Studio</a></p>\n<p><a href="https://github.com/jhipster">JHipster github page</a></p>',frontmatter:{title:"Generate and deploy a Java app on the cloud with Jhipster",date:"July 05, 2020",path:"/jhipster",tags:["jhipster","aws"],excerpt:""}}},pathContext:{prev:{html:'<h3>Miscelaneous bash tips</h3>\n<p>The following command displays the status code from the last command:</p>\n<pre><code class="language-bash">echo $?\n</code></pre>\n<p>In the following command, output of a echo command is directed to\nstandard input so that a second command viz more manages it like a file:</p>\n<pre><code class="language-bash">echo \'toto\' | more -\n</code></pre>\n<h3>tree</h3>\n<pre><code class="language-bash">tree --noreport .\n</code></pre>\n<h3>vi</h3>\n<p>Vi command for eliminating all occurences of colon ":" is the following:</p>\n<pre><code>:1,$s/://g\n</code></pre>\n<p>Here is the vi command for replacing all occurences of "old" with "new":</p>\n<pre><code>:1,$s/old/new/g\n</code></pre>\n<p>Vi command for searching string "xyz":</p>\n<pre><code>/xyz\n</code></pre>\n<h3>find</h3>\n<p>File search:</p>\n<pre><code class="language-bash">find ./fvsa/ -name "pvsve*"\n</code></pre>\n<h3>grep</h3>\n<p>Search string \'yourDir\' in dir yourdir:</p>\n<pre><code class="language-bash">grep -nr \'yourString*\' yourdir\n</code></pre>\n<h3>sed</h3>\n<p>Sed is a stream editor for filtering and transforming text.</p>\n<pre><code class="language-bash">sed -i \'s/word1/word2/g\' inputfile\n</code></pre>\n<p>The <code>-i</code> option requests editing in place.\n<code>s</code> stands for substitute. <code>g</code> stands for global replacement.</p>\n<h3>A few tips with watch:</h3>\n<p>Memory usage:</p>\n<pre><code class="language-bash">watch -n 5 free -m\n</code></pre>\n<p>Realtime clock in a term:</p>\n<pre><code class="language-bash">watch -n 1 date\n</code></pre>\n<h3>Modify filenames with rename</h3>\n<p>Delete 4 first characters in all file names in dir:</p>\n<pre><code class="language-bash">rename \'s/.{4}(.*)/$1/\' *\n</code></pre>\n<p>Delete 5 last characters in all file names in dir:</p>\n<pre><code class="language-bash">rename \'s/(.*).{5}/$1/\' *\n</code></pre>\n<h3>wc</h3>\n<p>Display total number of files in \'folder\':</p>\n<pre><code class="language-bash">ls folder | wc -l\n</code></pre>\n<h3>Disk usage</h3>\n<pre><code class="language-bash">sudo ncdu -rx /\n</code></pre>\n<pre><code class="language-bash">sudo du -shc /*\n</code></pre>\n<p>Displaying size occupied by Documents directory:</p>\n<pre><code class="language-bash">cd ~\nsudo du -sh Documents\n</code></pre>\n<h3>Managing JDKs on Debian</h3>\n<pre><code class="language-bash">update-java-alternatives -l\n</code></pre>\n<pre><code class="language-bash">sudo update-java-alternatives -s java-1.8.0-openjdk-amd64\n</code></pre>\n<p>Or in a more interactive way:</p>\n<pre><code class="language-bash">update-alternatives --config java\n</code></pre>\n<h3>Managing screens</h3>\n<pre><code class="language-bash">xrandr\n</code></pre>\n<pre><code class="language-bash">xrandr --addmode HDMI-1 2560x1080\n</code></pre>\n<h3>Serving static content using http-server</h3>\n<p>The following command starts http-server and serves all of the static\ncontent (e.g. geojson files) available in the current directory:</p>\n<pre><code class="language-bash">http-server --cors=\'*\' -p 5252\n</code></pre>\n<h3>Generating random passwords</h3>\n<p>Install pwgen package and run the following command to\nget a randow password with 12 characters including one special\ncharacter at least:</p>\n<pre><code class="language-bash">pwgen 12 1 -y\n</code></pre>\n<h3>Managing permissions</h3>\n<p>Command to state that owner and group of directory mydir have full permission\nto access the directory and its content such as read, write and execute whereas\nothers will have read and execute permission:</p>\n<pre><code class="language-bash">chmod -R 775 mydir\n</code></pre>\n<h3>Probing system on service management tool</h3>\n<p>The following command can be use to check whether the service\nmanagement tool is <code>service</code> or <code>systemctl</code>:</p>\n<pre><code class="language-bash">ps --no-headers -o comm 1\n</code></pre>\n<p>A <code>systemd</code> result indicates that systemd (systemctl) is the service management tool, while\n<code>init</code> indicates that it is System V Init (service).</p>\n<h3>Managing DNS</h3>\n<pre><code class="language-bash">sudo apt install bind9-host\n</code></pre>\n<pre><code class="language-bash">host -t NS google.com\n</code></pre>',id:"/Users/nicolas/repos/github.com/nperon/workshop/src/pages/2020-10-11-linux-utils/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-10-11T22:47:32.235Z",path:"/linux-utils",title:"Linux Utils",excerpt:"",tags:["Linux","utils","bash","vi","find","grep","rename"]}},next:{html:'<h3>General documentation</h3>\n<h3>Bootstrap</h3>\n<p><a href="https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/">How to Add Bootstrap to an Angular CLI project</a></p>',id:"/Users/nicolas/repos/github.com/nperon/workshop/src/pages/2019-03-05-styling/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2019-03-05T22:35:12.235Z",path:"/style",title:"Style",excerpt:"Documentation on style",tags:["style","css","bootstrap"]}}}}}});
//# sourceMappingURL=path---jhipster-a8af7203729cc81a2549.js.map