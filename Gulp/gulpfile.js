var gulp = require('gulp'),
    sass = require('gulp-sass'),
    spriter = require('gulp-css-spriter');

gulp.task('sprite',()=>{
    var timestamp = +new Date();
    gulp.src('./src/styles/**/*.scss')
        .pipe(spriter({
            // 生成的sprite的位置
            'spriteSheet': './dist/images/sprite_'+timestamp+'.png',
            // 生成样式文件图片引用地址的路径
            // 如下将生产：backgound:url(../images/sprite20324232.png)
            'pathToSpriteSheetFromCSS': '../images/sprite_'+timestamp+'.png'
        }))
        .pipe(sass())
        .pipe(gulp.dest('./dist/styles/'))
})
