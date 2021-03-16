const sumAll = function(firstNumber, secondNumber) {
  let smallerNumber = Math.min(firstNumber, secondNumber);

  if (isNaN(smallerNumber) || smallerNumber < 0) {
    return 'ERROR';
  }

  let largerNumber = Math.max(firstNumber, secondNumber);
  /* Taking average of smaller and larger numbers and multiplying by the amount of numbers */
  return ((smallerNumber +largerNumber) / 2) * (largerNumber - smallerNumber + 1);
}

module.exports = sumAll
