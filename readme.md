Instalando gulp de manera global:

1. instalar git
2. instalar nodejs
3. instalar npm
4. instalar gulp de manera global
```sh
sudo npm install gulp -g
```
5. crear package.json
```npm init```

Instalando GULP en local(dentro de mi proyecto, como dependencia de desarrollo interna):
1. ```cd carpeta/cursogulp```
2. ```sudo npm install --save-dev gulp```
*en caso haya problemas:
```
sudo npm cache clean --force
sudo npm install -g n
-sudo n 8.11.3
```
crear una tarea:

1. crear una constante para acceder al pkg de gulp

/* 
gulp.task -> crea una tarea -> gulp.task('nombredelatarea',() => {lo que va a hacer})

*/
//1. crear una constante para acceder al pkg de gulp
```const gulp = require('gulp');```
//2. creando la tarea
```
gulp.task('default', ()=>{
    console.log('Hola mundo');
    console.log('Hola mundo');
})
```
//3. lanzar la tarea en la terminal: ```gulp tarea1 o gulp```


compilar SASS:
----------------
1. instalamos sass
```
npm install --save-dev gulp-sass
```
2. instalamos autoprefixer
```
npm install --save-dev gulp-autoprefixer
```
3. creamos una tarea dentro de gulpfile.js que hará de autoprefixer de las 3 ultimas versiones y compilar el sass en css 
```
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', ()=>{
    
    gulp.src('./dev/scss/styles.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            Browserslistconfig:['last 3 versions']
        }))
        .pipe(gulp.dest('./public/css'))
})
```
4. agregamos este codigo en package.json
```
,
  "browserslist": [
    "last 3 version",
    "> 1%",
    "IE 10"
  ]
}
```
5. en la terminal ejecutar: ```gulp sass```


compilar pug
---------------
1. instalar pug
```
sudo npm install --save-dev gulp-pug
```
2.
```
const pug = require('gulp-pug');
gulp.task('pug',()=>{
    gulp.src('./dev/pug/*.pug')
    .pipe(pug({
        pretty:true
    }))
    .pipe(gulp.dest('./public/'))
})

gulp.task('default',()=>{
    gulp.watch('./dev/pug/*.pug',gulp.series('pug'));
    gulp.watch('./dev/scss/styles.scss',gulp.series('sass'));
});
```

BrowserSync ( navegador sincronizado en tiempo real)
---------------------

1. instalar
```
sudo npm install browser-sync --save-dev
```

Gulp + Babel(compilador Js a versiones actuales o antiguas)
----------------------------
1. instalar
```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```

2. //compilar de js nuevo al soporte para todos los navegadores
```
gulp.task('babel',()=>{
    gulp.src('./dev/js/scripts.js')
    .pipe(babel({
        presets:['env']
    }))
    .pipe(gulp.dest('./public/js'))
})
``` 


Gulp + concat(fuciona todos tus scripts en uno solo) 
---------------------------------------------------
1. instalar concat
```
sudo npm install --save-dev gulp-concat
```

Gulp + uglify(codificar y minificar el codigo JS)
-------------------------------------------------
1. instalar
```
sudo npm install --save-dev gulp-uglify
```

Gulp + plumber (controlar los fallos en gulp)
--------------------------------------------
1. instalar
```
sudo npm install --save-dev gulp-plumber
```
