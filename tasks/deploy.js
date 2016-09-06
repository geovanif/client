/**
 * \tasks\deploy
 */
'use strict'

const gulp = require('gulp')
    , zip = require('gulp-zip')
    , version = require('../package.json').version
    , rsync = require('rsyncwrapper')
    , options = require('./boost').sync

module.exports = gulp.task('zip', () => {
  version = version || '0.1.0'

  gulp.src(['./dist/**', '!./dist/*.zip'])
    .pipe(zip(version + '.zip'))
    .pipe(gulp.dest('./dist'))
})

module.exports = gulp.task('deploy', ['zip'], () => {
  rsync(options, (error, stdout, stderr, cmd) => {
    if (error) {
      console.log('Error: ' + error.message)
    } else {
      console.log('Successfully deployed files')
    }
  })
})
