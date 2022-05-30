webpackJsonp([0xfb919dfbfe03],{424:function(e,n){e.exports={data:{markdownRemark:{html:'<h3>Miscelaneous bash tips</h3>\n<p>The following command displays the status code from the last command:</p>\n<pre><code class="language-bash">echo $?\n</code></pre>\n<p>In the following command, output of a echo command is directed to\nstandard input so that a second command viz more manages it like a file:</p>\n<pre><code class="language-bash">echo \'toto\' | more -\n</code></pre>\n<h3>tree</h3>\n<pre><code class="language-bash">tree --noreport .\n</code></pre>\n<h3>vi</h3>\n<p>Vi command for eliminating all occurences of colon ":" is the following:</p>\n<pre><code>:1,$s/://g\n</code></pre>\n<p>Here is the vi command for replacing all occurences of "old" with "new":</p>\n<pre><code>:1,$s/old/new/g\n</code></pre>\n<p>Vi command for searching string "xyz":</p>\n<pre><code>/xyz\n</code></pre>\n<h3>find</h3>\n<p>File search:</p>\n<pre><code class="language-bash">find ./fvsa/ -name "pvsve*"\n</code></pre>\n<h3>grep</h3>\n<p>Search string \'yourDir\' in dir yourdir:</p>\n<pre><code class="language-bash">grep -nr \'yourString*\' yourdir\n</code></pre>\n<h3>sed</h3>\n<p>Sed is a stream editor for filtering and transforming text.</p>\n<pre><code class="language-bash">sed -i \'s/word1/word2/g\' inputfile\n</code></pre>\n<p>The <code>-i</code> option requests editing in place.\n<code>s</code> stands for substitute. <code>g</code> stands for global replacement.</p>\n<h3>A few tips with watch:</h3>\n<p>Memory usage:</p>\n<pre><code class="language-bash">watch -n 5 free -m\n</code></pre>\n<p>Realtime clock in a term:</p>\n<pre><code class="language-bash">watch -n 1 date\n</code></pre>\n<h3>Modify filenames with rename</h3>\n<p>Delete 4 first characters in all file names in dir:</p>\n<pre><code class="language-bash">rename \'s/.{4}(.*)/$1/\' *\n</code></pre>\n<p>Delete 5 last characters in all file names in dir:</p>\n<pre><code class="language-bash">rename \'s/(.*).{5}/$1/\' *\n</code></pre>\n<h3>wc</h3>\n<p>Display total number of files in \'folder\':</p>\n<pre><code class="language-bash">ls folder | wc -l\n</code></pre>\n<h3>Disk usage</h3>\n<pre><code class="language-bash">sudo ncdu -rx /\n</code></pre>\n<pre><code class="language-bash">sudo du -shc /*\n</code></pre>\n<p>Displaying size occupied by Documents directory:</p>\n<pre><code class="language-bash">cd ~\nsudo du -sh Documents\n</code></pre>\n<h3>Managing JDKs on Debian</h3>\n<pre><code class="language-bash">update-java-alternatives -l\n</code></pre>\n<pre><code class="language-bash">sudo update-java-alternatives -s java-1.8.0-openjdk-amd64\n</code></pre>\n<p>Or in a more interactive way:</p>\n<pre><code class="language-bash">update-alternatives --config java\n</code></pre>\n<h3>Managing screens</h3>\n<pre><code class="language-bash">xrandr\n</code></pre>\n<pre><code class="language-bash">xrandr --addmode HDMI-1 2560x1080\n</code></pre>\n<h3>Serving static content using http-server</h3>\n<p>The following command starts http-server and serves all of the static\ncontent (e.g. geojson files) available in the current directory:</p>\n<pre><code class="language-bash">http-server --cors=\'*\' -p 5252\n</code></pre>\n<h3>Generating random passwords</h3>\n<p>Install pwgen package and run the following command to\nget a randow password with 12 characters including one special\ncharacter at least:</p>\n<pre><code class="language-bash">pwgen 12 1 -y\n</code></pre>\n<h3>Managing permissions</h3>\n<p>Command to state that owner and group of directory mydir have full permission\nto access the directory and its content such as read, write and execute whereas\nothers will have read and execute permission:</p>\n<pre><code class="language-bash">chmod -R 775 mydir\n</code></pre>\n<h3>Probing system on service management tool</h3>\n<p>The following command can be use to check whether the service\nmanagement tool is <code>service</code> or <code>systemctl</code>:</p>\n<pre><code class="language-bash">ps --no-headers -o comm 1\n</code></pre>\n<p>A <code>systemd</code> result indicates that systemd (systemctl) is the service management tool, while\n<code>init</code> indicates that it is System V Init (service).</p>\n<h3>Managing DNS</h3>\n<pre><code class="language-bash">sudo apt install bind9-host\n</code></pre>\n<pre><code class="language-bash">host -t NS google.com\n</code></pre>',frontmatter:{title:"Linux Utils",date:"October 11, 2020",path:"/linux-utils",tags:["Linux","utils","bash","vi","find","grep","rename"],excerpt:""}}},pathContext:{prev:{html:"<h2>Udemy course repository</h2>\n<pre><code class=\"language-bash\">git clone git@github.com:vp-online-courses/webpack-tutorial.git\ncd webpack-tutorial\n</code></pre>\n<h2>Starting a webpack project</h2>\n<pre><code class=\"language-bash\">npm install webpack webpack-cli --save-dev\nnpx webpack\nnpx webpack --stats detailed\ntouch webpack.config.js\nnpm run build\n</code></pre>\n<h2>Types of asset modules</h2>\n<ul>\n<li>asset/resource: emits the file into the output folder and exports the url to that file. Use examples: large images or large font files.</li>\n<li>asset/inline: inlines the file in the bundle as a data uri without adding a new file in the output folder. Use examples: small pieces of data like svg.</li>\n<li>asset: a combination of asset/resource and asset/inline (8 kB is the default size limit)</li>\n<li>asset/source: plain text data. Inject the text as it is in the file into the javascript bundle as a string of text.</li>\n</ul>\n<h2>Loaders</h2>\n<pre><code class=\"language-bash\">npm install css-loader style-loader --save-dev\nnpm install sass-loader node-sass --save-dev\nnpm install @babel/core babel-loader @babel/preset-env @babel/plugin-proposal-class-properties --save-dev\n</code></pre>\n<h2>A config file example</h2>\n<p>The following is an example of a webpack.config.js content followed with\nthe corresponding index.html file. Additionaly, a file named <code>./src/index.js</code> is\nexpected as the entry point of the app.</p>\n<pre><code class=\"language-js\">const path = require('path');\n\nmodule.exports = {\n    entry: './src/index.js',\n    output: {\n        filename: 'bundle.js',\n        path: path.resolve(__dirname, './dist'),\n        publicPath: 'dist/'\n    },\n    mode: 'none',\n    module: {\n        rules: [\n            {\n                test: /\\.(png|jpg)$/,\n                type: 'asset',\n                parser: {\n                    dataUrlCondition: {\n                        maxSize: 3 * 1024 // 3 kilobytes\n                    }\n                }\n            },\n            {\n                test: /\\.txt/,\n                type: 'asset/source'\n            },\n            {\n                test: /\\.css$/,\n                use: [\n                    'style-loader', 'css-loader'\n                ]\n            },\n            {\n                test: /\\.scss$/,\n                use: [\n                    'style-loader', 'css-loader', 'sass-loader'\n                ]\n            },\n            {\n                test: /\\.js$/,\n                exclude: /node_modules/,\n                use: {\n                    loader: 'babel-loader',\n                    options: {\n                        presets: [ '@babel/env' ],\n                        plugins: [ '@babel/plugin-proposal-class-properties' ]\n                    }\n                }\n            }\n        ]\n    }\n}\n</code></pre>\n<pre><code class=\"language-html\">&#x3C;!DOCTYPE html>\n&#x3C;html lang=\"en\">\n&#x3C;head>\n    &#x3C;meta charset=\"UTF-8\">\n    &#x3C;meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    &#x3C;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    &#x3C;title>Document&#x3C;/title>\n&#x3C;/head>\n&#x3C;body>\n    &#x3C;script src=\"./dist/bundle.js\">&#x3C;/script>\n&#x3C;/body>\n&#x3C;/html>\n</code></pre>",id:"/home/nicolas/Documents/workshop/src/pages/2021-05-24-webpack/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2021-05-24T12:25:13.523Z",path:"/webpack",title:"Webpack 5",excerpt:"",tags:["Webpack","javascript"]}},next:{html:'<h2>Basic commands</h2>\n<pre><code class="language-bash">docker info\ndocker\n</code></pre>\n<h2>Containers</h2>\n<pre><code class="language-bash">docker container run --publish 80:80 --detach --name webhost nginx\ndocker container logs webhost\ndocker container stop webhost\ndocker container top webhost\ndocker container ls -a\n</code></pre>\n<pre><code class="language-bash">docker container run --detach --publish 3306:3306 --name db --env MYSQL_RANDOM_ROOT_PASSWORD=yes mysql\ndocker container logs db\ndocker container inspect db\ndocker container stats db\n</code></pre>\n<pre><code class="language-bash">docker container run -it --name proxy nginx bash\n</code></pre>\n<h2>Networks</h2>\n<pre><code class="language-bash">docker container run -p 80:80 --name webhost --detach nginx\ndocker container port webhost\ndocker container inspect --format \'{{ .NetworkSettings.IPAddress }}\' webhost\nifconfig\n</code></pre>\n<pre><code class="language-bash">docker network ls\ndocker network inspect bridge\ndocker network create my_app_net\ndocker network inspect my_app_net\ndocker container run --detach --name new_nginx --network my_app_net nginx\ndocker network inspect my_app_net\ndocker network connect my_app_net webhost\ndocker container inspect webhost\ndocker network disconnect my_app_net webhost\ndocker container inspect webhost\n</code></pre>\n<h2>DNS</h2>\n<pre><code class="language-bash">docker network inspect my_app_net\ndocker container run --detach --name my_nginx --network my_app_net nginx:alpine\ndocker network inspect my_app_net\ndocker container exec -it my_nginx ping new_nginx\n</code></pre>\n<pre><code class="language-bash">docker network create dude\ndocker container run --detach --network dude --network-alias search elasticsearch:2\ndocker container run --detach --network dude --network-alias search elasticsearch:2\ndocker container run --rm --network dude alpine nslookup search\ndocker container run --rm --network dude centos curl -s search:9200\ndocker container run --rm --network dude centos curl -s search:9200\n</code></pre>\n<h2>Images</h2>\n<pre><code class="language-bash">docker history nginx:latest\ndocker image inspect nginx:latest\n\ndocker image tag nginx nperon/nginx\ndocker login\ncat ~/.docker/config.json\ndocker logout\n</code></pre>\n<pre><code class="language-bash">cd dockerfile-sample-1/\n\ndocker build -t nperon/nodeapp .\ndocker container run --rm --publish 80:3000 --detach nperon/nodeapp\ndocker push nperon/nodeapp\n</code></pre>\n<h2>Using Prune to Keep Your Docker System Clean</h2>\n<p>Command to see space usage:</p>\n<pre><code class="language-bash">docker system df\n</code></pre>\n<p>Command to clean up just dangling images:</p>\n<pre><code class="language-bash">docker image prune\n</code></pre>\n<p>Command to clean up everything: </p>\n<pre><code class="language-bash">docker system prune\n</code></pre>\n<p>Command to remove all unused images: </p>\n<pre><code class="language-bash">docker image prune -a\n</code></pre>\n<p>Command to delete all containers: </p>\n<pre><code class="language-bash">docker rm -f $(docker ps -a -q)\n</code></pre>\n<p>Command to delete all volumes: </p>\n<pre><code class="language-bash">docker volume rm $(docker volume ls -q)\n</code></pre>\n<h2>Persistent Data: Data Volumes</h2>\n<pre><code class="language-bash">docker container run --detach --name mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=True mysql\n\ndocker container run --detach --name mysql3 -e MYSQL_ALLOW_EMPTY_PASSWORD=True -v mysql-db:/var/lib/mysql mysql\n</code></pre>\n<pre><code class="language-bash">docker container run --detach --name psql -v psql-data:/var/lib/postgresql/data postgres:9.6.1\ndocker container logs -f psql\n</code></pre>\n<h2>Persistent Data: Bind Mounting</h2>\n<pre><code class="language-bash">cd dockerfile-sample-2\ndocker container run -d --name nginx -p 80:80 -v $(pwd):/usr/share/nginx/html nginx\n</code></pre>\n<pre><code class="language-bash">cd bindmount-sample-1\ndocker run -p 80:4000 -v $(pwd):/site bretfisher/jekyll-serve\n</code></pre>\n<h2>docker-compose</h2>\n<h3>Structure of docker-compose yml</h3>\n<pre><code class="language-yml">version: \'3.2\'  # if no version is specified then v1 is assumed. Recommend v2 minimum\n\nservices:  # containers. same as docker run\n  servicename: # a friendly name. this is also DNS name inside network\n    image: # Optional if you use build:\n    command: # Optional, replace the default CMD specified by the image\n    environment: # Optional, same as -e in docker run\n    volumes: # Optional, same as -v in docker run\n  servicename2:\n\nvolumes: # Optional, same as docker volume create\n\nnetworks: # Optional, same as docker network create\n</code></pre>',id:"/home/nicolas/Documents/workshop/src/pages/2021-05-16-docker-concepts/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2021-05-16T22:21:00.451Z",path:"/docker-concepts",title:"Docker concepts",excerpt:"",tags:["Docker","containers","networks","images"]}}}}}});
//# sourceMappingURL=path---linux-utils-c68e60267f6933389e77.js.map