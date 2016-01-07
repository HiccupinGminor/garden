"use strict";

const gulp = require('gulp');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const mocha = require('gulp-mocha');
const livereload = require('gulp-livereload');

gulp.task('bundle', function() {
  gulp.src('public/src/*.jsx', { read: false })
    .pipe(browserify({
    	transform: ['reactify', 'es6ify'],
    	extensions: ['.jsx'],
    }))
    .pipe(rename('include.js'))
    .pipe(gulp.dest('./public/dist/'))
    .pipe(livereload({ start: true }));
});

gulp.task('test-server', function() {
	return gulp.src('tests/*.js')
	.pipe(mocha());
});

gulp.task('watch-bundle', function() {
	if(gulp.tasks.bundle) { 
    gulp.start('bundle');
	}

  livereload.listen();
  gulp.watch(['public/src/*.jsx'], ['bundle']);
});