function processOddPositions(input) {
  let result = [];

  input.forEach((element, index) => {
    if (index % 2 != 0) {
      result.push(element * 2);
    }
  });
  return result.reverse().join(" ");
}
console.log(processOddPositions([10, 15, 20, 25]));
