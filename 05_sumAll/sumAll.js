const sumAll = function(num1, num2) {
  const sumOfIntegers = (big, small) => ((big - small + 1) * (small + big))/ 2;
  const bothIntegers = Number.isInteger(num1) && Number.isInteger(num2);
  const bothPositive = num1 >=0 && num2 >=0;
  if(bothIntegers && bothPositive){
    return num1 > num2 ? sumOfIntegers(num1, num2) : sumOfIntegers(num2, num1)
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
