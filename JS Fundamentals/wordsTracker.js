function wordsTracker(arr) {
  let result = new Map();
  let word = arr.shift().split(" ");

  for (let element of word) {
    result.set(element, 0);
  }

  for (let el of arr) {
    if (result.has(el)) {
      let oldValue = result.get(el);
      result.set(el, oldValue + 1);
    }
  }

  let sorted = Array.from(result).sort((a, b) => b[1] - a[1]);

  for (let [key, value] of sorted) {
    console.log(`${key} - ${value}`);
  }
}
wordsTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
