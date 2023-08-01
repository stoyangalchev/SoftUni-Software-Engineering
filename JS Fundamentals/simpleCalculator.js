function simpleCalculator(fNum, sNum, operation) {
  let result = 0;
  switch (operation) {
    case "add":
      result = fNum + sNum;
      break;
    case "subtract":
      result = fNum - sNum;
      break;
    case "divide":
      result = fNum / sNum;
      break;
    case "multiply":
      result = fNum * sNum;
      break;
  }
  console.log(result);
}
simpleCalculator(50, 13, "subtract");
