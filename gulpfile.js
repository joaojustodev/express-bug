"use strict";

const path = require("node:path");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const sassPath = path.join(__dirname, "src", "sass", "**", "*.scss");
const cssPath = path.join(__dirname, "src", "public", "styles");

gulp.task("sass", buildStyles);

function buildStyles() {
  return gulp
    .src(sassPath)
    .pipe(
      sass({ outputStyle: "compressed", includePaths: sassPath }).on(
        "error",
        sass.logError
      )
    )
    .pipe(gulp.dest(cssPath));
}

exports.watch = gulp
  .watch(sassPath, buildStyles)
  .on("change", (path, state) => {
    console.log(`the path: ${path} has changed`);
  });
