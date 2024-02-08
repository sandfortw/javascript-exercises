const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
	let num = 0;
  array.forEach((n) => num += n)
  return num;
};

const multiply = function(nums) {
  let num = nums.shift();
  nums.forEach((n) => num *= n)
  return num;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
	if (num == 0) {
    return 1;
  } else {
    let factorial = num;
    for(let i = num; i > 1; i--){
      factorial *= (i - 1); 
    } 
    return factorial;
  }
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
