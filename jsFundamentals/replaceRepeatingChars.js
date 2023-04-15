function replaceRepeatingChars(input) {
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== input[i - 1]) {
      arr.push(input[i]);
    }
  }
  console.log(arr.join(""));
}
replaceRepeatingChars("qqqwerqwecccwd");
