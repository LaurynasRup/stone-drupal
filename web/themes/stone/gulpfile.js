const gulp = require("gulp");
("gulp");
const sass = require("gulp-sass")(require("sass"));
const babel = require("gulp-babel");

// Define paths
const inputStyles = "./assets/styles/src/**/*.scss";
const outputStyles = "./assets/styles/";

const scriptInput = "./assets/scripts/src/*.js";
const scriptOutput = "./assets/scripts/";

// Compile SCSS to CSS
gulp.task("styles", function () {
  return gulp.src(inputStyles).pipe(sass()).pipe(gulp.dest(outputStyles));
});

// scripts
gulp.task("scripts", function () {
  return gulp
    .src(scriptInput)
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(gulp.dest(scriptOutput));
});

// Watch for changes
gulp.task("watch", function () {
  gulp.watch(inputStyles, gulp.series("styles"));
  gulp.watch(scriptInput, gulp.series("scripts"));
});

// Default task
gulp.task("default", gulp.series("styles", "watch"));
