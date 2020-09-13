webpackJsonp([75971844984152],{377:function(e,t){e.exports={data:{markdownRemark:{html:'<h3>General documentation</h3>\n<h3>Bootstrap</h3>\n<p><a href="https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/">How to Add Bootstrap to an Angular CLI project</a></p>',frontmatter:{title:"Style",date:"March 05, 2019",path:"/style",tags:["style","css","bootstrap"],excerpt:"Documentation on style"}}},pathContext:{prev:{html:'<h3>Create a container with a mongo database and connect to it</h3>\n<p>Start with displaying all currently running containers:</p>\n<pre><code class="language-bash">docker ps\n</code></pre>\n<p>Then create locally the container associated with the mongo docker image:</p>\n<pre><code class="language-bash">docker run -p 27017:27017 -d mongo\n</code></pre>\n<p>Executing another time <code>docker ps</code> results in information on the created container like the following being displayed:</p>\n<pre><code>CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                      NAMES\n2c6a61aba41b        mongo               "docker-entrypoint.s…"   3 minutes ago       Up 3 minutes        0.0.0.0:27017->27017/tcp   clever_dubinsky\n</code></pre>\n<p>Connection to the database at url localhost:27017 can be opened using for instance the robo-3t nosql database editor.\nFinally, the container when not needed anymore can be stopped with:</p>\n<pre><code>docker stop 2c6a61aba41b\n</code></pre>',id:"/home/nperon/Documents/workshop/src/pages/2020-03-31-docker-recipes/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2019-03-05T22:35:12.235Z",path:"/docker",title:"Docker Recipes",excerpt:"Some Docker Recipes",tags:["docker","container","devops"]}},next:null}}}});
//# sourceMappingURL=path---style-25f8338c99f0085ab5e1.js.map