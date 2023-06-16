import chalk from 'chalk';

import * as moduloMatematicas from './modulos/controller.js';

const sum1 = moduloMatematicas.suma(1,2);
console.log(chalk.bold.yellow(sum1));

const sum2 = moduloMatematicas.suma(4,5);
console.log(chalk.bold.blue(sum2));

const multSum = moduloMatematicas.multiplica(sum1,sum2);
console.log(chalk.bold.green(multSum));