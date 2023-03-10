function evenAndOddSubtraction(arr) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    let num = Number(arr[i]);
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }
  let difference = evenSum - oddSum;
  console.log(difference);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
