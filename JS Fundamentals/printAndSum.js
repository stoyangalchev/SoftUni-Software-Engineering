function printAndSum(start, end) {
  let currentNum = "";
  let sum = 0;
  for (let i = start; i <= end; i++) {
    currentNum += i + " ";
    sum += i;
  }
  console.log(currentNum);
  console.log(`Sum: ${sum}`);
}
printAndSum(0, 26);
