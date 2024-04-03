function largestNum(firstNum: number,secondNum: number, thirdNum: number): void {
  let largestNum = 0;
  if (firstNum > secondNum && firstNum > thirdNum) {
    largestNum = firstNum;
  } else if (secondNum > firstNum && secondNum > thirdNum) {
    largestNum = secondNum;
  } else {
    largestNum = thirdNum;
  }
  console.log(`The largest number is ${largestNum}.`);
}

largestNum(5, -3, 16);
