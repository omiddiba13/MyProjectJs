/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let sumS = 0,
    sumT = 0;

  for (let i = 0; i < s.length; i++) {
    sumS += s.charCodeAt(i);
  }

  for (let i = 0; i < t.length; i++) {
    sumT += t.charCodeAt(i);
  }

  return String.fromCharCode(sumT - sumS);
};

console.log(findTheDifference("abcd", "abcde"));
