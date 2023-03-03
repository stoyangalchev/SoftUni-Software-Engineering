function triangleOfDollars(input) {
  let n = Number(input.shift());
  let string = "";
  for (let r = 1; r <= n; r++) {
    string += "$ ";
    console.log(string);
  }
}
triangleOfDollars([5]);
