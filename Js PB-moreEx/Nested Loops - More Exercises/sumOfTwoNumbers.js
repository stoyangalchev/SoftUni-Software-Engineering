function sumOfTwoNumbers(input) {
  let start = Number(input.shift());
  let end = Number(input.shift());
  let magicNum = Number(input.shift());
  let combination = 0;
  let isFound = false;
  for (let i = start; i <= end; i++) {
    for (let j = start; j <= end; j++) {
      combination++;
      if (i + j === magicNum) {
        isFound = true;
        console.log(`Combination N:${combination} (${i} + ${j} = ${magicNum})`);
        return;
      }
    }
  }
  if (!isFound) {
    console.log(`${combination} combinations - neither equals ${magicNum}`);
  }
}
sumOfTwoNumbers([88, 888, 1000]);
