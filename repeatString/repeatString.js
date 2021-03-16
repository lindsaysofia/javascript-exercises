const repeatString = function(str, numOfRepetitions) {
  if (str === '') {
    return str;
  } else if (numOfRepetitions < 0) {
    return 'ERROR';
  }

  let repeatedStr = '';
  while (numOfRepetitions > 0) {
    repeatedStr += str;
    numOfRepetitions--;
  }
  return repeatedStr;
}

module.exports = repeatString
