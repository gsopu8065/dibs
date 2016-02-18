const gulp = require('gulp');
const del = require('del');
const browserSync = require('browser-sync');

// clean the contents of the distribution directory
gulp.task('clean', function () {
    return del('dist/**/*');
});

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });
    gulp.watch(['app/**/*', 'index.html', 'ninja.css']);
});
