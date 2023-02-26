'use strict';

const validator = (a, b, c) => {
  const numbers = [ a, b, c ];
  return numbers.every((num => !isNaN(num)));
};

module.exports = validator;