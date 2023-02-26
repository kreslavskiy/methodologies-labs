'use strict';

const validator = (a, b, c) => {
  const numbers = [ a, b, c ];
  console.log(numbers);
  return numbers.every((num => !isNaN(num)));
};

module.exports = validator;