const ftoc = function(fahrenheitValue) {
  let celsiusValue = (fahrenheitValue - 32) * (5/9);
  return +celsiusValue.toFixed(1);
}

const ctof = function(celsiusValue) {
  let fahrenheitValue = celsiusValue * (9/5) + 32;
  return +fahrenheitValue.toFixed(1);
}

module.exports = {
  ftoc,
  ctof
}
