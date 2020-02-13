const { src, dest, watch, series, parallel } = require('gulp');

const sourcemaps    = require('gulp-sourcemaps');
const sass          = require('gulp-sass');
const concat        = require('gulp-concat');
const uglify        = require('gulp-uglify');
const postcss       = require('gulp-postcss');
const autoprefixer  = require('autoprefixer');
const cssnano       = require('cssnano');
const replace       = require('gulp-replace');
const babel         = require('gulp-babel');

// File source paths
const projetSource = 'src/'
const projetSourceName = projetSource + 'goichot'

const files = { 
    scssPath: projetSourceName + '/scss/**/*.scss',
    jsPath: projetSourceName + '/js/**/*.js',
    htmlPath: projetSourceName + '/**/*.html'
}

// File destination paths
const projetDestName = 'goichot'
const projetDestination = 'dist/' + projetDestName

const destination = {
    projetDist: projetDestination
}

// Sass task
function scssTask(){    
    return src(files.scssPath)
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass()) // compile SCSS to CSS
        .pipe(postcss([ autoprefixer(), cssnano() ])) // PostCSS plugins
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(dest(destination.projetDist + '/css')
    ); // put final CSS in dist folder
}

// JS task
function jsTask(){
    return src([
        files.jsPath
        //,'!' + 'includes/js/jquery.min.js', // to exclude any specific files
        ])
        .pipe(concat('app.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(dest(destination.projetDist + '/js')
    );
}

// html Cachebust
function cacheBustTask(){
    var cbString = new Date().getTime();
    return src([projetSourceName + '/index.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest(destination.projetDist));
}

// Watch task
function watchTask(){
    watch([files.scssPath, files.jsPath, files.htmlPath],        
        {interval: 1000, usePolling: true}, //Makes docker work
        series(
            parallel(scssTask, jsTask),
            cacheBustTask
        )
    );
}

// Export the default Gulp task
exports.default = series(
    parallel(scssTask, jsTask), 
    cacheBustTask,
    watchTask
);