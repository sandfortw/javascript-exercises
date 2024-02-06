const reverseString = function(string) {
  const last_position = string.length - 1;
  let reversed = '';
  for (i = last_position; i >= 0; i-- ) {
    reversed += string[i];
  }
  return reversed
};

// Do not edit below this line
module.exports = reverseString;
