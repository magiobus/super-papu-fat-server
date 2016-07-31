'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');

gulp.task('sass', function () {
  return gulp.src('./public/stylesheets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
}, function(){
  concatCss
});


gulp.task('sass:watch', function () {
  gulp.watch('./public/stylesheets/**/*.scss', ['sass']);
});
