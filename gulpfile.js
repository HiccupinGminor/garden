var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

gulp.task('bundle', function() {
    gulp.src('public/src/*.jsx', { read: false })
      .pipe(browserify({
      	transform: ['reactify'],
      	extensions: ['.jsx'],
      }))
      .pipe(rename('include.js'))
      .pipe(gulp.dest('./public/dist/'));
});

gulp.task('watch-bundle', function() {
	if(gulp.tasks.bundle) { 
    gulp.start('bundle');
	}

  gulp.watch(['public/src/*.jsx'], ['bundle']);
});