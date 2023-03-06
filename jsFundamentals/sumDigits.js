function sumDigits(num) {
  let asString = num.toString();
  let sum = 0;
  for (let i = 0; i < asString.length; i++) {
    let asNumChar = Number(asString[i]);
    sum += asNumChar;
  }
  console.log(sum);
}
sumDigits(245678);
