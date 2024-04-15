function calculator(number1: number, operator: string, number2: number): void {
  let result: number = 0;
  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
  }
  console.log(result);
}

calculator(1, "*", 2);
