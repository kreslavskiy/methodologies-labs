'use strict';

const getNumbersFromConsole = require('./src/getNumbersFromConsole');
const getNumbersFromFile = require('./src/getNumbersFromFile');
const validator = require('./src/validator');
const solveEquation = require('./src/equationSolver');

const FILENAME_POSITION = 3;

(async () => {
  const { a, b, c } = process.argv.length === FILENAME_POSITION ? getNumbersFromFile(process.argv[2]) : await getNumbersFromConsole();
  const isValid = validator(a, b, c);

  if (!isValid) console.log('One of number is not valid. Please enter valid numbers\nNote: a, b and c have to be numbers, a must not be zero');
  else {
    console.log(`Equation is: ${ a >= 0 ? '' : '-' } ${Math.abs(a)}x^2 ${ b >= 0 ? '+' : '-' } ${Math.abs(b)}x ${ c >= 0 ? '+' : '-' } ${Math.abs(c)} = 0`);
    solveEquation(a, b, c);
  }
})();
