var conf = require('../config.json');
var gulp = require('gulp');
var scp = require('gulp-scp2');
var minimist = require('minimist');
var runSequence = require('run-sequence');

var knownOptions = {
  string: 'env',
  default: {env: 'local'}
};
var options = minimist(process.argv.slice(2), knownOptions);
var src = conf.base.compile + '/**/*', 
    host, dest;

switch(options.env) {
    case 'prod':
        src = conf.base.compile + '/**/*';
        host = 'springfield.ekino.vn';
        dest = '/home/webadmin/htdocs/qcfactory/qc-factory-front';
        break;
    case 'dev':
        src = conf.base.build + '/**/*';
        host = 'landofooo.ekino.vn';
        dest = '/home/webadmin/htdocs/ekino/qc-factory-front';
        break;
    default:
        src = conf.base.compile + '/**/*';
        host = 'landofooo.ekino.vn';
        dest = '/home/webadmin/htdocs/ekino/qc-factory-front';
        break;
}
 
gulp.task('scp', function() {
    return gulp.src(src)
    .pipe(scp({
        host: host,
        username: 'webadmin',
        dest: dest,
        agent: process.env["SSH_AUTH_SOCK"],
        agentForward: true
    }))
    .on('error', function(err) {
        console.log(err);
    });
});

gulp.task('deploy', function (cb){
    runSequence('compile', 'scp', cb);
});