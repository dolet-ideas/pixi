var gulp = require("gulp");
var cfg = require("../config");
require("./js");
require("./browser-sync");
require("./clean");
require("./nunjucks");
require("./sass");
require("./watch");
require("./commons");

gulp.task(
  "default",
  gulp.series("commons", "js", "sass", "nunjucks", "server:watch")
);

// var gulp = require('gulp');
// var cfg = require("../config");
// require('./js');
// require('./browser-sync');
// require('./clean');
// require('./nunjucks');
// require('./sass');
// require('./files');
// require('./watch');



// gulp.task(
//   "default",
//   gulp.series("webpack", "files", "sass", "nunjucks", "server:watch")
// );