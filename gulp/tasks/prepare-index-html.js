'use strict';

var gulp = require('gulp');
var config = require('../config');
var htmlReplace = require('gulp-html-replace');
var version = new Date().getTime();

gulp.task('prepare-index-html', function prepareIndexHtmlTask() {
    gulp.src(config.indexLocation)
        .pipe(htmlReplace({
            css: {
                tpl: '<link type="text/css" rel="stylesheet" href="%s">',
                src: 'src/build/css/app.css?' + version
            },
            libjs: {
                tpl: '<script src="%s"></script>',
                src: 'src/build/js/lib.js?' + version
            },
            libcss: {
                tpl: '<link type="text/css" rel="stylesheet" href="%s">',
                src: 'src/build/css/lib.css?' + version
            }
        }))
        .pipe(gulp.dest(''));
});
