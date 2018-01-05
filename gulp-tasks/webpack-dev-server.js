'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    argv = require('yargs').argv,
    named = require('vinyl-named');

argv.env = argv.env? argv.env: {};
if (argv.env.dev && argv.env.dev != 'false' && argv.env.dev != 'true') argv.env.dev = `"${argv.env.dev}"`;
const isDev = argv.env.dev? JSON.parse(argv.env.dev): true,
    isProd = !isDev;

console.log('isDev:', isDev)
console.log('isProd:', isProd)

exports.task = function(callback) {
    var webpackStream = require('webpack-stream'),
        path = require("path"),
        WebpackDevServer = require("webpack-dev-server"),
        webpack = webpackStream.webpack,
        options = require('../webpack.config.js'),
        // Start a webpack-dev-server
        compiler = webpack(options);

    return new WebpackDevServer(compiler, {
        // server and middleware options
        contentBase: path.join(__dirname, '..', "dist"),
        compress: true,
        // inline: true,
        // hot: true,
    }).listen(88, 'loc.git.io', function(err) {
        if(err) throw new $.util.PluginError("webpack-dev-server", err);
        // Server listening
        $.util.log("[webpack-dev-server]", "http://loc.git.io:88/");

        // keep the server alive or continue?
        callback();
    });
};
