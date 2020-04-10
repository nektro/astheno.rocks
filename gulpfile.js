const gulp = require("gulp");
const fileinclude = require("gulp-file-include");
const sitemap = require("gulp-sitemap");

const DEST = "bin";

gulp.task("html", function() {
    return gulp.src("./src/**/*.html")
    .pipe(fileinclude({}))
    .pipe(gulp.dest(DEST));
});

gulp.task("static", function() {
    return gulp.src("./src/**/*.{scss,css}", { dot: true })
    .pipe(gulp.dest(DEST));
});

gulp.task("sitemap", function() {
    return gulp.src("./src/**/*.html", { read:false })
    .pipe(sitemap({ siteUrl:"https://astheno.rocks" }))
    .pipe(gulp.dest(DEST));
});

gulp.task("default", gulp.series([
    "html",
    "static",
    "sitemap",
]));
