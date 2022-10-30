webpackJsonp([67335324583948],{500:function(e,n){e.exports={pathContext:{posts:[{html:'<h2>JSON stringify improved</h2>\n<p>The following is a function which stringifies an object to the required level.</p>\n<pre><code class="language-javascript">function stringify(val, depth, replacer, space) {\n    depth = isNaN(+depth) ? 1 : depth;\n    function _build(key, val, depth, o, a) {\n        return !val || typeof val != \'object\' ? val : (a=Array.isArray(val), JSON.stringify(val, function(k,v){ if (a || depth > 0) { if (replacer) v=replacer(k,v); if (!k) return (a=Array.isArray(v),val=v); !o &#x26;&#x26; (o=a?[]:{}); o[k] = _build(k, v, a?depth:depth-1); } }), o||(a?[]:{}));\n    }\n    return JSON.stringify(_build(\'\', val, depth), null, space);\n}\n</code></pre>\n<p>The stringification level is the second argument of the function:</p>\n<pre><code class="language-javascript">const value={a:[12,2,{y:3,z:{q:1}}],s:\'!\',o:{x:1,o2:{y:1}}};\nconsole.log(stringify(value, 0, null, 2));\nconsole.log(stringify(value, 1, null, 2));\nconsole.log(stringify(value, 2, null, 2));\n</code></pre>\n<h2>Memoization</h2>\n<p>In the following snippet, function memoization is implemented with some convenient functional programming features of javascript.</p>\n<pre><code class="language-javascript">const memoize = (fn) => {\n  let cache = {};\n  return (...args) => {\n    let n = args[0];\n    if (n in cache) {\n      return cache[n];\n    }\n    else {\n      let result = fn(n);\n      cache[n] = result;\n      return result;\n    }\n  }\n}\n</code></pre>\n<p>This memoize function can be\nused for instance in calculating Fibonacci\nseries as follows:</p>\n<pre><code class="language-javascript">const memoizeFib = memoize(fib);\n\nfunction fib(num) {\n  switch (num) {\n    case 0: {\n      return 0;\n    }\n    case 1: {\n      return 1;\n    }\n    default: {\n      return memoizeFib(num-2)+memoizeFib(num-1); \n    }\n  }\n}\n</code></pre>\n<p>The following is a slightly different version of memoize.\nArguments of the function, which operate as the cache keys,\nare stringified: </p>\n<pre><code class="language-javascript">const memoize = (fn) => {\n  let cache = {};\n  return (...args) => {\n    let stringifiedArgs = JSON.stringify(args);\n    let result = cache[stringifiedArgs] = cache[stringifiedArgs] || fn(...args);\n    return result;\n  }\n}\n</code></pre>',id:"/Users/nicolas/repos/github.com/nperon/workshop/src/pages/2018-07-21-es6-toolbox/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-11-07T17:46:11.271Z",path:"/es6-toolbox",title:"ES6 toolbox",excerpt:"",tags:["javascript","es6","toolbox","utils","functional programming","memoization"]}},{html:"<h2>Udemy course repository</h2>\n<pre><code class=\"language-bash\">git clone git@github.com:vp-online-courses/webpack-tutorial.git\ncd webpack-tutorial\n</code></pre>\n<h2>Starting a webpack project</h2>\n<pre><code class=\"language-bash\">npm install webpack webpack-cli --save-dev\nnpx webpack\nnpx webpack --stats detailed\ntouch webpack.config.js\nnpm run build\n</code></pre>\n<h2>Types of asset modules</h2>\n<ul>\n<li>asset/resource: emits the file into the output folder and exports the url to that file. Use examples: large images or large font files.</li>\n<li>asset/inline: inlines the file in the bundle as a data uri without adding a new file in the output folder. Use examples: small pieces of data like svg.</li>\n<li>asset: a combination of asset/resource and asset/inline (8 kB is the default size limit)</li>\n<li>asset/source: plain text data. Inject the text as it is in the file into the javascript bundle as a string of text.</li>\n</ul>\n<h2>Loaders</h2>\n<pre><code class=\"language-bash\">npm install css-loader style-loader --save-dev\nnpm install sass-loader node-sass --save-dev\nnpm install @babel/core babel-loader @babel/preset-env @babel/plugin-proposal-class-properties --save-dev\n</code></pre>\n<h2>A config file example</h2>\n<p>The following is an example of a webpack.config.js content followed with\nthe corresponding index.html file. Additionaly, a file named <code>./src/index.js</code> is\nexpected as the entry point of the app.</p>\n<pre><code class=\"language-js\">const path = require('path');\n\nmodule.exports = {\n    entry: './src/index.js',\n    output: {\n        filename: 'bundle.js',\n        path: path.resolve(__dirname, './dist'),\n        publicPath: 'dist/'\n    },\n    mode: 'none',\n    module: {\n        rules: [\n            {\n                test: /\\.(png|jpg)$/,\n                type: 'asset',\n                parser: {\n                    dataUrlCondition: {\n                        maxSize: 3 * 1024 // 3 kilobytes\n                    }\n                }\n            },\n            {\n                test: /\\.txt/,\n                type: 'asset/source'\n            },\n            {\n                test: /\\.css$/,\n                use: [\n                    'style-loader', 'css-loader'\n                ]\n            },\n            {\n                test: /\\.scss$/,\n                use: [\n                    'style-loader', 'css-loader', 'sass-loader'\n                ]\n            },\n            {\n                test: /\\.js$/,\n                exclude: /node_modules/,\n                use: {\n                    loader: 'babel-loader',\n                    options: {\n                        presets: [ '@babel/env' ],\n                        plugins: [ '@babel/plugin-proposal-class-properties' ]\n                    }\n                }\n            }\n        ]\n    }\n}\n</code></pre>\n<pre><code class=\"language-html\">&#x3C;!DOCTYPE html>\n&#x3C;html lang=\"en\">\n&#x3C;head>\n    &#x3C;meta charset=\"UTF-8\">\n    &#x3C;meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    &#x3C;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    &#x3C;title>Document&#x3C;/title>\n&#x3C;/head>\n&#x3C;body>\n    &#x3C;script src=\"./dist/bundle.js\">&#x3C;/script>\n&#x3C;/body>\n&#x3C;/html>\n</code></pre>",id:"/Users/nicolas/repos/github.com/nperon/workshop/src/pages/2021-05-24-webpack/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2021-05-24T12:25:13.523Z",path:"/webpack",title:"Webpack 5",excerpt:"",tags:["Webpack","javascript"]}}],tagName:"javascript"}}}});
//# sourceMappingURL=path---tags-javascript-11c1a67cd740d7de6d4f.js.map