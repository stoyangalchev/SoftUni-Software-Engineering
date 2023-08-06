function sortingNumbers(input) {
  let arrayCoppy = input.slice();
  let result = [];
  function minNum(x) {
    return Math.min(...x);
  }
  function maxNum(y) {
    return Math.max(...y);
  }

  for (let i = 0; i < input.length; i++) {
    let minNumber = minNum(arrayCoppy);
    let maxNumber = maxNum(arrayCoppy);

    if (i % 2 == 0) {
      let indexOF = arrayCoppy.indexOf(minNumber);
      result.push(minNumber);
      arrayCoppy.splice(indexOF, 1);
    } else {
      let indexOF = arrayCoppy.indexOf(maxNumber);
      result.push(maxNumber);
      arrayCoppy.splice(indexOF, 1);
    }
  }
  return result;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
