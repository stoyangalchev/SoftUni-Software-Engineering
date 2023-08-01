function triangleOfNumber(num) {
  let string = "";

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      string += i + " ";
    }
    string += "\n";
  }
  console.log(string);
}
triangleOfNumber(6);
