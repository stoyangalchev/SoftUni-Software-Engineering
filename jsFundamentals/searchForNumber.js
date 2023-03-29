function searchForNumber(number, operation) {
  let [first, second, third] = operation;

  let firstTakeEl = number.slice(0, first);
  let secondDeletedEl = firstTakeEl.slice(second);

  let counter = 0;
  for (let i = 0; i < secondDeletedEl.length; i++) {
    if (Number(secondDeletedEl[i]) === Number(third)) {
      counter++;
    }
  }
  console.log(`Number ${third} occurs ${counter} times.`);
}
searchForNumber([7, 1, 5, 8, 2, 7],
  [3, 1, 5]
  );




