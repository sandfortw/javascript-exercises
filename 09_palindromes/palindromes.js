const reverseString = require('../03_reverseString/reverseString');

const palindromes = function (string) {
  let normalized = string.toLowerCase().replace(/\W+/g, "")
  return normalized === reverseString(normalized)
};

// Do not edit below this line
module.exports = palindromes;
