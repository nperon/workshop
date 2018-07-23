---
path: "/memoization"
date: "2018-07-21T18:49:39.175Z"
title: "Memoizing a function in es6"
tags: ['javascript', 'es6', 'functional programming', memoization]
excerpt: "Function memoization implemented in a short snippet with some convenient functional programming features of javascript"
---

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

In the following slightly different version of memoize,
arguments of the function, which operate as the cache keys, 
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
