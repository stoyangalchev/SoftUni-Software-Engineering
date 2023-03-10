function sumEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let curentEl = Number(arr[i]);
    if (curentEl % 2 === 0) {
      sum += curentEl;
    }
  }
  console.log(sum);
}
sumEvenNumbers(["3", "5", "7", "9"]);
