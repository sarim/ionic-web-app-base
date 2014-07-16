var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var sh = require('shelljs');
var connect = require('connect');
var chalk = require('chalk');
var opn = require('opn');

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('server', function(next) {
  var server = connect(),
      host = 'localhost',
      port = process.env.DEVPORT || 4000;

  server
    .use(connect.static('www'))
    .listen(port, next)
    .on('listening', function () {
        console.log(chalk.green('Started dev server on http://' + host + ':' + port));
        opn('http://' + host + ':' + port);
    });
});