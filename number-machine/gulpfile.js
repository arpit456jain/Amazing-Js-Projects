"use strict";
var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify-es").default;
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var maps = require("gulp-sourcemaps");
var del = require("del");
var plumber = require("gulp-plumber");

gulp.task("concatScripts", function () {
  return gulp
    .src(["js/jquery.js", "js/prism.js", "js/main.js"])
    .pipe(plumber())
    .pipe(maps.init())
    .pipe(concat("app.js"))
    .pipe(maps.write("./"))
    .pipe(gulp.dest("js"));
});

gulp.task("minifyScripts", gulp.series("concatScripts", function () {
  return gulp
    .src("js/app.js")
    .pipe(uglify())
    .pipe(rename("app.min.js"))
    .pipe(gulp.dest("js"));
}));

gulp.task("compileSass", function () {
  return gulp
    .src("scss/app.scss")
    .pipe(plumber())
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write("./"))
    .pipe(gulp.dest("css"));
});

gulp.task("watchFiles", function () {

  var files = ['js/jquery.js', 'js/main.js'];

  gulp.watch("scss/**/*.scss", gulp.parallel("compileSass"));
  gulp.watch(files, gulp.parallel("concatScripts"));
});

gulp.task("clean", function () {
  del(["dist", "css/application.css*", "js/app*.js*"]);
});


gulp.task("build", gulp.series("minifyScripts", "compileSass", function () {
  return gulp
    .src(
      [
        "css/app.css",
        "js/app.js",
        "img/**",
        "index.html",
        "about.html",
        "contact.html"
      ],
      { base: "./" }
    )
    .pipe(gulp.dest("dist"));
}));

gulp.task("serve", gulp.parallel("watchFiles"));

gulp.task("default", gulp.series("clean", function () {
  gulp.start("build");
}));
