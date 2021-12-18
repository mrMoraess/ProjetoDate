const gulp = require('gulp')
const server = require('gulp-webserver')

function start () {
    return gulp.src('./public')
        .pipe(server({
            port: 4004,
            livereload: true,
            open: true
        }))
}

gulp.task('start', start) 

module.exports = {
    start
}