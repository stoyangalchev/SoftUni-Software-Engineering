function extractIncreasingSubsequencefromArray(input) {
  let resul = [];
  let maxnum = 0;
  for (let i = 0; i < input.length; i++) {
    let curentIndex = input[i];
    if (curentIndex >= maxnum) {
      resul.push(curentIndex);
      maxnum = curentIndex;
    }
  }
  return resul;
}
console.log(extractIncreasingSubsequencefromArray([20, 2, 3, 15, 2, 1]));
