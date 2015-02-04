var gulp = require('gulp');
var config = require('./config')

gulp.task('watch', function () {
  gulp.watch([ config.js.src + '/**', config.less.src + '/*' ], ['build:react']);
  gulp.watch([ config.html.src ], ['build:html']);
});

