// include gulp
var gulp = require('gulp');

// include plugins
var concat = require('gulp-concat');

// concatenate js files
gulp.task('scripts', function () {
  return gulp.src(['bower_components/**/dist/*.min.js', 'bower_components/tether/dist/js/tether.min.js', 'bower_components/**/dist/js/*.min.js'])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('js'));
});

// concatenate css files
gulp.task('styles', function () {
  return gulp.src(['bower_components/bootstrap/dist/css/*.min.css', 'bower_components/font-awesome/css/*.min.css'])
    .pipe(gulp.dest('css'));
});

// move font files
gulp.task('fonts', function () {
  return gulp.src(['bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.*', 'bower_components/font-awesome/fonts/fontawesome-webfont.*'])
    .pipe(gulp.dest('fonts'));
});

// default task
gulp.task('default', ['scripts', 'styles', 'fonts']);
