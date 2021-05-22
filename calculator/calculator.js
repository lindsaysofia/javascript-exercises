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

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}