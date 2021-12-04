
var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');


gulp.task('build-online-marketplace', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('app/pages/build-online-marketplace.nunjucks')
  // Add data 
  .pipe(data(function() {
    return require('./data/build-online-marketplace.json')
  }))
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['app/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('app'))
});

gulp.task('multivendor-marketplace', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('app/pages/multivendor-marketplace.nunjucks')
  // Add data 
  .pipe(data(function() {
    return require('./data/multivendor-marketplace.json')
  }))
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['app/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('app'))
});


gulp.task('quiz', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('app/pages/quiz.nunjucks')
  // Add data 
  .pipe(data(function() {
    return require('./data/quiz.json')
  }))
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['app/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('app'))
});


gulp.task('pages', gulp.parallel('build-online-marketplace', 'multivendor-marketplace', 'quiz'));