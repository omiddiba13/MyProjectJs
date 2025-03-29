
var canMakeArithmeticProgression = function (arr) {
  let n = arr.length;
  if (n <= 2) return true;

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  if (min === max) return true;

  let diff = (max - min) / (n - 1);

  for (let i = 0; i < n; i++) {
    let expectedValue = min + i * diff;
    if (!arr.includes(expectedValue)) {
      return false;
    }
  }

  return true;
};

console.log(canMakeArithmeticProgression([3, 5, 1])); // true
console.log(canMakeArithmeticProgression([1, 2, 4])); // false
