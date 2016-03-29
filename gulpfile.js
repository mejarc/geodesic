'use strict';

var gulp     = require('gulp');
var sass     = require('gulp-sass');
var parker   = require('gulp-parker');

var SRC_DIR  = './src/';
var DEST_DIR = './css/';

// Compile Sass into CSS
gulp.task('sass', function() {
  gulp.src(SRC_DIR + '**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest(DEST_DIR))
});
gulp.task('sass:watch', function() {
  gulp.watch(SRC_DIR + '**/*.scss', ['sass']);
});

// Display CSS statistics
gulp.task('parker', function() {
  return gulp.src(SRC_DIR + '*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss({advanced: false}))
    .pipe(parker());
});

gulp.task('default', ['sass:watch']);
