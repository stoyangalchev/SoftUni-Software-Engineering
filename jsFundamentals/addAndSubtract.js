function addAndSubtract(arr) {
  let newArray = [];
  let arrLeng = arr.length;
  let sumOfOriginal = 0;
  let sumOfNew = 0;

  for (let i = 0; i < arrLeng; i++) {
    let curentNumber = Number(arr[i]);
    sumOfOriginal += curentNumber;
    if (curentNumber % 2 == 0) {
      curentNumber += i;
    } else {
      curentNumber -= i;
    }
    sumOfNew += curentNumber;

    newArray.push(curentNumber);
  }
  console.log(newArray);
  console.log(sumOfOriginal);
  console.log(sumOfNew);
}
addAndSubtract([5, 15, 23, 56, 35]);
