// Method 1
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  if (nums.includes(0)) {
    return 0; // If 0 exists in the array, the product is 0.
  } else if (nums.filter((num) => num < 0).length % 2 === 0) {
    return 1; // If the count of negative numbers is even, return 1.
  } else {
    return -1; // Otherwise, return -1.
  }
};

console.log(arraySign([-1, 1, -1, 1, -1])); // -1
console.log(arraySign([1, 2, 3, 4])); // 1
console.log(arraySign([0, -2, -3])); // 0

// Method 2 ChatGpt
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let negativeCount = 0;

  for (let num of nums) {
    if (num === 0) return 0; // If 0 exists, the product is 0.
    if (num < 0) negativeCount++; // Count the negative numbers.
  }

  return negativeCount % 2 === 0 ? 1 : -1; // If the count of negative numbers is even, return 1; otherwise, return -1.
};

console.log(arraySign([-1, 1, -1, 1, -1])); // -1
console.log(arraySign([1, 2, 3, 4])); // 1
console.log(arraySign([0, -2, -3])); // 0
//
