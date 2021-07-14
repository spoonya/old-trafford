const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports = function imageMinify() {
  return gulp
    .src('src/images/**/*.{gif,png,jpg,jpeg,svg,webp}')
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({
          quality: 90,
          progressive: true
        }),
        imagemin.optipng({ optimizationLevel: 2 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
        })
      ])
    )
    .pipe(gulp.dest('build/images'));
};
