const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

gulp.task('copyHtml', function () {
    gulp.src('assets/*.html')
        .pipe(gulp.dest('public'));
});
gulp.task('babel', () =>
    gulp.src('assets/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'))
);

gulp.task('sass', ()=>{
    gulp.src('assets/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'))
});


gulp.task('all', ['copyHtml','babel','sass']);

gulp.task('watch', () =>{
    gulp.watch('assets/*.html', ['copyHtml']);
    gulp.watch('assets/js/*.js', ['babel']);
    gulp.watch('assets/scss/*.scss', ['sass']);
    gulp.watch('assets/img/*.jpg', [''])

});
