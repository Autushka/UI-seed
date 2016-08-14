'use strict';

var config = require('../config');
var gulp = require('gulp');
var concat = require('gulp-concat');
var handleErrors = require('../utils/handle-errors');

gulp.task('lib-js', function () {
    return gulp.src(config.libjs.src)
        .pipe(concat('lib.js'))
        .pipe(gulp.dest(config.libjs.dest))
        .on('error', handleErrors)
        .on('end', function onEnd() {});
});
