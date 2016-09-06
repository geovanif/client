'use strict'

const gulp = require('gulp'),
	fs = require('fs'),
	path = require('path'),
	tasks = fs.readdirSync('./tasks')

tasks.forEach(task => {
	require(path.join(__dirname, 'tasks', task))
})

gulp.task('process', [
	'process:bower', 
	'process:styl', 
	'process:js',
	'process:html'
])

gulp.task('default', ['process', 'serve', 'watch'])