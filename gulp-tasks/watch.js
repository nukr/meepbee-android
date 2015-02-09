var gulp = require('gulp');
var config = require('./config')

gulp.task('watch', function () {
  gulp.watch('./src-www/**/**', ['rebuild']);
  gulp.watch([ config.html.src ], ['build:html']);
});

