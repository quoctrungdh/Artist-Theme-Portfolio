var conf = require('../config.json');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync:build', function() {
    browserSync.init({
        server: {
            baseDir: conf.base.build
        },
        reloadDebounce: 2000
    });
});

gulp.task('browser-sync:compile', function() {
    browserSync.init({
        server: {
            baseDir: conf.base.compile
        },
        reloadDebounce: 2000
    });
});

gulp.task('watch', function () {
    gulp.watch(conf.base.src + conf.path.sass + conf.files.sassAll, ['sass']);
    gulp.watch(conf.base.src + conf.path.js + conf.files.js, ['js:build']);
    gulp.watch(conf.base.src + conf.files.pug, ['pug:build']);
    gulp.watch([conf.base.src + conf.files.html, conf.base.src + conf.files.tmpl], ['html:build']);
    // gulp.watch(conf.base.build + conf.path.css + conf.files.css).on('change', browserSync.reload);
    // gulp.watch(conf.base.build + conf.path.js + conf.files.js).on('change', browserSync.reload);
    // gulp.watch(conf.base.src + conf.files.pug).on('change', browserSync.reload);
    // gulp.watch(conf.base.build + conf.files.html).on('change', browserSync.reload);
});