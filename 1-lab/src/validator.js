'use strict';

const validator = (a, b, c) => {
  const numbers = [ a, b, c ];
  return numbers.every((num => !isNaN(num))) && a !== 0;
};

module.exports = validator;
