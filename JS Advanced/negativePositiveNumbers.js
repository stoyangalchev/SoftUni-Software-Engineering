function negativePositiveNumbers(input) {
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    let num = input[i];
    if (num < 0) {
      arr.unshift(num);
    } else {
      arr.push(num);
    }
  }
  console.log(arr.join("\n"));
}
negativePositiveNumbers([3, -2, 0, -1]);
