const gulp = require('gulp')
const { series, parallel } = require('gulp')
const { start } = require('./gulp/server')
const { appCSS, appJS } = require('./gulp/app')

module.exports.default = series(
    parallel(
        appCSS,
        appJS
    ),
    start
)