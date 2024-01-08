const gulp = require('gulp'); "gulp";
const sass = require('gulp-sass')(require('sass'));


// Define paths
const inputStyles = './assets/styles/src/**/*.scss';
const outputStyles = './assets/styles/';

// Compile SCSS to CSS
gulp.task('styles', function () {
  return gulp.src(inputStyles)
    .pipe(sass())
    .pipe(gulp.dest(outputStyles))
});

// Watch for changes
gulp.task('watch', function () {
  gulp.watch(inputStyles, gulp.series('styles'));
});

// Default task
gulp.task('default', gulp.series('styles', 'watch'));
