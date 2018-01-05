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

    // console.info('=========================')
    // console.info(path.resolve(__dirname, '..', 'src', 'index.html'))
    // return;

    let firstBuildReady = false;

    function done(err, stats) {
        firstBuildReady = true;
        if (err) return;
        if (stats.hasErrors()) {
            console.error(`${stats.toString({
                colors: true,
            })}`);
        } else {
            console.info(`${stats.toString({
                colors: true,
            })}`);
        }
    }

    var webpackStream = require('webpack-stream'),
        webpack = webpackStream.webpack,
        options = require('../webpack.config.js');

    return gulp.src('./app/js/*.js')
        .pipe($.plumber(/*{
            errorHandler: 
        }*/))
        .pipe(named())
        .pipe(webpackStream(options, null, done))
        .pipe(gulp.dest('dist/js'))
        .on('data', function() {
            if (firstBuildReady && !callback.called) {
                callback.called = true;
                callback();
            }
        })
        .on('error', function() {
            if (!callback.called) {
                callback.called = true;
                callback();
            }
        });

};
