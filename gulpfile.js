var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var gulpClean = require('gulp-clean');
var imagemin = require('gulp-imagemin');
var newer = require('gulp-newer');
var concat = require('gulp-concat');


var SOURCEPATHS = {

    sassSource: 'components/scss/*.scss',
    htmlSource: 'components/**/*.html',
    jsSource: 'components/**/*.js',
    imgSource: 'components/images/**',
    backendSource: 'server/**/*.js'

    };

var APPPATH = {

    root: 'FrontEndApp/',
    css: 'FrontEndApp/scss',
    img: 'FrontEndApp/images'

    };
var SERVERPATHS = {

    root: 'ProductionBackEnd/'

};


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

        browserSync.init([APPPATH.css + '/*.css', APPPATH.root + '/*.html'], {
            server: {
                baseDir : APPPATH.root
            }
        });

    });

gulp.task('sass', function() {
    return gulp.src(SOURCEPATHS.sassSource)
        .pipe(sass())
        .pipe(gulp.dest(APPPATH.css))
        .pipe(browserSync.stream())
        .pipe(autoprefixer());
    });

gulp.task('copyHTML', function () {
    gulp.src(SOURCEPATHS.htmlSource)
        .pipe(gulp.dest(APPPATH.root));
    });
gulp.task('copyJS', function () {
    gulp.src(SOURCEPATHS.jsSource)
        .pipe(concat('index.js'))
        .pipe(gulp.dest(APPPATH.root));
    });
gulp.task('copyBackEndJS', function () {
    gulp.src(SOURCEPATHS.backendSource)
        .pipe(gulp.dest(SERVERPATHS.root));
    });

gulp.task('copyImages', function () {
    return gulp.src(SOURCEPATHS.imgSource)
//        .pipe(newer(APPPATH.img))  No idea why this shit won't work.
//        .pipe(imagemin())
        .pipe(gulp.dest(APPPATH.img));
    });

gulp.task('watch', ['serve', 'sass', 'copyHTML', 'copyImages','copyJS','copyBackEndJS'], function() {

       gulp.watch(SOURCEPATHS.sassSource, ['sass']);
       gulp.watch(SOURCEPATHS.htmlSource, ['copyHTML']);
       gulp.watch(SOURCEPATHS.imgSource, ['copyImages']);
       gulp.watch(SOURCEPATHS.jsSource, ['copyJS']);
       gulp.watch(SOURCEPATHS.backendSource, ['copyBackEndJS']);
    });

gulp.task('default', ['serve', 'copyHTML', 'copyImages', 'watch', 'copyJS','copyBackEndJS']);
