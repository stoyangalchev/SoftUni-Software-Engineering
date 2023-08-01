function palindromeIntegers(array) {
  for (let el of array) {
    let curentEl = String(el);
    let reversed = String(el).split("").reverse().join("");
    let result = reversed === curentEl ? "true" : "false";
    console.log(result);
  }
}
palindromeIntegers([123, 323, 421, 121]);
