var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');

//server
gulp.task('server', function () {
  gulp.src('src')
    .pipe(server({
      livereload: true,
      open: true,
	  	port: 8088
    }));
});

//styles
gulp.task('style', function () {
	return gulp.src('src/sass/**/*.sass')
	.pipe(wait(1500))
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('src/css'));
});