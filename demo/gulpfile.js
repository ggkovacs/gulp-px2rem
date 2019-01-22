'use strict';

const gulp = require('gulp');
const px2rem = require('../index.js');

gulp.task('css', () => gulp.src('main.css')
  .pipe(px2rem())
  .pipe(gulp.dest('build')));
