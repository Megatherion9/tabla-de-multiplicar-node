//Required
const fs = require('fs');
var colors = require('colors');

/*
Funcion para Generar Tabla de Multiplicar en Consola
*/
let listarTabla = (base, limite = 10) => {

    //Codigo para generar Tablas de Multiplicar
    console.log('----------------'.green);
    console.log('----------------'.green);
    console.log(`Tabla del ${base}`.red.bold);
    console.log('----------------'.blue);
    console.log('----------------'.blue);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.yellow);
    }
}

/*
Funcion para Generar Tabla de Multiplicar en Archivo de Texto
*/
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } No es un numero`);
            return;
        }

        //Codigo para generar Tablas de Multiplicar
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } = ${ base * i } \n`);
        }

        //Guardar contenido en un archivo de texto
        fs.writeFile(`Tablas_Multiplicar/tabla_del_${ base }_del_1_al_${ limite }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`El archivo ` + `tabla_del_${ base }_del_1_al_${ limite }.txt`.yellow + ` ha sido creado`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}