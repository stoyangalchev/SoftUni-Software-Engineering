function sumFirstandLastArrayElements(input) {
  let firstDigit = Number(input[0]);
  let secondDigit = Number(input[input.length - 1]);
  let sum = firstDigit + secondDigit;
  console.log(sum);
}
sumFirstandLastArrayElements([20, 30, 40]);
