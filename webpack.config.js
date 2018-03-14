/* eslint-disable */
'use strict';

var path = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index', // to bundle this file into dist/index.js, execute "webpack" at the project root directory
    ],

    output: {
        path: path.resolve('./dist'),
        filename: 'index.js',
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/, // load .js and .jsx files through babel
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            },
        ],
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve('./src'),
        ],
        extensions: ['.js', '.jsx'],
    },
    
};