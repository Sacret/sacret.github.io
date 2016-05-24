var gulp                 = require('gulp');
var scss                 = require('gulp-sass');
var size                 = require('gulp-filesize');

var handleErrors         = require('../utils/handleErrors');
var config               = require('../config').scss;

// combines all less together
gulp.task('scss', function () {

  'use strict';

  return gulp.src(config.src)
    .pipe(scss())
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
