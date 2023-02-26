'use strict';

const fs = require('fs');

const getNumbersFromFile = (fileName) => {
  const fileContent = fs.readFileSync(`./${fileName}`, 'utf-8');
  return { ...JSON.parse(fileContent) };
}

module.exports = getNumbersFromFile
