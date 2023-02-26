'use strict';

const readline = require('readline');

const getNumbersFromConsole = async () => {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> ',
  });
  
  rl.prompt();
  
  const question = (str) => new Promise((answer) => rl.question(str, answer));

  const a = Number(await question('Enter a: '));
  const b = Number(await question('Enter b: '));
  const c = Number(await question('Enter c: '));

  rl.close();
  
  return { a, b, c };
};

module.exports = getNumbersFromConsole;
