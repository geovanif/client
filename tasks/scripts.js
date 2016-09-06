/**
 * \tasks\scripts
 */
'use strict';

const gulp = require('gulp')
  , path = require('./boost').scripts
  , browserify = require('gulp-browserify')
  , rename = require('gulp-rename')
  , babelify = require('babelify')
  , uglify = require('gulp-uglify')
  , plumber = require('gulp-plumber')
  , notify = require('gulp-notify')
  , sourcemaps = require('gulp-sourcemaps');

module.exports = gulp.task('process:js', () => {
  let err = function (err) {
    notify.onError({
      title: "Gulp",
      subtitle: "Failure!",
      message: "Error: <%= error.message %>",
      sound: "Beep"
    })(err)

    this.emit('end')
  }
  
  gulp.src(path.src)
    .pipe(plumber({errorHandler: err}))
    .pipe(sourcemaps.init())
    .pipe(browserify(path.options))
    .pipe(sourcemaps.write())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(path.dist));
});
