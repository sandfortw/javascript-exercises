const fibonacci = function (num) {
  if (num == 0) {
    return 0;
  }
  if (num < 0) {
    return "OOPS";
  }
  let fib = [0, 1];
  for (i = 2; i <= num; i++) {
    new_num = fib[0] + fib[1];
    console.log(`new num is ${new_num}`);
    fib.push(new_num);
    fib.shift();
  }
  return fib[1];
};

// Do not edit below this line
module.exports = fibonacci;
