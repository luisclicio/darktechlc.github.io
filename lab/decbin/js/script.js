const inputBin = document.querySelector('#bin-input');
const inputDec = document.querySelector('#dec-input');
const btnConvert = document.querySelector('#btn-convert');

let binToDecOrDecToBin;

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

function checkInputBinDataAndConvertToDecimal() {
  const regex = /[^0-1]/g;
  let testValue = regex.exec(inputBin.value);

  if (testValue) {
    alert(inputBin);
  } else {
    let decimal = binaryToDecimal(inputBin.value);
    inputDec.value = decimal;
  }
}

function checkInputDecDataAndConvertToBinary() {
  const regex = /[^0-9]/g;
  let testValue = regex.exec(inputDec.value);

  if (testValue) {
    alert(inputDec);
  } else {
    let binary = decimalToBinary(inputDec.value);
    inputBin.value = binary;
  }
}

function convertValue() {
  if (inputBin.value !== '') {
    checkInputBinDataAndConvertToDecimal();
  } else if (inputDec.value !== '') {
    checkInputDecDataAndConvertToBinary();
  }
}

inputBin.addEventListener('focus', () => inputDec.value = '');
inputDec.addEventListener('focus', () => inputBin.value = '');
btnConvert.addEventListener('click', convertValue);

document.body.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    if (binToDecOrDecToBin) {
      if (binToDecOrDecToBin === 'binToDec') {
        checkInputBinDataAndConvertToDecimal();
      } else if (binToDecOrDecToBin === 'decToBin') {
        checkInputDecDataAndConvertToBinary();
      }
    } else {
      if (inputBin.value !== '') {
        binToDecOrDecToBin = 'binToDec';
        checkInputBinDataAndConvertToDecimal();
      } else if (inputDec.value !== '') {
        binToDecOrDecToBin = 'decToBin';
        checkInputDecDataAndConvertToBinary();
      } else {
        binToDecOrDecToBin = '';
      }
    }
  }
});