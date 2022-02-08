webpackJsonp([0xfb919dfbfe03],{422:function(e,a){e.exports={data:{markdownRemark:{html:'<h3>Miscelaneous bash tips</h3>\n<p>The following command displays the status code from the last command:</p>\n<pre><code class="language-bash">echo $?\n</code></pre>\n<p>In the following command, output of a echo command is directed to\nstandard input so that a second command viz more manages it like a file:</p>\n<pre><code class="language-bash">echo \'toto\' | more -\n</code></pre>\n<h3>vi</h3>\n<p>Vi command for eliminating all occurences of colon ":" is the following:</p>\n<pre><code>:1,$s/://g\n</code></pre>\n<p>Here is the vi command for replacing all occurences of "old" with "new":</p>\n<pre><code>:1,$s/old/new/g\n</code></pre>\n<p>Vi command for searching string "xyz":</p>\n<pre><code>/xyz\n</code></pre>\n<h3>find</h3>\n<p>File search:</p>\n<pre><code class="language-bash">find ./fvsa/ -name "pvsve*"\n</code></pre>\n<h3>grep</h3>\n<p>Search string \'yourDir\' in dir yourdir:</p>\n<pre><code class="language-bash">grep -nr \'yourString*\' yourdir\n</code></pre>\n<h3>sed</h3>\n<p>Sed is a stream editor for filtering and transforming text.</p>\n<pre><code class="language-bash">sed -i \'s/word1/word2/g\' inputfile\n</code></pre>\n<p>The <code>-i</code> option requests editing in place.\n<code>s</code> stands for substitute. <code>g</code> stands for global replacement.</p>\n<h3>A few tips with watch:</h3>\n<p>Memory usage:</p>\n<pre><code class="language-bash">watch -n 5 free -m\n</code></pre>\n<p>Realtime clock in a term:</p>\n<pre><code class="language-bash">watch -n 1 date\n</code></pre>\n<h3>Modify filenames with rename</h3>\n<p>Delete 4 first characters in all file names in dir:</p>\n<pre><code class="language-bash">rename \'s/.{4}(.*)/$1/\' *\n</code></pre>\n<p>Delete 5 last characters in all file names in dir:</p>\n<pre><code class="language-bash">rename \'s/(.*).{5}/$1/\' *\n</code></pre>\n<h3>wc</h3>\n<p>Display total number of files in \'folder\':</p>\n<pre><code class="language-bash">ls folder | wc -l\n</code></pre>\n<h3>Disk usage</h3>\n<pre><code class="language-bash">sudo ncdu -rx /\n</code></pre>\n<pre><code class="language-bash">sudo du -shc /*\n</code></pre>\n<p>Displaying size occupied by Documents directory:</p>\n<pre><code class="language-bash">cd ~\nsudo du -sh Documents\n</code></pre>\n<h3>Managing JDKs on Debian</h3>\n<pre><code class="language-bash">update-java-alternatives -l\n</code></pre>\n<pre><code class="language-bash">sudo update-java-alternatives -s java-1.8.0-openjdk-amd64\n</code></pre>\n<p>Or in a more interactive way:</p>\n<pre><code class="language-bash">update-alternatives --config java\n</code></pre>\n<h3>Managing screens</h3>\n<pre><code class="language-bash">xrandr\n</code></pre>\n<pre><code class="language-bash">xrandr --addmode HDMI-1 2560x1080\n</code></pre>\n<h3>Serving static content using http-server</h3>\n<p>The following command starts http-server and serves all of the static\ncontent (e.g. geojson files) available in the current directory:</p>\n<pre><code class="language-bash">http-server --cors=\'*\' -p 5252\n</code></pre>\n<h3>Generating random passwords</h3>\n<p>Install pwgen package and run the following command to\nget a randow password with 12 characters including one special\ncharacter at least:</p>\n<pre><code class="language-bash">pwgen 12 1 -y\n</code></pre>\n<h3>Managing permissions</h3>\n<p>Command to state that owner and group of directory mydir have full permission\nto access the directory and its content such as read, write and execute whereas\nothers will have read and execute permission:</p>\n<pre><code class="language-bash">chmod -R 775 mydir\n</code></pre>\n<h3>Probing system on service management tool</h3>\n<p>The following command can be use to check whether the service\nmanagement tool is <code>service</code> or <code>systemctl</code>:</p>\n<pre><code class="language-bash">ps --no-headers -o comm 1\n</code></pre>\n<p>A <code>systemd</code> result indicates that systemd (systemctl) is the service management tool, while\n<code>init</code> indicates that it is System V Init (service).</p>\n<h3>Managing DNS</h3>\n<pre><code class="language-bash">sudo apt install bind9-host\n</code></pre>\n<pre><code class="language-bash">host -t NS google.com\n</code></pre>',frontmatter:{title:"Linux Utils",date:"October 11, 2020",path:"/linux-utils",tags:["Linux","utils","bash","vi","find","grep","rename"],excerpt:""}}},pathContext:{prev:{html:'<h2>Links</h2>\n<ul>\n<li><a href="https://traefik.io/">Traefik labs website</a></li>\n<li><a href="https://github.com/56kcloud/traefik-training">Brian Christner 56 k Cloud github link</a></li>\n<li><a href="https://docs.traefik.io/providers/docker/#docker-api-access">Docker API Access documentation</a></li>\n<li><a href="https://docs.traefik.io/routing/routers/">General Router documentation</a></li>\n<li><a href="https://docs.traefik.io/routing/providers/docker/#routers">Docker Provider Router configurations</a></li>\n</ul>\n<h2>Traefik concepts</h2>\n<ul>\n<li>Providers: discover the services that live on the infrastructure (IP, health, ...)</li>\n<li>Entrypoints: listen for incoming traffic (ports, ...)</li>\n<li>Routers: analyse the requests (host, path, headers, SSL,...).</li>\n<li>Services: forward the request to services (load balancing, ...)</li>\n<li>Middlewares: may update the request or make decisions based on the request (authentication, rate limiting, headers, ...)</li>\n</ul>\n<h2>Routers: Connect Requests to Services</h2>\n<p>A traefik label like <code>traefik.http.routers.&#x3C;router_name>.rule</code>\ncomplies with a structure of<br>\n<code>[Docker Service].[Protocol].[Traefik Configuration].[User Defined Name for Config].[Option]</code>  </p>\n<p>A option of rule just means we are tying a rule to the router, e.g.:  </p>\n<p><code>traefik.http.routers.whoami.rule=Host(`whoami.localhost`)</code>  </p>\n<p>or in an equivalent way:  </p>\n<p><code>traefik.http.routers.whoami.rule=Host(\\"whoami.localhost\\")</code>  </p>\n<p>Traefik creates, for each container, a corresponding service and router.\nThe service automatically gets a server per instance of the container,\nand the router automatically gets a rule defined by defaultRule (if\nno rule for it was defined in labels).</p>\n<p>More examples of router configuration with labels:</p>\n<ul>\n<li><code>traefik.http.routers.&#x3C;router_name>.rule</code>:<br>\n<code>traefik.http.routers.myrouter.rule=Host(`example.com`)</code>  </li>\n<li><code>traefik.http.routers.&#x3C;router_name>.entrypoints</code>:<br>\n<code>traefik.http.routers.myrouter.entrypoints=ep1,ep2</code>  </li>\n<li><code>traefik.http.routers.&#x3C;router_name>.service</code>:<br>\n<code>traefik.http.routers.myrouter.service=myservice</code>  </li>\n<li><code>traefik.http.routers.&#x3C;router_name>.tls</code>:<br>\n<code>traefik.http.routers.myrouter.tls=true</code>  </li>\n</ul>\n<h1>Services: Configure how to reach the Application</h1>\n<ul>\n<li>Each service has its own Load Balancer. </li>\n<li>Load Balancers can load balance requests between multiple instances of your application</li>\n<li>The target of the Load Balancer is an instance of an application and is called a Server.  </li>\n<li>A Service can be assigned to one of more Routers.</li>\n</ul>\n<p>Examples of Service configuration with labels:</p>\n<ul>\n<li><code>traefik.http.services.&#x3C;service_name>.loadbalancer.server.port</code>:<br>\n<code>traefik.http.services.myservice.loadbalancer.server.port=8080</code></li>\n<li><code>traefik.http.services.&#x3C;service_name>.loadbalancer.passhostheader</code>:<br>\n<code>traefik.http.services.myservice.loadbalancer.server.passhostheader=true</code></li>\n<li><code>traefik.http.services.&#x3C;service_name>.loadbalancer.healthcheck.path</code>:<br>\n<code>traefik.http.services.myservice.loadbalancer.server.healthcheck.path=/foo</code></li>\n<li><code>traefik.http.services.&#x3C;service_name>.loadbalancer.healthcheck.port</code>:<br>\n<code>traefik.http.services.myservice.loadbalancer.healthcheck.port=42</code></li>\n</ul>\n<p>Docker specific options:</p>\n<ul>\n<li><code>traefik.enable</code><br>\ntells Traefik to override the exposedbyDefault setting for this particular container</li>\n<li><code>traefik.docker.network</code>\noverrides the default network used by Traefik</li>\n</ul>\n<h1>HTTPS / TLS / Let\'s Encrypt</h1>\n<p><a href="https://docs.traefik.io/v2.3/https/acme/#providers">DNS providers which traefik can handle</a></p>\n<p>Three ways for traefik to proceed with certificates:  </p>\n<ul>\n<li>default certificate  </li>\n<li>user defined  </li>\n<li>automated: Traefik uses Let\'s Encrypt  </li>\n</ul>\n<p>Three ways for Let\'s Encrypt to validate you control the domain name with challenges:  </p>\n<ul>\n<li>HTTP challenge</li>\n<li>DNS challenge</li>\n<li>TLS challenge</li>\n</ul>',id:"/home/nicolas/projects/workshop/src/pages/2021-10-03-traefik/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2021-10-03T10:17:00.823Z",path:"/traefik",title:"Traefik",excerpt:"",tags:["Traefik"]}},next:null}}}});
//# sourceMappingURL=path---linux-utils-171e3b50cb5223b0530b.js.map