var gulp = require('gulp'),
	livereload = require('gulp-livereload');

gulp.task('watch', function() {
  livereload.listen();
	//  gulp.watch('less/*.less', ['less']);
  gulp.watch(['**']).on('change', livereload.changed);
});

gulp.task('default', function() {
// nada
});

