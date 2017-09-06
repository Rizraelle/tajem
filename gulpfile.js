var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer');

		// Autoprefixer Task
		gulp.task('autoprefixer', function(){
			gulp.src('css/style.css')
			.pipe(autoprefixer({
				browsers: ['last 2 versions']
			}))
			.pipe(gulp.dest('build/css/'));
	});