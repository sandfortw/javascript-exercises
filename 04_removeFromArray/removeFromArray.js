const removeFromArray = function() {
  let array = arguments[0];
  args_length = Object.keys(arguments).length;
  for (let i = args_length - 1 ; i >= 1; i--) {
    array = array.filter((e) => e !== arguments[i]);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
