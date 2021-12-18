const gulp = require('gulp')
const css = require('gulp-uglifycss')
const js = require('gulp-uglify')

function appCSS () {
    return gulp.src('./css/style.css')
        .pipe(css({ 'ugliComments': true }))
        .pipe(gulp.dest('public/css'))
}

function appJS () {
    return gulp.src('./js/*.js')
        .pipe(js())
        .pipe(gulp.dest('public/js'))
}

gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)

module.exports = {
    appCSS,
    appJS
}