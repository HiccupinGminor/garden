"use strict";

const gulp = require('gulp'),
      browserify = require('gulp-browserify'),
      rename = require('gulp-rename'),
      mocha = require('gulp-mocha'),
      livereload = require('gulp-livereload'),
      sass = require('gulp-sass');

gulp.task('bundle', function() {
  gulp.src('public/src/*.jsx', { read: false })
    .pipe(browserify({
    	transform: ['reactify', 'es6ify'],
    	extensions: ['.jsx', '.js'],
    }))
    .pipe(rename('include.js'))
    .pipe(gulp.dest('./public/dist/'))
    .pipe(livereload({ start: true }));
});

gulp.task('test-server', function() {
	return gulp.src('tests/*.js')
	.pipe(mocha());
});

gulp.task('js:watch', function() {
	if(gulp.tasks.bundle) { 
    gulp.start('bundle');
	}

  livereload.listen();
  gulp.watch('public/src/*.jsx', ['bundle']);
});

gulp.task('sass', function () {
  gulp.src('./public/assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/assets/css/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./public/assets/scss/*.scss', ['sass']);
});