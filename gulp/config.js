
var destPath = 'build';

var config = {
  src: {
    lib: "src/lib",
    sass: "src/sass",
    img: "src/img",
    root: "src",
    js: "src/js"
  },
  dest: {
    css: destPath + "/css",
    js: destPath + "/js",
    img: destPath + "/img",
    html: destPath,
    lib: destPath + "/lib"
  }
};

module.exports = config;