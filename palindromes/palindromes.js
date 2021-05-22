const palindromes = function(str) {
  return str.replace(/[^A-Za-z]/gi, '');
}

module.exports = palindromes
