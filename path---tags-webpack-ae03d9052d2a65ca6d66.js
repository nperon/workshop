webpackJsonp([0xa341cc436753],{484:function(e,n){e.exports={pathContext:{posts:[{html:"<h2>Udemy course repository</h2>\n<pre><code class=\"language-bash\">git clone git@github.com:vp-online-courses/webpack-tutorial.git\ncd webpack-tutorial\n</code></pre>\n<h2>Starting a webpack project</h2>\n<pre><code class=\"language-bash\">npm install webpack webpack-cli --save-dev\nnpx webpack\nnpx webpack --stats detailed\ntouch webpack.config.js\nnpm run build\n</code></pre>\n<h2>Types of asset modules</h2>\n<ul>\n<li>asset/resource: emits the file into the output folder and exports the url to that file. Use examples: large images or large font files.</li>\n<li>asset/inline: inlines the file in the bundle as a data uri without adding a new file in the output folder. Use examples: small pieces of data like svg.</li>\n<li>asset: a combination of asset/resource and asset/inline (8 kB is the default size limit)</li>\n<li>asset/source: plain text data. Inject the text as it is in the file into the javascript bundle as a string of text.</li>\n</ul>\n<h2>Loaders</h2>\n<pre><code class=\"language-bash\">npm install css-loader style-loader --save-dev\nnpm install sass-loader node-sass --save-dev\nnpm install @babel/core babel-loader @babel/preset-env @babel/plugin-proposal-class-properties --save-dev\n</code></pre>\n<h2>A config file example</h2>\n<p>The following is an example of a webpack.config.js content followed with\nthe corresponding index.html file. Additionaly, a file named <code>./src/index.js</code> is\nexpected as the entry point of the app.</p>\n<pre><code class=\"language-js\">const path = require('path');\n\nmodule.exports = {\n    entry: './src/index.js',\n    output: {\n        filename: 'bundle.js',\n        path: path.resolve(__dirname, './dist'),\n        publicPath: 'dist/'\n    },\n    mode: 'none',\n    module: {\n        rules: [\n            {\n                test: /\\.(png|jpg)$/,\n                type: 'asset',\n                parser: {\n                    dataUrlCondition: {\n                        maxSize: 3 * 1024 // 3 kilobytes\n                    }\n                }\n            },\n            {\n                test: /\\.txt/,\n                type: 'asset/source'\n            },\n            {\n                test: /\\.css$/,\n                use: [\n                    'style-loader', 'css-loader'\n                ]\n            },\n            {\n                test: /\\.scss$/,\n                use: [\n                    'style-loader', 'css-loader', 'sass-loader'\n                ]\n            },\n            {\n                test: /\\.js$/,\n                exclude: /node_modules/,\n                use: {\n                    loader: 'babel-loader',\n                    options: {\n                        presets: [ '@babel/env' ],\n                        plugins: [ '@babel/plugin-proposal-class-properties' ]\n                    }\n                }\n            }\n        ]\n    }\n}\n</code></pre>\n<pre><code class=\"language-html\">&#x3C;!DOCTYPE html>\n&#x3C;html lang=\"en\">\n&#x3C;head>\n    &#x3C;meta charset=\"UTF-8\">\n    &#x3C;meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    &#x3C;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    &#x3C;title>Document&#x3C;/title>\n&#x3C;/head>\n&#x3C;body>\n    &#x3C;script src=\"./dist/bundle.js\">&#x3C;/script>\n&#x3C;/body>\n&#x3C;/html>\n</code></pre>",id:"/home/nicolas/projects/workshop/src/pages/2021-05-24-webpack/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2021-05-24T12:25:13.523Z",path:"/webpack",title:"Webpack 5",excerpt:"",tags:["Webpack","javascript"]}}],tagName:"Webpack"}}}});
//# sourceMappingURL=path---tags-webpack-ae03d9052d2a65ca6d66.js.map