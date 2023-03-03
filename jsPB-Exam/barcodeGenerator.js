function barcodeGenerator(input) {
  let num1 = input.shift();
  let num2 = input.shift();
  let result = "";
  for (let i = Number(num1.charAt(0)); i <= Number(num2.charAt(0)); i++) {
    for (let j = Number(num1.charAt(1)); j <= Number(num2.charAt(1)); j++) {
      for (let k = Number(num1.charAt(2)); k <= Number(num2.charAt(2)); k++) {
        for (let m = Number(num1.charAt(3)); m <= Number(num2.charAt(3)); m++) {
          if (i % 2 != 0 && j % 2 != 0 && k % 2 != 0 && m % 2 != 0) {
            result += `${i}${j}${k}${m} `;
          }
        }
      }
    }
  }
  console.log(result);
}
barcodeGenerator(["1365", "5877"]);
