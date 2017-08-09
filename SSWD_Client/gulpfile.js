const gulp = require('gulp'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    cached = require('gulp-cached'),
    sourcemap = require('gulp-sourcemaps'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    SRCURL = './src/',
    DESURL = './';

gulp.task('js', function () {
    gulp.src(SRCURL+'script/**/*.js')
        .pipe(cached('es6_cached'))
        .pipe(sourcemap.init())
        .pipe(plumber())
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(sourcemap.write('.'))
        .pipe(gulp.dest(DESURL+'script'))
})

gulp.task('uglify', function () {
    gulp.src(SRCURL+'lib/**/*.js')
        .pipe(cached('uglify_cached'))
        .pipe(sourcemap.init())
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(sourcemap.write('.'))
        .pipe(gulp.dest(DESURL+'lib'))
})

gulp.task('scss', function () {
    gulp.src(SRCURL+'style/**/*.scss')
        .pipe(cached('scss_cached'))
        .pipe(sourcemap.init())
        .pipe(plumber())
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(sourcemap.write('.'))
        .pipe(gulp.dest(DESURL+'style'))
})

gulp.task('clean', function () {
    del([
        DESURL+'script/**/*.*',
        DESURL+'style/**/*.*'
    ])
})

gulp.task('watch', ['clean'], function () {
    gulp.start('js');
    gulp.start('uglify');
    gulp.start('scss');
    gulp.watch([SRCURL+'script/**/*.js'], ['js']);
    gulp.watch([SRCURL+'style/**/*.scss'], ['scss']);
})