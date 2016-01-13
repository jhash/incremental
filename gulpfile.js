var gulp = require('gulp');
var gulp_jspm = require('gulp-jspm');

gulp.task('default', function(){
    return gulp.src('lib/main.js')
        .pipe(gulp_jspm())
        .pipe(gulp.dest(''));
});
