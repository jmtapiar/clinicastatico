"use strict";

const sass = require("gulp-sass")(require("sass"));
const gulp = require('gulp'),
  connect = require('gulp-connect');
const sourcemaps = require("gulp-sourcemaps");
const fileinclude = require("gulp-file-include");
const autoprefixer = require("gulp-autoprefixer");
const bs = require("browser-sync").create();
const rimraf = require("rimraf");
const comments = require("gulp-header-comment");

var path = {
  src: {
    html: "source/*.html",
    others: "source/*.+(php|ico|png)",
    htminc: "source/partials/**/*.htm",
    incdir: "source/partials/",
    plugins: "source/plugins/**/*.*",
    js: "source/js/*.js",
    scss: "source/scss/**/*.scss",
    images: "source/images/**/*.+(png|jpg|gif|svg)",
  },
  build: {
    dirBuild: "theme/",
    dirDev: "theme/",
  },
};

// iniciar
gulp.task('serveprod', async function() {
  connect.server({
    root: [path.build.dirBuild],
    port: process.env.PORT || 5000, // localhost:5000
    livereload: false
  });
});

// Build Task
gulp.task(
  "build",
  gulp.series(
    "serveprod"
  )
);
