function jansNotation(input) {
  const operands = [];
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  for (const element of input) {
    if (typeof element === "number") {
      operands.push(element);
    } else {
      if (operands.length < 2) {
        console.log("Error: not enough operands!");
        return;
      }
      const b = operands.pop();
      const a = operands.pop();
      operands.push(operations[element](a, b));
    }
  }

  if (operands.length > 1) {
    console.log("Error: too many operands!");
  } else {
    console.log(operands[0]);
  }
}

jansNotation([3, 4, "+"]);

jansNotation([5, 3, 4, "*", "-"]);
