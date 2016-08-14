'use strict';

var config = require('../config');
var gulp = require('gulp');
var concat = require('gulp-concat');
var handleErrors = require('../utils/handle-errors');

gulp.task('lib-css', function () {
    return gulp.src(config.libcss.src)
        .pipe(concat('lib.css'))
        .pipe(gulp.dest(config.libcss.dest))
        .on('error', handleErrors)
        .on('end', function onEnd() {});
});
