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
gulp.task('serve', () => {

  bs.init({                     // * 1 * //
    files: [path.build.dirBuild + '/**'],           // * 2 * //
    port: process.env.port|| 4000,                          // * 3 * //
    server: {
      baseDir: path.build.dirBuild                  // * 4 * //
    }
  });
  

});

// Build Task
gulp.task(
  "build",
  gulp.series(
    "serve"
  )
);
