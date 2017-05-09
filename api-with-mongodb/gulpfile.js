const gulp = require('gulp');
const nodemon = require('nodemon');
const gulpMocha = require('gulp-mocha');

gulp.task('test', () => {
	gulp.src('tests/*.js', {read: false})
		.pipe(gulpMocha({reporter: 'nyan'}))
});