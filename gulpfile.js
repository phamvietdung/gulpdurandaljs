var gulp = require('gulp');
var watch = require('gulp-watch');
var durandal = require('gulp-durandal');
gulp.task('build', function(){
    return durandal({
            baseDir: 'project/app',    //Same as default, so not really required.
            main: 'main.js',   //Same as default, so not really required.
            output: 'main-built.js', //Same as default, so not really required.
                               //WARNING: Change filename if output and input dirs are the same to avoid input overwrites.
            almond: true,
            minify: true
        })
        .pipe(gulp.dest('./dist/'));
});