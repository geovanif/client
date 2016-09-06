'use strict';

const usrKey = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME']

module.exports = {
  styl: {
    'src': './src/assets/stylus/*.styl',
    'dist': './src/assets/styles',
    'watch': './src/assets/stylus',
    'compiled': './dist/assets/styles'
  },

  scripts: {
    'src': ['./src/assets/scripts/*.js', '!./src/assets/scripts/*.min.js'],
    'watch': './src/assets/scripts',
    'dist': './src/assets/scripts',
    'min': './src/assets/scripts/*.min.js',
    'compiled': './dist/assets/scripts',
    'options' : {
      'transform': ['babelify']
    }
  },

  html: {
    'src': './src/**/*.html',
    'watch': './src',
    'dist': './src',
    'compiled': './dist'
  },

  sync: {
    src: './dist/*',
    dest: 'user@host:path/to/deploy',
    recursive: true,
    args: ['--verbose'],
    delete: true, // deleteAll
    compare: 'checksum',
    exclude: [],
    include: [],
    onStdout: data => console.log(data.toString())
  },

  roll: {
    host: 'hostname',
    user: 'username',
    key: usrKey + '/.ssh/id_rsa',
    path: 'remote/path'
  }
};
