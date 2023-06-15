const logger = require('./logger')

const miFuncion1 = val => {
    if(typeof val === 'number'){
        return val
    }
    // return false
    throw new Error('el valor debe ser tipo númerico')
}

const numero = 20;

try {
    // Código que puede generar un error
    const resultado = miFuncion1(numero) / 2;
    logger.info(`El resultado de la división es ${resultado}`); // Esta línea no se ejecutará
  } catch (e) {
    // Manejo del error
    logger.error('Solo se aceptan datos tipo numericos');
  }
