function processOddNumbers(arr) {
  let result = [];
  let process = arr.filter((el, i) => i % 2 != 0);
  let double = process.map((el) => el * 2);

  console.log(double.reverse().join(" "));
}
processOddNumbers([3, 0, 10, 4, 7, 3]);
