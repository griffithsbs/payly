'use strict';

var path = require('path');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // load .js and .jsx files through babel
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ],
    },
    resolve: {
        root: [
            path.resolve('./src')
        ],
        extensions: ['', '.js', '.jsx']
    },
    entry: [
        'babel-polyfill',
        './src/helloWorld', // to bundle this file into dist/payly.js, execute "webpack" at the project root directory
    ],
    output: {
        path: './dist/',
        filename: 'payly.js'
    }
};