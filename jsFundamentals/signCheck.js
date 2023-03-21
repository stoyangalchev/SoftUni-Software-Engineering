function signCheck(numOne, numTwo, numThree) {
  let resultOfTwo = numOne * numTwo;
  if (resultOfTwo > 0 && numThree < 0) {
    console.log("Negative");
  }
  if (resultOfTwo < 0 && numThree > 0) {
    console.log("Negative");
  }
  if (resultOfTwo > 0 && numThree > 0) {
    console.log("Positive");
  } if (resultOfTwo < 0 && numThree < 0) {
    console.log("Positive");
  }
}
signCheck(-1, 1, -1);
