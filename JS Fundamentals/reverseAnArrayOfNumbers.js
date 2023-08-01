function reverseAnArrayOfNumbers(num, arr) {
  let reverse = [];
  for (let i = num - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  console.log(reverse.join(' '));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
