function lettersCombinations(input) {
  let startLetter = input[0].charCodeAt();
  let endLetter = input[1].charCodeAt();
  let exceptLetter = input[2].charCodeAt();
  result = "";
  let validCombinationsCount = 0;

  for (let i = startLetter; i <= endLetter; i++) {
    if (i === exceptLetter) {
      continue;
    }

    for (let j = startLetter; j <= endLetter; j++) {
      if (j === exceptLetter) {
        continue;
      }

      for (let k = startLetter; k <= endLetter; k++) {
        if (k === exceptLetter) {
          continue;
        }
        result +=
          String.fromCharCode(i) +
          String.fromCharCode(j) +
          String.fromCharCode(k) +
          " ";
        validCombinationsCount++;
      }
    }
  }
  result += validCombinationsCount; //outside for loop
  console.log(result); //outside for loop
}
lettersCombinations(["a", "b", "c"]);
