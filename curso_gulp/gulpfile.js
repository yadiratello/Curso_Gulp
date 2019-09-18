/* 
gulp.task -> crea una tarea -> gulp.task('nombredelatarea',() => {lo que va a hacer})
gulp.src -> le indica al gulpfile el origen del documento -> gulp.src('ruta')
gulp.pipe -> union de las diferentes secciones de la tarea -> .pipe(seccion)
gulp.dest -> Destino del documento -> gulp.dest('ruta de destino del archivo')
gulp.watch -> vigila los cambios en la ruta que le digamos -> gulp.watch('ruta',['tareaAEjecutar'])
*/



/*
//1. crear una constante para acceder al pkg de gulp
const gulp = require('gulp');


//2. creando la tarea
gulp.task('default', ()=>{
    console.log('Hola mundo');
    console.log('Hola mundo');
})
//3. lanzar la tarea en la terminal: gulp tarea1
*/


/**
 * salidas sass
 * nested -> salida por defecto
 * compact -> en una sola linea por estilo
 * expanded -> deja igual que en css
 * compressed -> lo comprime todo en una sola linea
 */

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const pug = require('gulp-pug');
//const browserSync = require('browser-sync');//tendrá acceso a todos los metodos de browsersync
const browserSync = require('browser-sync').create();//.create -> crea un servidor
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');

gulp.task('sass',()=>{    
    gulp.src('./dev/scss/styles.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .pipe(autoprefixer({
            Browserslistconfig:['last 3 versions']
        }))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream())
})

gulp.task('pug',()=>{
    gulp.src('./dev/pug/*.pug')
    .pipe(plumber())
    .pipe(pug({
        pretty:true
    }))
    .pipe(gulp.dest('./public/'))
})

//compilar de js nuevo al soporte para todos los navegadores
gulp.task('babel', ()=>{
    gulp.src('./dev/js/*.js')
    .pipe(plumber())
    .pipe(babel({
        "presets": ["@babel/preset-env"]
    }))
    .pipe(gulp.dest('./dev/js/es5'))
})

//concatenar nuestros archivos Js y minificarlo
gulp.task('compress', ()=>{
    gulp.src('./dev/js/es5/*.js')
    .pipe(plumber())
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'))
})

//browserSync.init({server: './public'}) <- levanta el servidor
/*gulp.task('serve',['sass'],()=>{
    browserSync.init({
        server: './public'
    });
    gulp.watch('./dev/pug/*.pug',['pug']).on('change',browserSync.reload);
    gulp.watch('./dev/scss/styles.scss',['sass']);
})*/

gulp.task('default',['sass'],()=>{
    browserSync.init({
        server: './public'
    });
    gulp.watch('./dev/pug/*.pug',['pug']).on('change',browserSync.reload);
    gulp.watch('./dev/js/*.js',['babel','compress']).on('change',browserSync.reload);
    gulp.watch('./dev/scss/styles.scss',['sass']);
})




/*
gulp.task('default',()=>{
    gulp.watch('./dev/pug/*.pug',gulp.series('pug'));
    gulp.watch('./dev/scss/styles.scss',gulp.series('sass'));
});
*/

