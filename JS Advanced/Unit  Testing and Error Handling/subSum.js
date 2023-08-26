function subSum(numbers, start, end) {
  if (!Array.isArray(numbers)) {
    return NaN;
  }
  let startindex = Math.max(start, 0);
  let endIndex = Math.min(end, numbers.length - 1);

  let subNumbers = numbers.slice(startindex, endIndex+1);

  let sum = subNumbers.reduce((a, x) => a + Number(x), 0);
  return sum;
}
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
