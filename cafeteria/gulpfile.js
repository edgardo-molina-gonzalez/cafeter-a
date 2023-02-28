const { src, dest } = require('gulp')
const sass = require('gulp-sass')
/**
 * src es una función que permite identificar que archivo
 * sass compila la hoja de estilos
 * dest almacena en el disco duro
 */

function css(done){
    // compilar sass

    /**
     * pasos:
     * 1- identificar archivo
     * 2- compilar archivo
     * 3- guardar el .css
     */

    // este bloque identifica el archivo y lo compila, se guarda usando dest(ruta_archivo) pipe ejecuta
    src('src/scss/app.scss')
        .pipe( sass() )
        .pipe( dest('build/css') )

    done()
}

// sintaxis para llamar a una funcion en gulp:
// export.nombre = nombreFuncion
exports.css = css