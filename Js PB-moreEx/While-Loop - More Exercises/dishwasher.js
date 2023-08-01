function dishwasher(input) {
  let littersDetergent = Number(input.shift());
  let detergent = littersDetergent * 750;

  let numberOfConteiners = "";
  let conteiners = 0;
  let counter = 0;
  let disheWashed = 0;
  let potsWashed = 0;

  while (true) {
    numberOfConteiners = input.shift();
    if (numberOfConteiners === "End") {
      break;
    }
    counter++;
    if (counter % 3 === 0) {
      conteiners = Number(numberOfConteiners);
      potsWashed += conteiners;
      detergent -= conteiners * 15;
    } else {
      conteiners = Number(numberOfConteiners);
      disheWashed += conteiners;
      detergent -= conteiners * 5;
    }
    if (detergent < 0) {
      console.log(
        `Not enough detergent, ${Math.abs(detergent)} ml. more necessary!`
      );
      return;
    }
  }
  console.log("Detergent was enough!");
  console.log(`${disheWashed} dishes and ${potsWashed} pots were washed.`);
  console.log(`Leftover detergent ${Math.abs(detergent)} ml.`);
}

dishwasher([1, 10, 15, 10, 12, 13, 30]);
