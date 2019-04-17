var gulp = require("gulp");
var pug = require('gulp-pug');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload')
sass.compiler = require('node-sass');

// gulp.task('connect', function() {
    
// });

gulp.task("html", function() {
    console.log("html task is running.");
    return gulp.src('src/*.pug')
            .pipe(pug({pretty: true}))
            .pipe(gulp.dest('dist'))
            .pipe(livereload())
});


gulp.task("css", function () {
    console.log('css task is running.')
    return gulp.src('src/styles/main.sass')
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(gulp.dest('dist/styles/'))
    .pipe(livereload())
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.pug', gulp.series('html'));
    gulp.watch('src/styles/**/*.sass', gulp.series('css'));
    connect.server({
        livereload: true,
        root: 'dist/',
        port: 8000
    });
    livereload.listen();
});