webpackJsonp([75971844984152],{467:function(e,a){e.exports={data:{markdownRemark:{html:'<h3>General documentation</h3>\n<h3>Bootstrap</h3>\n<p><a href="https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/">How to Add Bootstrap to an Angular CLI project</a></p>',frontmatter:{title:"Style",date:"March 05, 2019",path:"/style",tags:["style","css","bootstrap"],excerpt:"Documentation on style"}}},pathContext:{prev:{html:'<p><a href="https://www.codewars.com/dashboard">Codewars</a></p>\n<p><a href="https://gpcchs.slack.com/threads/">Slack</a></p>\n<p><a href="https://jestjs.io/docs/en/asynchronous.html">Jest asynchronous</a></p>\n<p><a href="https://willowtreeapps.com/ideas/best-practices-for-unit-testing-with-a-react-redux-approach">unit-testing-with-a-react-redux-approach</a></p>\n<p><a href="https://www.datchley.name/es6-promises/">ES6 Promises</a></p>\n<p><a href="https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9">ES6 Async/Await</a></p>\n<p><a href="https://javascript.info/regexp-introduction">regexp</a></p>\n<p><a href="https://lodash.com/">lodash</a></p>\n<p><a href="https://lodash.com/docs/4.17.10">lodash documentation</a></p>\n<p><a href="https://en.wikipedia.org/wiki/Lodash">lodash wiki</a></p>\n<p><a href="https://github.com/lodash/lodash/wiki/FP-Guide">lodash-fp documentation</a></p>\n<p><a href="https://blog.codeminer42.com/functional-programming-with-lodash-fp-8fe0619b3024">Functional programming with lodash-fp</a></p>\n<p><a href="https://github.com/toddmotto/public-apis/blob/master/README.md">Public REST APIs</a></p>\n<p><a href="https://github.com/angular/angular-cli">Angular CLI</a></p>\n<p><a href="https://d3js.org/">d3</a></p>\n<p><a href="https://www.smashingmagazine.com/2018/02/react-d3-ecosystem">Bringing Together React, D3, And Their Ecosystem</a></p>\n<p><a href="https://medium.com/front-end-hacking/if-and-when-to-use-d3-js-with-react-639a651c6257">if-and-when-to-use-d3-js-with-react</a></p>\n<p><a href="https://hackernoon.com/how-and-why-to-use-d3-with-react-d239eb1ea274">How (and why) to use D3 with React</a></p>\n<p><a href="https://github.com/larkintuckerllc/hello-d3/tree/master/react-d3-introduction">react-d3-introduction</a></p>\n<p><a href="https://github.com/alanbuchanan/redux-form-course">Redux Form Course</a></p>',id:"/home/nicolas/projects/workshop/src/pages/2018-07-23-bookmarks/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2018-07-23T21:34:19.235Z",path:"/bookmarks",title:"Bookmarks",excerpt:"Some bookmarks",tags:["bookmarks"]}},next:{html:'<h3>Create a container with a mongo database and connect to it</h3>\n<p>Start with displaying all currently running containers:</p>\n<pre><code class="language-bash">docker ps\n</code></pre>\n<p>Then create locally the container associated with the mongo docker image:</p>\n<pre><code class="language-bash">docker run -p 27017:27017 -d mongo\n</code></pre>\n<p>Executing another time <code>docker ps</code> results in information on the created container like the following being displayed:</p>\n<pre><code>CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                      NAMES\n2c6a61aba41b        mongo               "docker-entrypoint.s…"   3 minutes ago       Up 3 minutes        0.0.0.0:27017->27017/tcp   clever_dubinsky\n</code></pre>\n<p>Connection to the database at url localhost:27017 can be opened using for instance the robo-3t nosql database editor.\nFinally, the container when not needed anymore can be stopped with:</p>\n<pre><code>docker stop 2c6a61aba41b\n</code></pre>\n<h3>Create a container with a PostgreSQL database given the database name and the user credentials</h3>\n<p>Let us assume we need to connect to a database called course_data in a PostgreSQL SGBD with the following credentials: the user is postgres and the password is password. The command line to launch a docker container with such a database is:</p>\n<pre><code class="language-bash">docker run --name postgresdb -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=course_data -d -p 5432:5432 postgres\n</code></pre>\n<p>Terminal access to the database prompt is obtained by first accessing the container shell:</p>\n<pre><code class="language-bash">docker container exec -it postgresdb bash\n</code></pre>\n<p>The postgre prompt of user \'postgres\' may then be accessed with:</p>\n<pre><code class="language-bash">psql course_data postgres\n</code></pre>',id:"/home/nicolas/projects/workshop/src/pages/2020-03-31-docker-recipes/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-03-31T16:09:12.235Z",path:"/docker",title:"Docker Recipes",excerpt:"Some Docker Recipes",tags:["docker","container","devops"]}}}}}});
//# sourceMappingURL=path---style-4b842fb5055aa7d6883a.js.map