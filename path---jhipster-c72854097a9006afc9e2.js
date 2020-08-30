webpackJsonp([0xfaf43bcfa5ed],{370:function(e,t){e.exports={data:{markdownRemark:{html:'<h3>Installing Jhipster</h3>\n<pre><code>npm install -g generator-jhipster\n</code></pre>\n<pre><code>jhipster --version\n</code></pre>\n<h3>Generating an app</h3>\n<pre><code>mkdir myPOC &#x26;&#x26; cd myPOC\n</code></pre>\n<pre><code>jhipster\n</code></pre>\n<pre><code>code .\n</code></pre>\n<pre><code>npm install\n</code></pre>\n<p>Hints on available spring boot options can be displayed with:</p>\n<pre><code>mvn spring-boot:help\n</code></pre>\n<p>The application can be started with the dev profile with: </p>\n<pre><code>mvn spring-boot:build-info\n</code></pre>\n<p>followed with:</p>\n<pre><code>mvn spring-boot:run\n</code></pre>\n<p>As an alternative to all of the mvn spring-boot commands above, the user may just run the mvnw available in the application root:</p>\n<pre><code>./mvnw\n</code></pre>\n<pre><code>npm start\n</code></pre>\n<p>To generate entities according to the application requirements, open a text editor like gedit and code a jdl language snipet with a <code>.jh</code> extension describing the different entities and their relationships:</p>\n<pre><code>gedit src/main/resources/entities.jh &#x26;\n</code></pre>\n<p>Sample jh files with entities are available for instance in the <a href="https://github.com/jhipster/jdl-samples">jdl-samples jhipster project on github</a>. Skip the <code>application { ... }</code> statement in your snippet as your application options are already set and you only want to describe your entities at this stage. Once your <code>entities.jh</code> file is ready, go ahead and generate the entities with:</p>\n<pre><code>jhipster import-jdl src/main/resources/entities.jh\n</code></pre>\n<p>To package the application as a “production” JAR in the target directory, type:</p>\n<pre><code>./mvnw -Pprod clean verify\n</code></pre>\n<h3>Leveraging docker according to the selected Jhipster options</h3>\n<p>A number of possible options in using Jhipster are described in the README.md file of the project folder.</p>\n<p>In case the JHipster Registry option was selected, the registry app can be run from the Docker image available in the application src/main/docker directory with: </p>\n<pre><code>docker-compose -f src/main/docker/jhipster-registry.yml up\n</code></pre>\n<p>If you chose OAuth 2.0 as your authentication, Keycloak is used as the default identity provider. Running </p>\n<pre><code>docker-compose -f src/main/docker/keycloak.yml up\n</code></pre>\n<p>starts up Keycloak automatically. A number of other docker-compose scripts can be availabla in the <code>src/main/docker/</code> directory, depending on the options set initially while generating the app. For instance it could well be that a <code>mysql.yml</code> docker-compose script is available to run a container with a mysql database required in dev mode. All of these docker-compose scripts can be run following the same <code>docker-compose</code> command pattern as stated above.</p>\n<h3>Jhipster Marketplace modules of interest</h3>\n<p>Kafka</p>\n<p>Stripe Payment </p>\n<p>Paypal</p>\n<p>Blockchain</p>\n<h3>Links</h3>\n<p><a href="https://www.jhipster.tech/">JHipster Homepage</a></p>\n<p><a href="https://start.jhipster.tech/jdl-studio/">JDL Studio</a></p>\n<p><a href="https://github.com/jhipster">JHipster github page</a></p>',frontmatter:{title:"Generate and deploy a Java app on the cloud with Jhipster",date:"July 05, 2020",path:"/jhipster",tags:["jhipster","aws"],excerpt:""}}},pathContext:{prev:{html:'<h3>Create a container with a mongo database and connect to it</h3>\n<p>Start with displaying all currently running containers:</p>\n<pre><code class="language-bash">docker ps\n</code></pre>\n<p>Then create locally the container associated with the mongo docker image:</p>\n<pre><code class="language-bash">docker run -p 27017:27017 -d mongo\n</code></pre>\n<p>Executing another time <code>docker ps</code> results in information on the created container like the following being displayed:</p>\n<pre><code>CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                      NAMES\n2c6a61aba41b        mongo               "docker-entrypoint.s…"   3 minutes ago       Up 3 minutes        0.0.0.0:27017->27017/tcp   clever_dubinsky\n</code></pre>\n<p>Connection to the database at url localhost:27017 can be opened using for instance the robo-3t nosql database editor.\nFinally, the container when not needed anymore can be stopped with:</p>\n<pre><code>docker stop 2c6a61aba41b\n</code></pre>\n<h3>Create a container with a PostgreSQL database given the database name and the user credentials</h3>\n<p>Let us assume we need to connect to a database called course_data in a PostgreSQL SGBD with the following credentials: the user is postgres and the password is password. The command line to launch a docker container with such a database is:</p>\n<pre><code class="language-bash">docker run --name postgresdb -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=course_data -d -p 5432:5432 postgres\n</code></pre>\n<p>Terminal access to the database prompt is obtained by first accessing the container shell:</p>\n<pre><code class="language-bash">docker container exec -it postgresdb bash\n</code></pre>\n<p>The postgre prompt of user \'postgres\' may then be accessed with:</p>\n<pre><code class="language-bash">psql course_data postgres\n</code></pre>',id:"/home/nperon/Documents/workshop/src/pages/2020-03-31-docker-recipes/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-03-31T16:09:12.235Z",path:"/docker",title:"Docker Recipes",excerpt:"Some Docker Recipes",tags:["docker","container","devops"]}},next:null}}}});
//# sourceMappingURL=path---jhipster-c72854097a9006afc9e2.js.map