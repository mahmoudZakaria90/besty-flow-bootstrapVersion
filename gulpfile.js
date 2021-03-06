var gulp = require('gulp')
var sass = require('gulp-ruby-sass')
var connect = require('gulp-connect')




//sass
gulp.task('sass', function () {
   sass('./src/sass/en/*.sass',{style:'expanded'})
    .on('error', sass.logError)
    .pipe(connect.reload())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass-ar', function () {   
   sass('./src/sass/ar/*.sass',{style:'expanded'})
    .on('error', sass.logError)
    .pipe(connect.reload())
    .pipe(gulp.dest('./public/css'));
});

//watch 
gulp.task('watch',function(){
	gulp.watch('./src/sass/en/*.sass',['sass'])
 	gulp.watch('./src/sass/ar/*.sass',['sass-ar'])
	gulp.watch('./public/**/*.html',['html'])
})


//html
gulp.task('html', function() {
	gulp.src('./public/**/*.html')
		.pipe(connect.reload());

})

//connect 
gulp.task('server',function(){
	connect.server({
		root: 'public',
		livereload: true
	})
})

//default
gulp.task('default',['watch','server'])