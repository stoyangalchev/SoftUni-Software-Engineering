function aggregateElements(input) {
  let sum1 = 0;
  for (let i = 0; i < input.length; i++) {
    let firstNum = input[i];
    sum1 += firstNum;
  }

  console.log(sum1);

  let sum2 = 0;
  for (let i = 0; i < input.length; i++) {
    let firstNum = input[i];
    sum2 += 1 / firstNum;
  }

  console.log(sum2);

  let sum3 = "";
  for (let i = 0; i < input.length; i++) {
    let firstNum = input[i];
    sum3 += String(firstNum);
  }
  console.log(sum3);
}
aggregateElements([1, 2, 3]);
