function sortArray(input, sortLike) {
  let arr = input;

  if (sortLike == "asc") {
    return arr.sort((a, b) => {
      return a - b;
    });
  } else if (sortLike == "desc") {
    return arr.sort((a, b) => {
      return b - a;
    });
  }
}
console.log(sortArray([14, 7, 17, 6, 8], "asc"));
console.log(sortArray([14, 7, 17, 6, 8], "desc"));
