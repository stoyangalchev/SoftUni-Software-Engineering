function series(input) {
  let budget = Number(input.shift());
  let numberFilm = Number(input.shift());

  let serialSum = 0;

  for (let i = 0; i < input.length; i++) {
    let currentName = input[i];
    i++;
    let currentNum = Number(input[i]);

    if (currentName === "Thrones") {
      currentNum *= 0.5;
    } else if (currentName === "Lucifer") {
      currentNum *= 0.6;
    } else if (currentName === "Protector") {
      currentNum *= 0.7;
    } else if (currentName === "TotalDrama") {
      currentNum *= 0.8;
    } else if (currentName === "Area") {
      currentNum *= 0.9;
    }
    serialSum += currentNum;
  }
  let dif = Math.abs(budget - serialSum);
  if (budget >= +serialSum) {
    console.log(
      `You bought all the series and left with ${dif.toFixed(2)} lv.`
    );
  } else {
    console.log(`You need ${dif.toFixed(2)} lv. more to buy the series!`);
  }
}
series(["50",
"2",
"Lord of the rings",
"40",
"Gotham",
"10"
])