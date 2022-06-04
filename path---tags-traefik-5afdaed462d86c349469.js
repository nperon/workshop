webpackJsonp([0x820282126f2d],{464:function(e,t){e.exports={pathContext:{posts:[{html:'<h2>Links</h2>\n<ul>\n<li><a href="https://traefik.io/">Traefik labs website</a></li>\n<li><a href="https://github.com/56kcloud/traefik-training">Brian Christner 56 k Cloud github link</a></li>\n<li><a href="https://docs.traefik.io/providers/docker/#docker-api-access">Docker API Access documentation</a></li>\n<li><a href="https://docs.traefik.io/routing/routers/">General Router documentation</a></li>\n<li><a href="https://docs.traefik.io/routing/providers/docker/#routers">Docker Provider Router configurations</a></li>\n</ul>\n<h2>Traefik concepts</h2>\n<ul>\n<li>Providers: discover the services that live on the infrastructure (IP, health, ...)</li>\n<li>Entrypoints: listen for incoming traffic (ports, ...)</li>\n<li>Routers: analyse the requests (host, path, headers, SSL,...).</li>\n<li>Services: forward the request to services (load balancing, ...)</li>\n<li>Middlewares: may update the request or make decisions based on the request (authentication, rate limiting, headers, ...)</li>\n</ul>\n<h2>Routers: Connect Requests to Services</h2>\n<p>A traefik label like <code>traefik.http.routers.&#x3C;router_name>.rule</code>\ncomplies with a structure of<br>\n<code>[Docker Service].[Protocol].[Traefik Configuration].[User Defined Name for Config].[Option]</code>  </p>\n<p>A option of rule just means we are tying a rule to the router, e.g.:  </p>\n<p><code>traefik.http.routers.whoami.rule=Host(`whoami.localhost`)</code>  </p>\n<p>or in an equivalent way:  </p>\n<p><code>traefik.http.routers.whoami.rule=Host(\\"whoami.localhost\\")</code>  </p>\n<p>Traefik creates, for each container, a corresponding service and router.\nThe service automatically gets a server per instance of the container,\nand the router automatically gets a rule defined by defaultRule (if\nno rule for it was defined in labels).</p>\n<p>More label examples:</p>\n<ul>\n<li><code>traefik.http.routers.&#x3C;router_name>.rule</code>:<br>\n<code>traefik.http.routers.myrouter.rule=Host(`example.com`)</code>  </li>\n<li><code>traefik.http.routers.&#x3C;router_name>.entrypoints</code>:<br>\n<code>traefik.http.routers.myrouter.entrypoints=ep1,ep2</code>  </li>\n<li><code>traefik.http.routers.&#x3C;router_name>.service</code>:<br>\n<code>traefik.http.routers.myrouter.service=myservice</code>  </li>\n<li><code>traefik.http.routers.&#x3C;router_name>.tls</code>:<br>\n<code>traefik.http.routers.myrouter.tls=true</code>  </li>\n</ul>',id:"/home/nicolas/projects/workshop/src/pages/2021-10-03-traefik/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2021-10-03T10:17:00.823Z",path:"/traefik",title:"Traefik",excerpt:"",tags:["Traefik"]}}],tagName:"Traefik"}}}});
//# sourceMappingURL=path---tags-traefik-5afdaed462d86c349469.js.map