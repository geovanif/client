/**
 * \tasks\rollback
 */
'use strict'

const gulp = require('gulp')
    , fs = require('fs')
    , ssh = require('gulp-ssh')
    , version = require('../package.json').version
    , options = require('./boost').roll
    , args = process.argv.splice(3, process.argv.length -1)

const config = {
  host: options.host,
  username: options.user,
  privateKey: fs.readFileSync(options.key)
}

let gulpSSH = new ssh({
  ignoreErrors: false,
  sshConfig: config
})

module.exports = gulp.task('rollback', () => {
  let target = args[1] + '.zip'

  let commands = [
    'cd' + options.path,
    'find . -type f -not -name \'*.zip\' -print0 | xargs -0 rm --',
    'find . -type d -print0 | xargs -0 rm -R',
    'unzip ' + target
  ]

  return gulpSSH.shell(commands, {filePath: 'test.log'})
    .pipe(gulp.dest('./'))
    .on('end', () => {
      console.log(fs.readFileSync('./test.log').toString())
    })
})
