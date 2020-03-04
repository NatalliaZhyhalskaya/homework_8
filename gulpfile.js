let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('mytask', function(){
    console.log('Hello, i am task!');
});
gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});
gulp.task('scripts', function() {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
        'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'));
});


// gulp.task('scripts', function() {
//     return gulp.src(['app/js/common.js', 'app/libs/**/*.js'])
//     .pipe(browserSync.reload({ stream: true }))
// });
gulp.task('code', function() {
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({ stream: true }))
});
gulp.task('css-libs', function() {
    return gulp.src('app/sass/libs.sass')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'));
});
gulp.task('clean', async function() {
    return del.sync('dist');
});
gulp.task('img', function() {
    return gulp.src('app/img/**/*')
    .pipe(cache(imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))/** */)
    .pipe(gulp.dest('dist/img'));
});
gulp.task('prebuild', async function() {

    let buildCss = gulp.src([
        'app/css/main.css',
        'app/css/libs.min.css',
    ])
    .pipe(gulp.dest('dist/css'))

    let buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))

    let buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist.js'))

    let buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));

});

gulp.task('clear', function (callback) {
    return cache.clearAll();
});
gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
    gulp.watch('app/*.html', gulp.parallel('code'));
    gulp.watch(['app/js/common.js', 'app/libs/**/*.js'], gulp.parallel('scripts'));
});

gulp.task('default', gulp.parallel('css-libs', 'sass', 'scripts', 'browser-sync', 'watch'));
gulp.task('build', gulp.parallel('prebuild', 'clean', 'img', 'sass',  'scripts'));

