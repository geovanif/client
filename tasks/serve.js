/**
 * \tasks\serve
 */
'use strict';

const gulp = require('gulp')
  , path = require('./boost')
  , bs = require('browser-sync');

const reload = bs.reload;

module.exports = gulp.task('serve', () => {
  bs({
    open: false,
    notify: false,
    server: {
      baseDir: './src',
      middleware: (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*'),
        next();
      }
    }
  });
});

module.exports = gulp.task('watch', () => {
  gulp.watch('./src/assets/components', ['process:bower', reload]);
  gulp.watch(['**/*.js', '!**/*.min.js'], {cwd: path.scripts.watch}, ['process:js', reload])
  gulp.watch('**/*.styl', {cwd: path.styl.watch}, ['process:styl', reload]);
  gulp.watch('**/*.html', {cwd: path.html.watch}, ['process:html', reload]);
});
