'use strict';

const fs = require('fs');

const fileContent = fs.readFileSync('equation.json', 'utf-8');
const { a, b, c } = JSON.parse(fileContent);

(() => {
  if (a === 0 || typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') console.log('Error. Expected a valid real number, got NaN instead');
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
