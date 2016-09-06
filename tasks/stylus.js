/**
 * \task\stylus
 */
'use strict';

const gulp = require('gulp')
  , path = require('./boost').styl
  , styl = require('gulp-stylus')
  , rupture = require('rupture')
  , rename = require('gulp-rename')
  , plumber = require('gulp-plumber')
  , notify = require('gulp-notify')
  , combinemq = require('gulp-combine-media-queries')
  , sourcemaps = require('gulp-sourcemaps');

module.exports = gulp.task('process:styl', () => {
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
    .pipe(styl({
      'hoist atrules': true,
      use: [rupture()]
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    // .pipe(combinemq())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.dist));
});
