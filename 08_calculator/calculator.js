const add = function(a, b) {
	return a + b; 
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	let val = 0; 
  for(let i = 0; i < arguments.length; i++) { 
    val += arguments[i]; 
  }

  return val;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
