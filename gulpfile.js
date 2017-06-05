// include gulp
var gulp = require('gulp');

// include plugins
var concat = require('gulp-concat');
var sass = require('gulp-sass');

// concatenate js files
gulp.task('scripts', function () {
  return gulp.src(['bower_components/**/dist/*.min.js', 'bower_components/tether/dist/js/tether.min.js', 'bower_components/**/dist/js/*.min.js'])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('js'));
});

// move css files
gulp.task('styles', function () {
  return gulp.src(['bower_components/bootstrap/dist/css/*.min.css', 'bower_components/font-awesome/css/*.min.css'])
    .pipe(gulp.dest('css'));
});

// move font files
gulp.task('fonts', function () {
  return gulp.src(['bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.*', 'bower_components/font-awesome/fonts/fontawesome-webfont.*'])
    .pipe(gulp.dest('fonts'));
});

// compile sass
gulp.task('sass', function () {
  return gulp.src(['css/*.scss', 'css/imports/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

// watch sass files for any changes
gulp.task('watch', function () {
  gulp.watch('css/*.scss', ['sass']);
  gulp.watch('css/imports/*.scss', ['sass']);
});


// default task
gulp.task('default', ['scripts', 'styles', 'fonts', 'watch', 'sass']);
