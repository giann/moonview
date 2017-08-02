/*jshint esversion: 6 */
"use strict";

const webpack = require('webpack');
const path = require('path');
const BabiliPlugin = require("babili-webpack-plugin");

module.exports = [
    {
        entry: './src/moonview.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'moonview.min.js',
            library: 'moonview'
        },
        plugins: [
            new webpack.DefinePlugin({
                WEB: JSON.stringify(true),
            }),
            new BabiliPlugin()
        ]
    },
    {
        entry: './src/moonview.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'moonview.js',
            library: 'moonview'
        },
        plugins: [
            new webpack.DefinePlugin({
                WEB: JSON.stringify(true),
            })
        ]
    }
];
