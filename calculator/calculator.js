function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (arr) {
	return arr.reduce((sum, num) => sum + num, 0);
}

function multiply (arr) {
	return arr.reduce((product, num) => product * num, 1);
}

function power(base, power) {
	return base ** power;
}

function factorial(num) {
	if (num === 0) return 1;
	return num * factorial(num - 1); 
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}