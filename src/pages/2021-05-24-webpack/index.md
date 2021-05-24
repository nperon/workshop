---
path: "/webpack"
date: "2021-05-24T12:25:13.523Z"
title: "Webpack 5"
tags: ['Webpack', 'javascript']
excerpt: ""
---

## Udemy course repository

```bash
git clone git@github.com:vp-online-courses/webpack-tutorial.git
cd webpack-tutorial
```

## Starting a webpack project

```bash
npm install webpack webpack-cli --save-dev
npx webpack
npx webpack --stats detailed
touch webpack.config.js
npm run build
```


## Types of asset modules

- asset/resource: emits the file into the output folder and exports the url to that file. Use examples: large images or large font files.
- asset/inline: inlines the file in the bundle as a data uri without adding a new file in the output folder. Use examples: small pieces of data like svg.
- asset: a combination of asset/resource and asset/inline (8 kB is the default size limit)
- asset/source: plain text data. Inject the text as it is in the file into the javascript bundle as a string of text.

## Loaders

```bash
npm install css-loader style-loader --save-dev
npm install sass-loader node-sass --save-dev
npm install @babel/core babel-loader @babel/preset-env @babel/plugin-proposal-class-properties --save-dev
```

## A config file example

The following is an example of a webpack.config.js content followed with 
the corresponding index.html file. Additionaly, a file named ```./src/index.js``` is 
expected as the entry point of the app.

```js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024 // 3 kilobytes
                    }
                }
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ],
                        plugins: [ '@babel/plugin-proposal-class-properties' ]
                    }
                }
            }
        ]
    }
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./dist/bundle.js"></script>
</body>
</html>
```
