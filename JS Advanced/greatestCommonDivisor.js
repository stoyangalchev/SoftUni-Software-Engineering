function greatestCommonDivisor(num1, num2) {
  let minvalue = Math.min(num1, num2);

  for (let i = minvalue; i >= 0; i--) {
    if (num1 % i == 0 && num2 % i == 0) {
      console.log(i);
      break;
    }
  }
}
greatestCommonDivisor(2154, 458);
