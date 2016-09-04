var conf = require('../config.json');
var pkg = require('../../package.json');
var gulp = require('gulp');
var replace = require('gulp-replace');
var jshint = require('gulp-jshint');
var minimist = require('minimist');

var knownOptions = {
  string: 'env',
  default: {env: 'local'}
};

gulp.task('js:build', function() {
  gulp.src([conf.base.src + conf.files.js])
    .pipe(jshint('./gulp/.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest(conf.base.build));
});