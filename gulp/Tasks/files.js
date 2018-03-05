var gulp = require("gulp");
var cfg = require("../config");

console.log('cfg',cfg.src.img);

gulp.task("files", function() {
  return gulp
    .src(cfg.src.img + "/*.jpg")
    .pipe(gulp.dest(cfg.dest.img));
});

