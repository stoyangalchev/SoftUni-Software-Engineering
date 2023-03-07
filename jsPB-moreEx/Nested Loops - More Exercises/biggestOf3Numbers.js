function biggestOf3Numbers(first, second, third) {
  let biggestNum = Number.MIN_SAFE_INTEGER;
  if (first > biggestNum) {
    biggestNum = first;
  }
  if (second > biggestNum) {
    biggestNum = second;
  }
  if (third > biggestNum) {
    biggestNum = third;
  }

  console.log(biggestNum);
}
biggestOf3Numbers(-2, 7, 43);
