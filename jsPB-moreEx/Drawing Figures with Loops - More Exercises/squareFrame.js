function squareFrame(input) {
  let n = Number(input.shift());
  console.log("+ " + `${"- ".repeat(n - 2)}` + "+");
  for (let row = 1; row <= n - 2; row++) {
    console.log("| " + `${"- ".repeat(n - 2)}` + "|");
  }
  console.log("+ " + `${"- ".repeat(n - 2)}` + "+");
}
squareFrame([5]);
