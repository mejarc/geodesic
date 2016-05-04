'use strict';

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var parker      = require('gulp-parker');
var connect     = require('gulp-connect');

var bourbon     = require('bourbon');
var neat        = require('bourbon-neat');

var sassIncludes = [
  bourbon.includePaths,
  neat.includePaths
]

var SRC_DIR  = './scss/';
var DEST_DIR = './css/';

// Run a server and livereload on change
gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

// Compile Sass into CSS
gulp.task('sass', function() {
  gulp.src(SRC_DIR + '*.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: sassIncludes
    }).on('error', sass.logError))
    .pipe(gulp.dest(DEST_DIR))
    .pipe(parker())
    .pipe(connect.reload())
});
gulp.task('sass:watch', function() {
  gulp.watch(SRC_DIR + '**/*.scss', ['sass']);
});

// Display CSS statistics
gulp.task('parker', function() {
  return gulp.src(SRC_DIR + '*.scss')
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: sassIncludes
    }).on('error', sass.logError))
    .pipe(parker());
});

gulp.task('default', ['connect', 'sass:watch']);
