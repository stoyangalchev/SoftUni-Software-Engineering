function sumofNumbersNM(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  let result = 0;
  let finalResult = function (num1, num2) {
    for (let i = num1; i <= num2; i++) {
      result += i;
    }
    return result;
  };
  console.log(finalResult(num1, num2));
}
sumofNumbersNM("-8", "20");
