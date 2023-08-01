function trainingLab(input) {
  let mackerelPrice = Number(input[0]);
  let sprinklePrice = Number(input[1]);
  let bonitoPrice = mackerelPrice * 1.6;
  let safridPrice = sprinklePrice * 1.8;
  let shellPrice = 7.5;

  let mackerelSum = mackerelPrice;
  let sprinkleSum = safridPrice;
  let bonitoSum = Number(input[2]) * bonitoPrice;
  let safridSum = Number(input[3]) * safridPrice;
  let shellSum = Number(input[4]) * shellPrice;

  let sum = safridSum + bonitoSum + shellSum;
  console.log(sum.toFixed(2));
}
trainingLab([5.55, 3.57, 4.3, 3.6, 7]);
