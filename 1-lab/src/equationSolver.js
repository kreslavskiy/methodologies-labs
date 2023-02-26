'use srict';

const solveEquation = (a, b, c) => {
  const discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant > 0) {
      const x1 = (-1*b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-1*b - Math.sqrt(discriminant)) / (2 * a);
      console.log(`Found 2 roots: \nx1: ${x1}, x2: ${x2}`);
    } else if (discriminant === 0) {
      console.log(`Found 1 root: x = ${ (-1*b) / (2*a) }`);
    } else {
      console.log('No roots found');
    };
};

module.exports = solveEquation;