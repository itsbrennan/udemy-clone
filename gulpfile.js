const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css() {
  return gulp
    .src('scss/app.scss')
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 chrome versions']
      })
    )
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('css'));
}

function watchFiles() {
  gulp.watch('scss/*scss', css);
  gulp.watch('index.html');
}

// task
gulp.task('css', css);
gulp.task('watch', gulp.parallel(watchFiles));
