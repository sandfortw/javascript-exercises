const leapYears = function(year) {
  const isDivisibleBy4 = year % 4 === 0;
  const isDivisibleBy100 = year % 100 === 0;
  const isDivisibleBy400 = year % 400 === 0;

  if(isDivisibleBy4){
    if(isDivisibleBy100 && !isDivisibleBy400){
      return false;
    }
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
