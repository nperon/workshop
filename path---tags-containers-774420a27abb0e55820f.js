webpackJsonp([26710918738984],{468:function(e,n){e.exports={pathContext:{posts:[{html:'<h2>Basic commands</h2>\n<pre><code class="language-bash">docker info\ndocker\n</code></pre>\n<h2>Containers</h2>\n<pre><code class="language-bash">docker container run --publish 80:80 --detach --name webhost nginx\ndocker container logs webhost\ndocker container stop webhost\ndocker container top webhost\ndocker container ls -a\n</code></pre>\n<pre><code class="language-bash">docker container run --detach --publish 3306:3306 --name db --env MYSQL_RANDOM_ROOT_PASSWORD=yes mysql\ndocker container logs db\ndocker container inspect db\ndocker container stats db\n</code></pre>\n<pre><code class="language-bash">docker container run -it --name proxy nginx bash\n</code></pre>\n<h2>Networks</h2>\n<pre><code class="language-bash">docker container run -p 80:80 --name webhost --detach nginx\ndocker container port webhost\ndocker container inspect --format \'{{ .NetworkSettings.IPAddress }}\' webhost\nifconfig\n</code></pre>\n<pre><code class="language-bash">docker network ls\ndocker network inspect bridge\ndocker network create my_app_net\ndocker network inspect my_app_net\ndocker container run --detach --name new_nginx --network my_app_net nginx\ndocker network inspect my_app_net\ndocker network connect my_app_net webhost\ndocker container inspect webhost\ndocker network disconnect my_app_net webhost\ndocker container inspect webhost\n</code></pre>\n<h2>DNS</h2>\n<pre><code class="language-bash">docker network inspect my_app_net\ndocker container run --detach --name my_nginx --network my_app_net nginx:alpine\ndocker network inspect my_app_net\ndocker container exec -it my_nginx ping new_nginx\n</code></pre>\n<pre><code class="language-bash">docker network create dude\ndocker container run --detach --network dude --network-alias search elasticsearch:2\ndocker container run --detach --network dude --network-alias search elasticsearch:2\ndocker container run --rm --network dude alpine nslookup search\ndocker container run --rm --network dude centos curl -s search:9200\ndocker container run --rm --network dude centos curl -s search:9200\n</code></pre>\n<h2>Images</h2>\n<pre><code class="language-bash">docker history nginx:latest\ndocker image inspect nginx:latest\n\ndocker image tag nginx nperon/nginx\ndocker login\ncat ~/.docker/config.json\ndocker logout\n</code></pre>\n<pre><code class="language-bash">cd dockerfile-sample-1/\n\ndocker build -t nperon/nodeapp .\ndocker container run --rm --publish 80:3000 --detach nperon/nodeapp\ndocker push nperon/nodeapp\n</code></pre>\n<h2>Using Prune to Keep Your Docker System Clean</h2>\n<p>Command to see space usage:</p>\n<pre><code class="language-bash">docker system df\n</code></pre>\n<p>Command to clean up just dangling images:</p>\n<pre><code class="language-bash">docker image prune\n</code></pre>\n<p>Command to clean up everything: </p>\n<pre><code class="language-bash">docker system prune\n</code></pre>\n<p>Command to remove all unused images: </p>\n<pre><code class="language-bash">docker image prune -a\n</code></pre>\n<p>Command to check the size of each running container: </p>\n<pre><code class="language-bash">docker ps --size\n</code></pre>\n<p>Command to delete all containers: </p>\n<pre><code class="language-bash">docker rm -f $(docker ps -a -q)\n</code></pre>\n<p>Command to delete all volumes: </p>\n<pre><code class="language-bash">docker volume rm $(docker volume ls -q)\n</code></pre>\n<h2>Persistent Data: Data Volumes</h2>\n<pre><code class="language-bash">docker container run --detach --name mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=True mysql\n\ndocker container run --detach --name mysql3 -e MYSQL_ALLOW_EMPTY_PASSWORD=True -v mysql-db:/var/lib/mysql mysql\n</code></pre>\n<pre><code class="language-bash">docker container run --detach --name psql -v psql-data:/var/lib/postgresql/data postgres:9.6.1\ndocker container logs -f psql\n</code></pre>\n<h2>Persistent Data: Bind Mounting</h2>\n<pre><code class="language-bash">cd dockerfile-sample-2\ndocker container run -d --name nginx -p 80:80 -v $(pwd):/usr/share/nginx/html nginx\n</code></pre>\n<pre><code class="language-bash">cd bindmount-sample-1\ndocker run -p 80:4000 -v $(pwd):/site bretfisher/jekyll-serve\n</code></pre>\n<h2>docker-compose</h2>\n<h3>Structure of docker-compose yml</h3>\n<pre><code class="language-yml">version: \'3.2\'  # if no version is specified then v1 is assumed. Recommend v2 minimum\n\nservices:  # containers. same as docker run\n  servicename: # a friendly name. this is also DNS name inside network\n    image: # Optional if you use build:\n    command: # Optional, replace the default CMD specified by the image\n    environment: # Optional, same as -e in docker run\n    volumes: # Optional, same as -v in docker run\n  servicename2:\n\nvolumes: # Optional, same as docker volume create\n\nnetworks: # Optional, same as docker network create\n</code></pre>',id:"/Users/nicolas/repos/github.com/nperon/workshop/src/pages/2021-05-16-docker-concepts/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2021-05-16T22:21:00.451Z",path:"/docker-concepts",title:"Docker concepts",excerpt:"",tags:["Docker","containers","networks","images"]}}],tagName:"containers"}}}});
//# sourceMappingURL=path---tags-containers-774420a27abb0e55820f.js.map