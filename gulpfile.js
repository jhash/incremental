var
gulp = require('gulp'),
gulp_jspm = require('gulp-jspm'),
batch = require('gulp-batch'),
webserver = require('gulp-webserver'),
watch = require('gulp-watch');

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true
    }));
});

gulp.task('build', function() {
  return gulp.src('lib/main.js')
    .pipe(gulp_jspm())
    .pipe(gulp.dest('build/'));
});

gulp.task('default', function() {
  watch('lib/**/*.js', batch(function (events, done) {
    gulp.start('build', done);
  }));
});
