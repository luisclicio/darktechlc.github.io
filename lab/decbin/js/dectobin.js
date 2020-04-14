const dec = 12

function decimalToBinary(decimalNumber) {
  const binaryNumbers = [];
  let numberCurrent;
  let binary = '';

  while (decimalNumber !== 0) {
    numberCurrent = decimalNumber % 2;
    binaryNumbers.push(numberCurrent);
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  binaryNumbers
    .reverse()
    .map(item => binary += item);

  return binary;
}

console.log(`${dec} = ${decimalToBinary(dec)}`)