---
path: "/es6-toolbox"
date: "2020-11-07T17:46:11.271Z"
title: "ES6 toolbox"
tags: ['javascript', 'es6', 'toolbox', 'utils', 'functional programming', 'memoization']
excerpt: ""
---

## JSON stringify improved

The following is a function which stringifies an object to the required level.

```javascript
function stringify(val, depth, replacer, space) {
    depth = isNaN(+depth) ? 1 : depth;
    function _build(key, val, depth, o, a) {
        return !val || typeof val != 'object' ? val : (a=Array.isArray(val), JSON.stringify(val, function(k,v){ if (a || depth > 0) { if (replacer) v=replacer(k,v); if (!k) return (a=Array.isArray(v),val=v); !o && (o=a?[]:{}); o[k] = _build(k, v, a?depth:depth-1); } }), o||(a?[]:{}));
    }
    return JSON.stringify(_build('', val, depth), null, space);
}
```

The stringification level is the second argument of the function:

```javascript
const value={a:[12,2,{y:3,z:{q:1}}],s:'!',o:{x:1,o2:{y:1}}};
console.log(stringify(value, 0, null, 2));
console.log(stringify(value, 1, null, 2));
console.log(stringify(value, 2, null, 2));
```


## Memoization

In the following snippet, function memoization is implemented with some convenient functional programming features of javascript.

```javascript
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    }
    else {
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}
```
This memoize function can be 
used for instance in calculating Fibonacci 
series as follows:

```javascript
const memoizeFib = memoize(fib);

function fib(num) {
  switch (num) {
    case 0: {
      return 0;
    }
    case 1: {
      return 1;
    }
    default: {
      return memoizeFib(num-2)+memoizeFib(num-1); 
    }
  }
}
```

The following is a slightly different version of memoize.
Arguments of the function, which operate as the cache keys, 
are stringified: 

```javascript
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let stringifiedArgs = JSON.stringify(args);
    let result = cache[stringifiedArgs] = cache[stringifiedArgs] || fn(...args);
    return result;
  }
}
```
