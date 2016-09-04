var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (cb){
    return runSequence('clean', ['copy:build', 'html:build', 'pug:build', 'sass', 'js:build'], cb);
});