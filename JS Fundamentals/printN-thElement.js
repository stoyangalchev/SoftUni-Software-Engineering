function printNthElement(arr) {
  let newArr = [];
  let arrLength = arr.length;
  let end = Number(arr[arrLength - 1]);
  for (let i = 0; i < arrLength - 1; i += end) {
    let curent = arr[i];

    newArr.push(curent);
  }
  console.log(newArr.join(" "));
}
printNthElement(["1", "2", "3", "4", "5", "6"]);
