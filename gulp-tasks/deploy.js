'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

exports.task = function(callback) {

    return gulp.src('./dist/**/*')
        .pipe($.ghPages({
            branch: 'master',
            // remoteUrl: 'blabla.git',
            // origin: 'origin',
            // message: 'Update [timestamp]'
        }));

};
