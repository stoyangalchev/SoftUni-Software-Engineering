function biggestElement(arr) {
  let result = [];
  console.log();
  for (let i = 0; i < arr.length; i++) {
    let maxNum = Math.max(...arr[i]);
    result.push(maxNum);
  }

  return Math.max(...result);
}
console.log(
  biggestElement([
    [20, 50, 10],
    [8, 33, 145],
  ])
);
