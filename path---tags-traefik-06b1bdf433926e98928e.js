webpackJsonp([0x820282126f2d],{490:function(e,r){e.exports={pathContext:{posts:[{html:'<h2>Links</h2>\n<ul>\n<li><a href="https://traefik.io/">Traefik labs website</a></li>\n<li><a href="https://github.com/56kcloud/traefik-training">Brian Christner 56 k Cloud github link</a></li>\n<li><a href="https://docs.traefik.io/providers/docker/#docker-api-access">Docker API Access documentation</a></li>\n<li><a href="https://docs.traefik.io/routing/routers/">General Router documentation</a></li>\n<li><a href="https://docs.traefik.io/routing/providers/docker/#routers">Docker Provider Router configurations</a></li>\n</ul>\n<h2>Traefik concepts</h2>\n<ul>\n<li>Providers: discover the services that live on the infrastructure (IP, health, ...)</li>\n<li>Entrypoints: listen for incoming traffic (ports, ...)</li>\n<li>Routers: analyse the requests (host, path, headers, SSL,...).</li>\n<li>Services: forward the request to services (load balancing, ...)</li>\n<li>Middlewares: may update the request or make decisions based on the request (authentication, rate limiting, headers, ...)</li>\n</ul>\n<h2>Routers: Connect Requests to Services</h2>\n<p>A traefik label like <code>traefik.http.routers.&#x3C;router_name>.rule</code>\ncomplies with a structure of<br>\n<code>[Docker Service].[Protocol].[Traefik Configuration].[User Defined Name for Config].[Option]</code>  </p>\n<p>A option of rule just means we are tying a rule to the router, e.g.:  </p>\n<p><code>traefik.http.routers.whoami.rule=Host(`whoami.localhost`)</code>  </p>\n<p>or in an equivalent way:  </p>\n<p><code>traefik.http.routers.whoami.rule=Host(\\"whoami.localhost\\")</code>  </p>\n<p>Traefik creates, for each container, a corresponding service and router.\nThe service automatically gets a server per instance of the container,\nand the router automatically gets a rule defined by defaultRule (if\nno rule for it was defined in labels).</p>\n<p>More examples of router configuration with labels:</p>\n<ul>\n<li><code>traefik.http.routers.&#x3C;router_name>.rule</code>:<br>\n<code>traefik.http.routers.myrouter.rule=Host(`example.com`)</code>  </li>\n<li><code>traefik.http.routers.&#x3C;router_name>.entrypoints</code>:<br>\n<code>traefik.http.routers.myrouter.entrypoints=ep1,ep2</code>  </li>\n<li><code>traefik.http.routers.&#x3C;router_name>.service</code>:<br>\n<code>traefik.http.routers.myrouter.service=myservice</code>  </li>\n<li><code>traefik.http.routers.&#x3C;router_name>.tls</code>:<br>\n<code>traefik.http.routers.myrouter.tls=true</code>  </li>\n</ul>\n<h1>Services: Configure how to reach the Application</h1>\n<ul>\n<li>Each service has its own Load Balancer. </li>\n<li>Load Balancers can load balance requests between multiple instances of your application</li>\n<li>The target of the Load Balancer is an instance of an application and is called a Server.  </li>\n<li>A Service can be assigned to one of more Routers.</li>\n</ul>\n<p>Examples of Service configuration with labels:</p>\n<ul>\n<li><code>traefik.http.services.&#x3C;service_name>.loadbalancer.server.port</code>:<br>\n<code>traefik.http.services.myservice.loadbalancer.server.port=8080</code></li>\n<li><code>traefik.http.services.&#x3C;service_name>.loadbalancer.passhostheader</code>:<br>\n<code>traefik.http.services.myservice.loadbalancer.server.passhostheader=true</code></li>\n<li><code>traefik.http.services.&#x3C;service_name>.loadbalancer.healthcheck.path</code>:<br>\n<code>traefik.http.services.myservice.loadbalancer.server.healthcheck.path=/foo</code></li>\n<li><code>traefik.http.services.&#x3C;service_name>.loadbalancer.healthcheck.port</code>:<br>\n<code>traefik.http.services.myservice.loadbalancer.healthcheck.port=42</code></li>\n</ul>\n<p>Docker specific options:</p>\n<ul>\n<li><code>traefik.enable</code><br>\ntells Traefik to override the exposedbyDefault setting for this particular container</li>\n<li><code>traefik.docker.network</code>\noverrides the default network used by Traefik</li>\n</ul>\n<h1>HTTPS / TLS / Let\'s Encrypt</h1>\n<p><a href="https://docs.traefik.io/v2.3/https/acme/#providers">DNS providers which traefik can handle</a></p>\n<p>Three ways for traefik to proceed with certificates:  </p>\n<ul>\n<li>default certificate  </li>\n<li>user defined  </li>\n<li>automated: Traefik uses Let\'s Encrypt  </li>\n</ul>\n<p>Three ways for Let\'s Encrypt to validate you control the domain name with challenges:  </p>\n<ul>\n<li>HTTP challenge</li>\n<li>DNS challenge</li>\n<li>TLS challenge</li>\n</ul>',id:"/home/nicolas/projects/workshop/src/pages/2021-10-03-traefik/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2021-10-03T10:17:00.823Z",path:"/traefik",title:"Traefik",excerpt:"",tags:["Traefik"]}}],tagName:"Traefik"}}}});
//# sourceMappingURL=path---tags-traefik-06b1bdf433926e98928e.js.map