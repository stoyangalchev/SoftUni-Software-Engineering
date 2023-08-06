function diagonalSums(array) {
  let sum1 = 0;
  let sum2 = 0;
  let k = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      debugger;
      let num = array[i][k];
      sum1 += num;
      k++;
      break;
    }
  }
  let s = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < array[i].length; j++) {
      let num = array[i][s];
      sum2 += num;
      s++;
      break;
    }
  }
  console.log(sum1 + " " + sum2);
}
diagonalSums([
  [20, 40],
  [10, 60],
]);
