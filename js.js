function solve(input) {
  let index = 0;
  let day = Number(input[index]);
  index++;

  let sum = 0;
  let allsum = 0;

  let km = Number(input[index]); //30
  index++;
  let firstday = km;

  let counter = 0;
  while (counter < day) {
    let currentPercent = Number(input[index]); //10
    sum += km + (km * currentPercent) / 100;
    allsum += sum;
    km = sum;
    sum = 0;

    index++;
    counter++;
  }
  let plus1Day = allsum + firstday;

  if (plus1Day >= 1000) {
    console.log(
      `You've done a great job running ${Math.ceil(
        plus1Day - 1000
      )} more kilometers!`
    );
  } else {
    console.log(
      `Sorry Mrs. Ivanova, you need to run ${Math.ceil(
        1000 - plus1Day
      )} more kilometers`
    );
  }
}
solve(["4", "100", "30", "50", "60", "80"]);
