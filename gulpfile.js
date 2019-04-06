"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();

gulp.task('style', function () {
  return gulp.src('./sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('./css'))
    .pipe(server.stream());
});

gulp.task('serve', function() {
   server.init({
      server: ".",
      notify: false,
      open: true,
      cors: true,
      ui: false
    });

  gulp.watch('./sass/**/*.{scss,sass}', gulp.series("style"));
  gulp.watch('*.html').on('change', server.reload);
});

gulp.task("build", gulp.series("style"));
gulp.task("start", gulp.series("style", "serve"));
