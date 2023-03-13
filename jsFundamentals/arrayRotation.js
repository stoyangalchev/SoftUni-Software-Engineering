function arrayRotation(arr, rotation) {
  let newArr = [];
  for (let index = 0; index < rotation; index++) {
    let element = arr.shift();
    arr.push(element);
  }
  console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
