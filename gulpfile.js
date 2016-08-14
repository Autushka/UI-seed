var gulp = require('gulp');

var requireDir = require('require-dir');
requireDir('./gulp/tasks');

gulp.task('dev', [
    'clean-build',
    'lib-js',
    'lib-css',
    'sass',
    'prepare-index-html'
], function () {
    gulp.watch('app/**/*.scss', ['sass']);
});