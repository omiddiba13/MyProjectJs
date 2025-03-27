const haystack = "hello";
const needle = "ll";

const indices = [...haystack]
  .map((_, i) => (haystack.slice(i, i + needle.length) === needle ? i : -1))
  .filter((i) => i !== -1);

console.log(indices.length > 0 ? indices[0] : -1);
