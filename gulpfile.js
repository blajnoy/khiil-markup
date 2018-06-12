var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat');

gulp.task('scss', function () {
    return gulp.src('css/parts/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer('last 5 versions'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'));
});

gulp.task('libsCss', function() {
    return gulp.src([
        './node_modules/fullpage.js/dist/jquery.fullpage.min.css',
        './node_modules/slick-carousel/slick/slick.css'
    ])
        .pipe(concat('libs.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('scripts', function() {
    return gulp.src('js/parts/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('libsScripts', function() {
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/fullpage.js/vendors/scrolloverflow.min.js',
        './node_modules/fullpage.js/dist/jquery.fullpage.min.js',
        './node_modules/slick-carousel/slick/slick.js',
        'js/vendors/*.js'
    ])
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('watch',['scss', 'libsCss', 'libsScripts'], function(){
    gulp.watch('css/parts/*.scss', ['scss']);
    gulp.watch('js/parts/*.js', ['scripts']);
    gulp.watch(['libsCss']);
    gulp.watch(['./node_modules/jquery/jquery.js'],['libsScripts']);
});

gulp.task('default', ['watch']);