webpackJsonp([42351906034629],{427:function(e,n){e.exports={pathContext:{posts:[{html:'<h2>Basic commands</h2>\n<pre><code class="language-bash">docker info\ndocker\n</code></pre>\n<h2>Containers</h2>\n<pre><code class="language-bash">docker container run --publish 80:80 --detach --name webhost nginx\ndocker container logs webhost\ndocker container stop webhost\ndocker container top webhost\ndocker container ls -a\n</code></pre>\n<pre><code class="language-bash">docker container run --detach --publish 3306:3306 --name db --env MYSQL_RANDOM_ROOT_PASSWORD=yes mysql\ndocker container logs db\ndocker container inspect db\ndocker container stats db\n</code></pre>\n<pre><code class="language-bash">docker container run -it --name proxy nginx bash\n</code></pre>\n<h2>Networks</h2>\n<pre><code class="language-bash">docker container run -p 80:80 --name webhost --detach nginx\ndocker container port webhost\ndocker container inspect --format \'{{ .NetworkSettings.IPAddress }}\' webhost\nifconfig\n</code></pre>\n<pre><code class="language-bash">docker network ls\ndocker network inspect bridge\ndocker network create my_app_net\ndocker network inspect my_app_net\ndocker container run --detach --name new_nginx --network my_app_net nginx\ndocker network inspect my_app_net\ndocker network connect my_app_net webhost\ndocker container inspect webhost\ndocker network disconnect my_app_net webhost\ndocker container inspect webhost\n</code></pre>\n<h2>DNS</h2>\n<pre><code class="language-bash">docker network inspect my_app_net\ndocker container run --detach --name my_nginx --network my_app_net nginx:alpine\ndocker network inspect my_app_net\ndocker container exec -it my_nginx ping new_nginx\n</code></pre>\n<pre><code class="language-bash">docker network create dude\ndocker container run --detach --network dude --network-alias search elasticsearch:2\ndocker container run --detach --network dude --network-alias search elasticsearch:2\ndocker container run --rm --network dude alpine nslookup search\ndocker container run --rm --network dude centos curl -s search:9200\ndocker container run --rm --network dude centos curl -s search:9200\n</code></pre>\n<h2>Images</h2>',id:"/home/nicolas/projects/workshop/src/pages/2021-05-16-docker-concepts/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2021-05-16T22:21:00.451Z",path:"/docker-concepts",title:"Docker concepts",excerpt:"",tags:["Docker","containers","networks","images"]}}],tagName:"images"}}}});
//# sourceMappingURL=path---tags-images-bac435fb49341e4987d4.js.map