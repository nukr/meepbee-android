var gulp = require('gulp');

gulp.task('build', ['copy:assets', 'build:html', 'build:webpack']);
