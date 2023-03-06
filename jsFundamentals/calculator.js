function calculator(fNum, operator, sNum) {
  let result = 0;
  switch (operator) {
    case "+":
      result = fNum + sNum;
      break;
    case "-":
      result = fNum - sNum;
      break;
    case "*":
      result = fNum * sNum;
      break;
    case "/":
      result = fNum / sNum;
      break;
  }
  console.log(result.toFixed(2));
}
calculator(5, "+", 10);
