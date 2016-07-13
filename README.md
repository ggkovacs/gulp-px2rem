# [gulp](https://github.com/gulpjs/gulp)-px2rem [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]
Version: **1.0.10**

This is a Gulp plugin for [node-px2rem](https://github.com/ggkovacs/node-px2rem).

## Installation

Run `npm install gulp-px2rem`

## Usage

```js
var px2rem = require('gulp-px2rem');

gulp.task('css', function() {
    gulp.src('css/**/*.css')
        .pipe(px2rem())
        .pipe(gulp.dest('css'));
});
```

## Options

Pass in two option objects. The first one for [node-px2rem](https://github.com/ggkovacs/node-px2rem) options, the second for [postcss](https://github.com/postcss/postcss) options.

```js
var px2rem = require('gulp-px2rem');

var px2remOptions = {
    replace: false
};

var postCssOptions = {
    map: true  
};

gulp.task('css', function() {
    gulp.src('css/**/*.css')
        .pipe(px2rem(px2remOptions, postCssOptions))
        .pipe(gulp.dest('css'));
});
```

# License
MIT © 2016 Gergely Kovács (gg.kovacs@gmail.com)

[npm-image]: https://badge.fury.io/js/gulp-px2rem.svg
[npm-url]: https://npmjs.org/package/gulp-px2rem
[daviddm-image]: https://david-dm.org/ggkovacs/gulp-px2rem.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/ggkovacs/gulp-px2rem
