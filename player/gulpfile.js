const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

gulp.task('browserify', () => {
    return browserify({ entries: './test.js', debug: true }) // Adjust entry point
        .bundle()
        .pipe(source('bundle.js')) // Output file name
        .pipe(buffer())
        .pipe(gulp.dest('./dist')); 
});

gulp.task('default', gulp.series('browserify'));
