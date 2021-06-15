const gulp = require('gulp');

module.exports = function fonts() {
  return gulp.src('src/css/fonts/*').pipe(gulp.dest('build/fonts'));
};
