// Last Video 36

/* Importa el archivo yargs.js el cual contiene el Codigo
para definir los parametros de los comandos que se iran creando en la app */
const argv = require('./config/yargs.js').argv;

//Importar Paquete 'colors'
const colors = require('colors');

/* Importa el archivo multiplicar.js el cual contiene el codigo
para crear archivos con las tablas de multiplicar o mostrarlas en consola */
const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');

/* Define el comando para ingresar los parametros por la consola
y que se ejecuten los respectivos codigos dependiendo si se quiere
crear archivo de texto o mostrar en pantalla la tabla de multiplicar*/
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}


// console.log(argv.base);

//console.log(process.argv);
//let base = 8

// let argv2 = process.argv;
// console.log('limite', argv.base);

// let parametro = argv[2];
// let base = parametro.split('=')[1]