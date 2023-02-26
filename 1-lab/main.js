'use strict';

const getNumbersFromConsole = require('./src/getNumbersFromConsole');
const getNumbersFromFile = require('./src/getNumbersFromFile');
const validator = require('./src/validator');

(async () => {
  const { a, b, c } = process.argv.length === 3 ? getNumbersFromFile(process.argv[3]) : await getNumbersFromConsole();
  const isValid = validator(a, b, c);

  if (!isValid) console.log('One of number is not valid. Please enter valid numbers');
  else {
    console.log(`Equation is: ${a}x^2 + ${b}x + ${c} = 0`);
    const discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant > 0) {
      const x1 = (-1*b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-1*b - Math.sqrt(discriminant)) / (2 * a);
      console.log(`x1: ${x1}, x2: ${x2}`);
    } else if (discriminant === 0) {
      console.log(`Found 1 root: x = ${ (-1*b) / (2*a) }`);
    } else {
      console.log('There are 0 roots');
    }
  }
})();
