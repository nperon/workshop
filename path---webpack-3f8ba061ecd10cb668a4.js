webpackJsonp([0xfb1819cab71],{491:function(e,n){e.exports={data:{markdownRemark:{html:"<h2>Udemy course repository</h2>\n<pre><code class=\"language-bash\">git clone git@github.com:vp-online-courses/webpack-tutorial.git\ncd webpack-tutorial\n</code></pre>\n<h2>Starting a webpack project</h2>\n<pre><code class=\"language-bash\">npm install webpack webpack-cli --save-dev\nnpx webpack\nnpx webpack --stats detailed\ntouch webpack.config.js\nnpm run build\n</code></pre>\n<h2>Types of asset modules</h2>\n<ul>\n<li>asset/resource: emits the file into the output folder and exports the url to that file. Use examples: large images or large font files.</li>\n<li>asset/inline: inlines the file in the bundle as a data uri without adding a new file in the output folder. Use examples: small pieces of data like svg.</li>\n<li>asset: a combination of asset/resource and asset/inline (8 kB is the default size limit)</li>\n<li>asset/source: plain text data. Inject the text as it is in the file into the javascript bundle as a string of text.</li>\n</ul>\n<h2>Loaders</h2>\n<pre><code class=\"language-bash\">npm install css-loader style-loader --save-dev\nnpm install sass-loader node-sass --save-dev\nnpm install @babel/core babel-loader @babel/preset-env @babel/plugin-proposal-class-properties --save-dev\n</code></pre>\n<h2>A config file example</h2>\n<p>The following is an example of a webpack.config.js content followed with\nthe corresponding index.html file. Additionaly, a file named <code>./src/index.js</code> is\nexpected as the entry point of the app.</p>\n<pre><code class=\"language-js\">const path = require('path');\n\nmodule.exports = {\n    entry: './src/index.js',\n    output: {\n        filename: 'bundle.js',\n        path: path.resolve(__dirname, './dist'),\n        publicPath: 'dist/'\n    },\n    mode: 'none',\n    module: {\n        rules: [\n            {\n                test: /\\.(png|jpg)$/,\n                type: 'asset',\n                parser: {\n                    dataUrlCondition: {\n                        maxSize: 3 * 1024 // 3 kilobytes\n                    }\n                }\n            },\n            {\n                test: /\\.txt/,\n                type: 'asset/source'\n            },\n            {\n                test: /\\.css$/,\n                use: [\n                    'style-loader', 'css-loader'\n                ]\n            },\n            {\n                test: /\\.scss$/,\n                use: [\n                    'style-loader', 'css-loader', 'sass-loader'\n                ]\n            },\n            {\n                test: /\\.js$/,\n                exclude: /node_modules/,\n                use: {\n                    loader: 'babel-loader',\n                    options: {\n                        presets: [ '@babel/env' ],\n                        plugins: [ '@babel/plugin-proposal-class-properties' ]\n                    }\n                }\n            }\n        ]\n    }\n}\n</code></pre>\n<pre><code class=\"language-html\">&#x3C;!DOCTYPE html>\n&#x3C;html lang=\"en\">\n&#x3C;head>\n    &#x3C;meta charset=\"UTF-8\">\n    &#x3C;meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    &#x3C;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    &#x3C;title>Document&#x3C;/title>\n&#x3C;/head>\n&#x3C;body>\n    &#x3C;script src=\"./dist/bundle.js\">&#x3C;/script>\n&#x3C;/body>\n&#x3C;/html>\n</code></pre>",frontmatter:{title:"Webpack 5",date:"May 24, 2021",path:"/webpack",tags:["Webpack","javascript"],excerpt:""}}},pathContext:{prev:{html:'<h2>Basic commands</h2>\n<pre><code class="language-bash">docker info\ndocker\n</code></pre>\n<h2>Containers</h2>\n<pre><code class="language-bash">docker container run --publish 80:80 --detach --name webhost nginx\ndocker container logs webhost\ndocker container stop webhost\ndocker container top webhost\ndocker container ls -a\n</code></pre>\n<pre><code class="language-bash">docker container run --detach --publish 3306:3306 --name db --env MYSQL_RANDOM_ROOT_PASSWORD=yes mysql\ndocker container logs db\ndocker container inspect db\ndocker container stats db\n</code></pre>\n<pre><code class="language-bash">docker container run -it --name proxy nginx bash\n</code></pre>\n<h2>Networks</h2>\n<pre><code class="language-bash">docker container run -p 80:80 --name webhost --detach nginx\ndocker container port webhost\ndocker container inspect --format \'{{ .NetworkSettings.IPAddress }}\' webhost\nifconfig\n</code></pre>\n<pre><code class="language-bash">docker network ls\ndocker network inspect bridge\ndocker network create my_app_net\ndocker network inspect my_app_net\ndocker container run --detach --name new_nginx --network my_app_net nginx\ndocker network inspect my_app_net\ndocker network connect my_app_net webhost\ndocker container inspect webhost\ndocker network disconnect my_app_net webhost\ndocker container inspect webhost\n</code></pre>\n<h2>DNS</h2>\n<pre><code class="language-bash">docker network inspect my_app_net\ndocker container run --detach --name my_nginx --network my_app_net nginx:alpine\ndocker network inspect my_app_net\ndocker container exec -it my_nginx ping new_nginx\n</code></pre>\n<pre><code class="language-bash">docker network create dude\ndocker container run --detach --network dude --network-alias search elasticsearch:2\ndocker container run --detach --network dude --network-alias search elasticsearch:2\ndocker container run --rm --network dude alpine nslookup search\ndocker container run --rm --network dude centos curl -s search:9200\ndocker container run --rm --network dude centos curl -s search:9200\n</code></pre>\n<h2>Images</h2>\n<pre><code class="language-bash">docker history nginx:latest\ndocker image inspect nginx:latest\n\ndocker image tag nginx nperon/nginx\ndocker login\ncat ~/.docker/config.json\ndocker logout\n</code></pre>\n<pre><code class="language-bash">cd dockerfile-sample-1/\n\ndocker build -t nperon/nodeapp .\ndocker container run --rm --publish 80:3000 --detach nperon/nodeapp\ndocker push nperon/nodeapp\n</code></pre>\n<h2>Using Prune to Keep Your Docker System Clean</h2>\n<p>Command to see space usage:</p>\n<pre><code class="language-bash">docker system df\n</code></pre>\n<p>Command to clean up just dangling images:</p>\n<pre><code class="language-bash">docker image prune\n</code></pre>\n<p>Command to clean up everything: </p>\n<pre><code class="language-bash">docker system prune\n</code></pre>\n<p>Command to remove all unused images: </p>\n<pre><code class="language-bash">docker image prune -a\n</code></pre>',id:"/home/nicolas/projects/workshop/src/pages/2021-05-16-docker-concepts/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2021-05-16T22:21:00.451Z",path:"/docker-concepts",title:"Docker concepts",excerpt:"",tags:["Docker","containers","networks","images"]}},next:null}}}});
//# sourceMappingURL=path---webpack-3f8ba061ecd10cb668a4.js.map