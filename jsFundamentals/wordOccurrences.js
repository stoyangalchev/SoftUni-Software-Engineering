function wordOccurrences(arr) {
  let result = {};

  for (const element of arr) {
    if (result[element]) {
      result[element] += 1;
    } else {
      result[element] = 1;
    }
  }

  let x = Object.entries(result).sort((a, b) => b[1] - a[1]);

  for (let [key, value] of x) {
    console.log(`${key} -> ${value} times`);
  }
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
