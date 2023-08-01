function multiplyBy2(input) {
  let index = 0;
  let num = Number(input[index]);
  while (num >= 0) {
    num = num * 2;
    console.log(`Result: ${num.toFixed(2)}`);

    index++;
    num = Number(input[index]);
  }
  if (num < 0) {
    console.log("Negative number!");
  }
}
multiplyBy2([-123]);
