function oddEvenPosition(input) {
  let numbers = Number(input.shift());

  let oddSum = 0;
  let evenSum = 0;
  let maxOdd = Number.MIN_SAFE_INTEGER;
  let minOdd = Number.MAX_SAFE_INTEGER;
  let maxEven = Number.MIN_SAFE_INTEGER;
  let minEven = Number.MAX_SAFE_INTEGER;

  for (let p = 1; p <= numbers; p++) {
    let num = Number(input.shift());
    if (p % 2 !== 0) {
      oddSum += num;
      if (num >= maxOdd) {
        maxOdd = num;
      }
      if (num <= minOdd) {
        minOdd = num;
      }
    } else if (p % 2 === 0) {
      evenSum += num;
      if (num >= maxEven) {
        maxEven = num;
      }
      if (num <= minEven) {
        minEven = num;
      }
    }
  }

  console.log(`OddSum=${oddSum.toFixed(2)},`); //
  if (minOdd === Number.MAX_SAFE_INTEGER) {
    console.log(`OddMin=${"No"},`);
  } else {
    console.log(`OddMin=${minOdd.toFixed(2)},`);
  }
  if (maxOdd === Number.MIN_SAFE_INTEGER) {
    console.log(`OddMax=${"No"},`);
  } else {
    console.log(`OddMax=${maxOdd.toFixed(2)},`);
  }

  console.log(`EvenSum=${evenSum.toFixed(2)},`); //

  if (minEven === Number.MAX_SAFE_INTEGER) {
    console.log(`EvenMin=${"No"},`);
  } else {
    console.log(`EvenMin=${minEven.toFixed(2)},`);
  }
  if (maxEven === Number.MIN_SAFE_INTEGER) {
    console.log(`EvenMax=${"No"}`);
  } else {
    console.log(`EvenMax=${maxEven.toFixed(2)}`);
  }
}
oddEvenPosition([0]);
