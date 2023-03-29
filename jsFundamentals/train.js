function train(input) {
  let numbers = input
    .shift()
    .split(" ")
    .map((x) => Number(x));
  //   console.log(numbers);

  let max = Number(input.shift()); // for each wagon in the train
  //   console.log(max);

  for (let i = 0; i < input.length; i++) {
    let arrNew = input[i].split(" ");
    let command = arrNew[0];
    let firstValue = arrNew[1];

    // console.log(arrNew);
    // console.log(command);
    // console.log(firstValue);
    if (arrNew.length === 2 && command === "Add") {
      numbers.push(firstValue);
    } else {
      let passengers = Number(arrNew[0]);
      for (let j = 0; j < numbers.length; j++) {
        if (passengers + numbers[j] <= max) {
          numbers[j] += passengers;

          break;
        }
      }
    }
  }
  console.log(numbers.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
