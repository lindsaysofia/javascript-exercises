const leapYears = function(year) {
  let isLeapYear = year % 4 === 0;
  if (year % 100 === 0) {
    return isLeapYear && (year % 400 === 0);
  } else {
    return isLeapYear;
  }
}

module.exports = leapYears
