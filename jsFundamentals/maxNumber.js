function maxNumber(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let curentNum = arr[i];
    let isLarg = true;

    for (let j = i + 1; j < arr.length; j++) {
      let curentNum2 = arr[j];
      if (curentNum <= curentNum2) {
        isLarg = false;
      }
    }
    if (isLarg) {
      newArr.push(curentNum);
    }
  }
  console.log(newArr.join(" "));
}
maxNumber([27, 19, 42, 2, 13, 45, 48]);
