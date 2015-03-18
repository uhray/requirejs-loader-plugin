var gulp = require('gulp'),
    child = require('child_process'),
    uglify = require('gulp-uglify');

gulp.task('build', function() {
  return gulp.src('loader.js')
             .pipe(uglify())
             .pipe(gulp.dest('dist'))
});

gulp.task('lint', function() {
  return child.spawn('./node_modules/.bin/jscs', ['./'],
                     { stdio: 'inherit' });
});
