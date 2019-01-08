const {src,task,dest,watch} = require("gulp");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const terser = require('gulp-terser');


function cssTask(){
    src("./css/style.source.css")
    .pipe(autoprefixer({
        browsers: [
          "last 4 version"
        ],
      }))
    .pipe(rename("style.css"))
    .pipe(dest("./css/"))
    .pipe(cleanCSS())
    .pipe(rename("style.min.css"))
    .pipe(dest("./css/"));
}
function jsTask(){
    src("./js/script.js")
    .pipe(terser())
    .pipe(rename("script.min.js"))
    .pipe(dest("./js/"))
}
function build(cb){
    cssTask();
    jsTask();
    cb();
}

task("build",build);
task("watch",function(cb){
    watch("./css/style.source.css",{ ignoreInitial: false }, function css(cb){
        cssTask();
        cb();
    })
    watch("./js/script.js",{ ignoreInitial: false }, function js(cb){
        jsTask();
        cb();
    })
    cb();
})

exports.default = build;