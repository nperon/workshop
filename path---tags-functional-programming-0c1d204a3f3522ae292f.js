webpackJsonp([0xe93be1ca5c12],{467:function(n,e){n.exports={pathContext:{posts:[{html:'<h2>JSON stringify improved</h2>\n<p>The following is a function which stringifies an object to the required level.</p>\n<pre><code class="language-javascript">function stringify(val, depth, replacer, space) {\n    depth = isNaN(+depth) ? 1 : depth;\n    function _build(key, val, depth, o, a) {\n        return !val || typeof val != \'object\' ? val : (a=Array.isArray(val), JSON.stringify(val, function(k,v){ if (a || depth > 0) { if (replacer) v=replacer(k,v); if (!k) return (a=Array.isArray(v),val=v); !o &#x26;&#x26; (o=a?[]:{}); o[k] = _build(k, v, a?depth:depth-1); } }), o||(a?[]:{}));\n    }\n    return JSON.stringify(_build(\'\', val, depth), null, space);\n}\n</code></pre>\n<p>The stringification level is the second argument of the function:</p>\n<pre><code class="language-javascript">const value={a:[12,2,{y:3,z:{q:1}}],s:\'!\',o:{x:1,o2:{y:1}}};\nconsole.log(stringify(value, 0, null, 2));\nconsole.log(stringify(value, 1, null, 2));\nconsole.log(stringify(value, 2, null, 2));\n</code></pre>\n<h2>Memoization</h2>\n<p>In the following snippet, function memoization is implemented with some convenient functional programming features of javascript.</p>\n<pre><code class="language-javascript">const memoize = (fn) => {\n  let cache = {};\n  return (...args) => {\n    let n = args[0];\n    if (n in cache) {\n      return cache[n];\n    }\n    else {\n      let result = fn(n);\n      cache[n] = result;\n      return result;\n    }\n  }\n}\n</code></pre>\n<p>This memoize function can be\nused for instance in calculating Fibonacci\nseries as follows:</p>\n<pre><code class="language-javascript">const memoizeFib = memoize(fib);\n\nfunction fib(num) {\n  switch (num) {\n    case 0: {\n      return 0;\n    }\n    case 1: {\n      return 1;\n    }\n    default: {\n      return memoizeFib(num-2)+memoizeFib(num-1); \n    }\n  }\n}\n</code></pre>\n<p>The following is a slightly different version of memoize.\nArguments of the function, which operate as the cache keys,\nare stringified: </p>\n<pre><code class="language-javascript">const memoize = (fn) => {\n  let cache = {};\n  return (...args) => {\n    let stringifiedArgs = JSON.stringify(args);\n    let result = cache[stringifiedArgs] = cache[stringifiedArgs] || fn(...args);\n    return result;\n  }\n}\n</code></pre>',id:"/home/nicolas/projects/workshop/src/pages/2018-07-21-es6-toolbox/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-11-07T17:46:11.271Z",path:"/es6-toolbox",title:"ES6 toolbox",excerpt:"",tags:["javascript","es6","toolbox","utils","functional programming","memoization"]}}],tagName:"functional programming"}}}});
//# sourceMappingURL=path---tags-functional-programming-0c1d204a3f3522ae292f.js.map