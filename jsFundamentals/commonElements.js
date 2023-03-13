function commonElements(arr1, arr2) {
  let lengthArray = arr1.length;

  for (let i = 0; i < lengthArray; i++) {
    let curentEl = arr1[i];

    for (let j = 0; j < lengthArray; j++) {
      if (curentEl === arr2[j]) {
        console.log(curentEl);
      }
    }
  }
}
commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
