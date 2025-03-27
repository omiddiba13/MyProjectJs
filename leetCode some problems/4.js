// my solution
const isAnagramOne = (s, t) => {
  if (s.length !== t.length) return false;

  const Scode = s
    .split("")
    .map((char) => char.charCodeAt(0))
    .sort()
    .join("");

  const Tcode = t
    .split("")
    .map((char) => char.charCodeAt(0))
    .sort()
    .join("");

  return Scode === Tcode;
};
console.log(isAnagramOne("anagram", "nagaram")); // true
console.log(isAnagramOne("rat", "car")); // false
// Ai solution
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const freq = {};

  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of t) {
    if (!freq[char]) return false;
    freq[char]--;
  }

  return true;
};
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
