var gulp        = require('gulp');
var concat      = require('gulp-concat');
var config      = require('../config').scripts;
var livereload  = require('gulp-livereload');
var handleErrors = require('../utils/handleErrors');

gulp.task('scripts', function () {

  'use strict';

  return gulp.src(config.files)
    .pipe(concat(config.name)) // Ignore unchanged files
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));

});
