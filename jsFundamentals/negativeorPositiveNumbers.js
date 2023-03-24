function negativeorPositiveNumbers(array) {
  let result = [];

  for (let el of array) {
    if (el < 0) {
      result.unshift(el);
    } else {
      result.push(el);
    }
  }
  console.log(result.join("\n"));
}
negativeorPositiveNumbers(["3", "-2", "0", "-1"]);
