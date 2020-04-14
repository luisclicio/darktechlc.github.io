const inputBin = document.querySelector('#bin-input');
const inputDec = document.querySelector('#dec-input');
const btnConvert = document.querySelector('#btn-convert');

function binaryToDecimal(binaryNumber) {
  let decimalNumber = 0;

  for (let i = binaryNumber.length - 1; i >= 0; i--) {
    decimalNumber += parseInt(binaryNumber[i]) * 2 ** (binaryNumber.length - 1 - i);
  }

  return decimalNumber;
}

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

function alert(element) {
  element.focus();
}

function convertValue() {
  if (inputBin.value !== '') {
    const regex = /[^0-1]/g;
    let testValue = regex.exec(inputBin.value);

    if (testValue) {
      alert(inputBin);
    } else {
      let decimal = binaryToDecimal(inputBin.value);
      inputDec.value = decimal;
    }
  } else if (inputDec.value !== '') {
    const regex = /[^0-9]/g;
    let testValue = regex.exec(inputDec.value);

    if (testValue) {
      alert(inputDec);
    } else {
      let binary = decimalToBinary(inputDec.value);
      inputBin.value = binary;
    }
  }
}

inputBin.addEventListener('focus', () => inputDec.value = '');
inputDec.addEventListener('focus', () => inputBin.value = '');
btnConvert.addEventListener('click', convertValue);