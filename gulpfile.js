var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

gulp.task('bundle', function() {
    gulp.src('public/src/main.jsx', { read: false })
      .pipe(browserify({
      	transform: ['reactify'],
      	extensions: ['.jsx'],
      }))
      .pipe(rename('include.js'))
      .pipe(gulp.dest('./public/dist/'));
});

gulp.task('watch', function() {
  gulp.watch(['public/src/main.jsx'], ['bundle']);
});