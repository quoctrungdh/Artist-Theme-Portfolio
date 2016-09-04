var conf = require('../config.json');
var pkg = require('../../package.json');
var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');
var pug = require('gulp-pug');
var inject = require('gulp-inject');

gulp.task('pug:build', function() {
  var my_locals = {
    "appName": pkg.name
  };

  gulp.src([conf.base.src + conf.files.pug])
    .pipe(pug({
      locals: my_locals,
      pretty: true
    }))
    .pipe(inject(gulp.src(conf.vendor.jsCss, {read: false}), {addRootSlash: false}))
    .pipe(gulp.dest(conf.base.build))
    .pipe(htmlhint.reporter());
});
