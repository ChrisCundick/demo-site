var gulp = require("gulp");
var watch = require("gulp-watch");

gulp.task("default", function() {
  console.log("Hurray you created a task.");
});

gulp.task("html", function() {
  console.log("Imagine something useful being done to your html done here.");
});

gulp.task("styles", function() {
  console.log("Imagine SASS or PostCSS tasks running here.");
});

gulp.task("watch", function() {
  watch("./app/index.html", function() {
    gulp.start("html");
  });
  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("styles");
  });
});
