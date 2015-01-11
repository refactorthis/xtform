'use strict';

var path = require('path'),
    streamqueue = require('streamqueue'),
    gulp = require('gulp'),
    extend = require('extend'),
    karma = require('karma').server,
    karmaConfig = require('./karma.conf'),
    config = require('./build.conf.js'),
    plugins = require('gulp-load-plugins')();

var ciMode = false;

gulp.task('clean', function () {
    return gulp
        .src([
            config.buildFolder,
            config.coverageFolder,
            config.docs.build
        ], {read: false})
        .pipe(plugins.clean());
});

gulp.task('scripts', function () {

    return gulp.src(config.srcJs)

        // jshint
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(plugins.if(ciMode, plugins.jshint.reporter('fail')))

        // package
        .pipe(plugins.concat(config.buildJsFilename))
        .pipe(plugins.header(config.closureStart))
        .pipe(plugins.footer(config.closureEnd))
        .pipe(plugins.header(config.banner))
        .pipe(gulp.dest(config.buildFolder))
        .pipe(plugins.filesize())

        // minify
        .pipe(plugins.uglify())
        .pipe(plugins.rename({extname: '.min.js'}))
        .pipe(gulp.dest(config.buildFolder))
        .pipe(plugins.filesize())
        .on('error', plugins.util.log);

});

gulp.task('templates', ['scripts'], function () {

    return streamqueue({objectMode: true},

        // read built scripts file
        gulp.src(config.buildFolder + '/' + config.buildJsFilename),

        // convert templates to JS
        gulp.src(config.views)
            .pipe(plugins.ngHtml2js({
                declareModule: false,
                moduleName: 'xtForm',
                prefix: 'xtForm/'
            })))

        // concat with JS and save unminified
        .pipe(plugins.concat(config.templateJsFilename))
        .pipe(gulp.dest(config.buildFolder))

        // minify
        .pipe(plugins.uglify())
        .pipe(plugins.rename({extname: '.min.js'}))
        .pipe(gulp.dest(config.buildFolder))
        .pipe(plugins.filesize())
        .on('error', plugins.util.log);

});

gulp.task('docs', ['default'], function () {

    // Todo give the docs build a cleanup
    gulp.src('bower_components/google-code-prettify/**/*')
        .pipe(gulp.dest('docs/dist/google-code-prettify'));

    gulp.src('dist/*').pipe(gulp.dest('docs/dist/'));

    gulp.src(config.docs.views)
        .pipe(plugins.ngHtml2js({
            declareModule: false,
            moduleName: 'sample',
            prefix: 'templates/'
        }))
        .pipe(plugins.concat(config.docs.templateJsFilename))
        .pipe(plugins.header(config.docs.templateBanner))
        .pipe(gulp.dest(config.docs.build));
});

gulp.task('docs:deploy', function () {
    return gulp.src(config.docs.items)
        .pipe(plugins.ghPages());
});

gulp.task('test', function () {

    karmaConfig({
        set: function (testConfig) {

            extend(testConfig, {
                singleRun: ciMode,
                autoWatch: !ciMode,
                browsers: ['PhantomJS']
            });

            karma.start(testConfig, function (exitCode) {
                plugins.util.log('Karma has exited with ' + exitCode);
                process.exit(exitCode);
            });
        }
    });
});

gulp.task('watch', function () {
    return gulp.watch(config.srcJs, ['scripts', 'templates']);
});

gulp.task('ci', function () {
    ciMode = true;
    return gulp.start(['clean', 'scripts', 'templates', 'test']);
});

gulp.task('default', ['scripts', 'templates']);