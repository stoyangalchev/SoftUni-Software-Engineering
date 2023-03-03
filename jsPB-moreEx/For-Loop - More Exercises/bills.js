function bills(input) {
  let month = Number(input.shift());
  let waterBill = 20;
  let internetBill = 15;
  let othersBill = 0;

  let electricitySum = 0;
  let waterSum = 0;
  let internetSum = 0;
  let othersSum = 0;
  for (let m = 1; m <= month; m++) {
    let electricityBill = Number(input.shift());

    electricitySum += electricityBill;
    waterSum += waterBill;
    internetSum += internetBill;
    othersSum += (electricityBill + waterBill + internetBill) * 1.2;
  }
  let avarageSum =
    (electricitySum + waterSum + internetSum + othersSum) / month;

  console.log(`Electricity: ${electricitySum.toFixed(2)} lv`);
  console.log(`Water: ${waterSum.toFixed(2)} lv`);
  console.log(`Internet: ${internetSum.toFixed(2)} lv`);
  console.log(`Other: ${othersSum.toFixed(2)} lv`);
  console.log(`Average: ${avarageSum.toFixed(2)} lv`);
}
bills([5, 68.63, 89.25, 132.53, 93.53, 63.22]);
