'use strict';

var gulp = require('gulp');
var px2rem = require('../index.js');

gulp.task('css', function() {
    gulp.src('main.css')
        .pipe(px2rem())
        .pipe(gulp.dest('build'));
});
