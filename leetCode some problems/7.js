/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let num = BigInt(digits.join(""));
  let newNum = num + 1n;
  let sortedDigits = newNum.toString().split("").map(Number);

  return sortedDigits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([9, 9, 9]));
console.log(plusOne([4, 3, 2, 1]));
