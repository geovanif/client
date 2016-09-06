'use strict'

const gulp = require('gulp')
  , path = require('./boost').html
  , plumber = require('gulp-plumber')
  , notify = require('gulp-notify')

module.exports = gulp.task('process:html', () => {
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
    .pipe(gulp.dest(path.dist))
})
