function minNumber(input) {
  let inputElement = input[0];
  let lowestNum = Number.MAX_SAFE_INTEGER;
  let index = 1;

  while (inputElement !== "Stop") {
    let asNumberNum = Number(inputElement);

    if (asNumberNum < lowestNum) {
      lowestNum = asNumberNum;
    }
    inputElement = input[index];
    index++;
  }
  console.log(lowestNum);
}
minNumber(["100", "-99", "-80", "-70", "Stop"]);
