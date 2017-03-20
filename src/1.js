var gulp = require('gulp'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    pngquant = require('imagemin-pngquant'),
    imagemin = require('gulp-imagemin'),
    rigger = require('gulp-rigger'),
    rimraf = require('rimraf'),
    cleanCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var path = {
    build: {
        html: 'build/',
        js: 'build/assets/js/',
        css: 'build/assets/css/',
        img: 'build/assets/images/',
        fonts: 'build/assets/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/assets/js/main.js',
        jsLibs: 'src/assets/js/libs.js',
        style: 'src/assets/css/*.css',
        img: 'src/assets/images/**/*.*',
        fonts: 'src/assets/fonts/**/*.*',
        audio: 'src/assets/audio/**/*.*',
        video: 'src/assets/video/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/assets/js/**/*.js',
        style: 'src/assets/css/**/*.css',
        img: 'src/assets/images/**/*.*',
        fonts: 'src/assets/fonts/**/*.*',
        audio: 'src/assets/audio/**/*.*',
        video: 'src/assets/video/**/*.*'
    },
    clean: './build'
};

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('js:buildLibs', function () {
    gulp.src(path.src.jsLibs)
        .pipe(rigger())
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});
gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));

});

gulp.task('audio:build', function () {
    gulp.src(path.src.audio)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.audio))
        .pipe(reload({stream: true}));
});

gulp.task('video:build', function () {
    gulp.src(path.src.video)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.video))
        .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(autoprefixer({
            browsers: ['last 8 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function () {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
        .pipe(reload({stream: true}));
});

gulp.task('build', [
    'html:build',
    'js:buildLibs',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);

gulp.task('minify-css', function () {
    gulp.src(path.src.style)
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(path.build.style));
});

gulp.task('watch', function () {
    watch([path.watch.html], function (event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function (event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function (event, cb) {
        gulp.start('js:buildLibs');
    });
    watch([path.watch.js], function (event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function (event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function (event, cb) {
        gulp.start('fonts:build');
    });
});

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: "./build"
        },
        port: 8080,
        open: true,
        notify: false
    });
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('default', ['watch', 'build', 'browserSync']);