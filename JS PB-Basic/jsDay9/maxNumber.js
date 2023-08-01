function maxNumber(input) {
  let inputElement = input[0];
  let index = 1;
  let bigestNumber = Number.MIN_SAFE_INTEGER; //-9999999999

  while (inputElement !== "Stop") {
    let curentNum = Number(inputElement);

    if (curentNum > bigestNumber) {
      bigestNumber = curentNum;
    }
    inputElement = input[index];
    index++;
  }
  console.log(bigestNumber);
}
maxNumber(["100", "99", "80", "70", "Stop"]);
