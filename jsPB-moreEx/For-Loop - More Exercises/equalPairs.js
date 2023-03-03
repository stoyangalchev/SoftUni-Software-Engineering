function equalPairs(input) {
  // Дадени са 2*n-на брой числа.
  const numberOfPairs = Number(input[0]) * 2;
  let firstNum = 0;
  let secondNum = 0;
  let thirdNum = 0;
  let fourthNum = 0;

  // двойка 1
  let sum = 0;
  // двойка 2
  let sum2 = 0;
  // разлика между две последователни двойки
  let diff = 0;
  // максималната разлика между две последователни двойки
  let maxDiff = 0;
  // всички двойки имат еднаква стойност,
  let equalSum = true;

  if (numberOfPairs === 2) {
    return console.log(`Yes, value=${Number(input[1]) + Number(input[2])}`);
  }

  for (let i = 1; i <= numberOfPairs; i += 2) {
    firstNum = Number(input[i]);
    secondNum = Number(input[i + 1]);

    if (i === numberOfPairs - 1) {
      sum = sum2;
      sum2 = firstNum + secondNum;
    } else {
      thirdNum = Number(input[i + 2]);
      fourthNum = Number(input[i + 3]);
      sum = firstNum + secondNum;
      sum2 = thirdNum + fourthNum;
    }

    if (sum === sum2) {
      continue;
    } else {
      diff = Math.abs(sum - sum2);
      if (diff > maxDiff) {
        maxDiff = diff;
      }
      equalSum = false;
    }
  }

  if (equalSum === true) {
    //  Ако всички двойки имат еднаква стойност, отпечатайте "Yes, value={Value}" + стойността.
    console.log(`Yes, value=${firstNum + secondNum}`);
  } else {
    // печата максималната разлика между две последователни двойки
    console.log(`No, maxdiff=${maxDiff}`);
  }
}
equalPairs([4, 1, 1, 3, 1, 2, 2, 0, 0]);
