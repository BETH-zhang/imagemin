const gulp = require('gulp');
const imageResize = require('gulp-image-resize');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant'); //png图片压缩插件

gulp.task('image-min', () =>
    gulp.src('src/images/*')
	    .pipe(imagemin({
	        progressive: true,
	        use: [pngquant({ quality: '65-80' })]
	    }))
	    .pipe(gulp.dest('dist/min'))
	);

gulp.task('image-resize', () =>
	gulp.src('src/images/*.+(jpeg|jpg|png)')
        .pipe(imageResize({
            width: 100,
            height: 100,
            crop: true,
            upscale: false
        }))
        .pipe(gulp.dest('dist/resize/'))
	);
