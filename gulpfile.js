var gulp = require('gulp');
var nodemon=require('gulp-nodemon');

gulp.task('watch', function () {
  nodemon({
    script: './bin/www'
  , ext: 'js html ejs'
  , env: { 'NODE_ENV': 'development' }
 // , watch: ['views','routes','public']
  , verbose: true
  })
});
