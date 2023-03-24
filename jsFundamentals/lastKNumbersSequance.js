function lastKNumbersSequance(n, k) {
  let result = [1];

  for (let i = 1; i < n; i++) {
    let sequanceK = result.slice(-k);
    let sum = 0;
    for (el of sequanceK) {
      sum += el;
    }
    result.push(sum);
  }
  console.log(result);
}
lastKNumbersSequance(6, 3);

//1 1 2 4 7 13
