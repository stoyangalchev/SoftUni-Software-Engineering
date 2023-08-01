function primePairs([firstNum, secondNum, increaseFirst, increaseSecond]) {
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
  increaseFirst = Number(increaseFirst);
  increaseSecond = Number(increaseSecond);

  let maxFirst = firstNum + increaseFirst;
  let maxSecond = secondNum + increaseSecond;

  for (let i = firstNum; i <= maxFirst; i++) {
    for (let j = secondNum; j <= maxSecond; j++) {
      let isFirstNumPrime = true;
      let isSecondNumPrime = true;
      for (let k = 2; k <= Math.sqrt(i); k++) {
        ///Math.sqrt()
        if (i % k == 0) {
          isFirstNumPrime = false;
          break;
        }
      }
      for (let k = 2; k <= Math.sqrt(j); k++) {
        ///Math.sqrt()
        if (j % k == 0) {
          isSecondNumPrime = false;
          break;
        }
      }
      if (isFirstNumPrime && isSecondNumPrime) {
        console.log(`${i}${j}`);
      }
    }
  }
}

primePairs([10, 20, 5, 5]);
