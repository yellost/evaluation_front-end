// ***************************
// 1. Déclaration des variables
// ***************************
var gulp =          require('gulp');
var sass =          require('gulp-sass');
var rename =        require("gulp-rename");
var minify =        require('gulp-minify');
var autoprefixer =  require('gulp-autoprefixer');
var browserSync =   require('browser-sync');
var smushit =       require('gulp-smushit');

var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var imageminZopfli = require('imagemin-zopfli');
var imageminMozjpeg = require('imagemin-mozjpeg'); //need to run 'brew install libpng'
var imageminGiflossy = require('imagemin-giflossy');

// *************
// 2. Mes tâches
// *************

// Moulinette SASS
gulp.task('sassification', function () {
    return gulp.src('./src/css/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest('./dist/css'));
});

// Moulinette JS
gulp.task('jsification', function () {
    return gulp.src('./src/js/*.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            noSource:true
        }))
        .pipe(gulp.dest('./dist/js'));
});

// Moulinette HTML
gulp.task('htmlification', function () {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'));
});

// Browser Sync
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
});

// // Smushage
// gulp.task('compress', function () {
//     return gulp.src('./src/img/*.{jpg,png}')
//         .pipe(smushit())
//         .pipe(gulp.dest('./dist/img/'));
// });

// // SVG
// gulp.task('svgification', function () {
//     return gulp.src('./src/img/*.svg')
//         .pipe(gulp.dest('./dist/img/'));
// });

//compress all images
gulp.task('imagemin', function() {
    return gulp.src(['./src/img/*.{gif,png,jpg}'])
        .pipe(cache(imagemin([
            //png
            imageminPngquant({
                speed: 1,
                quality: 98 //lossy settings
            }),
            imageminZopfli({
                more: true
                // iterations: 50 // very slow but more effective
            }),
            //gif
            // imagemin.gifsicle({
            //     interlaced: true,
            //     optimizationLevel: 3
            // }),
            //gif very light lossy, use only one of gifsicle or Giflossy
            imageminGiflossy({
                optimizationLevel: 3,
                optimize: 3, //keep-empty: Preserve empty transparent frames
                lossy: 2
            }),
            //svg
            imagemin.svgo({
                plugins: [{
                    removeViewBox: false
                }]
            }),
            //jpg lossless
            imagemin.jpegtran({
                progressive: true
            }),
            //jpg very light lossy, use vs jpegtran
            imageminMozjpeg({
                quality: 90
            })
        ])))
        .pipe(gulp.dest('./dist/img/'));
});

// ***********************
// 3. Exécution des tâches
// ***********************
gulp.task('observe', gulp.parallel('imagemin', 'htmlification', 'sassification', 'jsification','browser-sync', function () {
    gulp.watch('./src/css/**/*.scss', gulp.series('sassification'));
    gulp.watch('./src/js/*.js', gulp.series('jsification'));
    gulp.watch('./src/*.html', gulp.series('htmlification'));
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
    gulp.watch('./dist/css/*.css').on('change', browserSync.reload);
    gulp.watch('./dist/js/*.js').on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('observe'));