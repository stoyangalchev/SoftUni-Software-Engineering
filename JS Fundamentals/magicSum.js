function magicSum(arr, num) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let curentNum = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let nexNum = arr[j];
      let sum = curentNum + nexNum;
      if (sum === num) {
        newArr.push(`${curentNum} ${nexNum}`);
      }
    }
  }
  console.log(newArr.join("\n"));
}
magicSum([1, 7, 6, 2, 19, 23], 8);
