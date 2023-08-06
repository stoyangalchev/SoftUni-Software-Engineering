function printeveryNthElementfromanArray(arr, num) {
  let pushedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (num > arr.length) {
      return [arr[0]];
    } else {
      pushedArr.push(arr[i]);
      i += num - 1;
    }
  }
  return pushedArr;
}
console.log(printeveryNthElementfromanArray(["dsa", "asd", "test", "tset"], 2));
