const palindromes = function(str) {
  let stripNonAlpha = str.replace(/[^A-Za-z]/gi, '');
  let lowerCase = stripNonAlpha.toLowerCase();
  return lowerCase === lowerCase.split('').reverse().join('');
}

module.exports = palindromes
