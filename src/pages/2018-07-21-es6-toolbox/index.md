---
path: "/es6-toolbox"
date: "2018-07-21T18:49:39.175Z"
title: "ES6 toolbox"
tags: ['javascript', 'es6', 'toolbox', 'utils', 'functional programming', 'memoization']
excerpt: ""
---



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
