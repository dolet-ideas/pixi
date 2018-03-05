var gulp = require("gulp");
var cfg = require("../config");

gulp.task(
  "server:watch",
  gulp.parallel("sass:watch", "ninjucks:watch", "js:watch", "server")
);

// var gulp = require('gulp');
// var cfg = require("../config");

// gulp.task(
//   "server:watch",
//   gulp.parallel("sass:watch", "ninjucks:watch", "webpack:watch", "server")
// );