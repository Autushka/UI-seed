'use strict';

var gulp = require('gulp');
var config = require('../config');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('src/styles/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.root + '/css'));
});
