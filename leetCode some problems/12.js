var lengthOfLastWord = function (s) {
  let trimmedString = s.trim();
  let lastSpaceIndex = trimmedString.lastIndexOf(" ");
  return trimmedString.length - lastSpaceIndex - 1;
};
// Test cases
console.log(lengthOfLastWord("Hello World")); // Output: 5
