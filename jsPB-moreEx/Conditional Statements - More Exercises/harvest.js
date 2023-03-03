function harvest(input) {
  let area = Number(input[0]);
  let oneSqr = Number(input[1]);
  let oneLitreVine = 2.5;
  let neededLitrVine = Number(input[2]);
  let workerNum = Number(input[3]);

  let allArea = area * oneSqr;
  let setAside = (0.4 * allArea) / oneLitreVine;
  let dif = Math.abs(setAside - neededLitrVine);
  let workerGiven = dif / workerNum;

  if (setAside >= neededLitrVine) {
    console.log(`Good harvest this year! Total wine: ${Math.floor(setAside)} liters.`);
    console.log(`${Math.ceil(dif)} liters left -> ${Math.ceil(workerGiven)} liters per person.`);
  } else if (setAside < neededLitrVine) {
    console.log(
      `It will be a tough winter! More ${Math.floor(Math.floor(dif))} liters wine needed.`
    );
  }
}
harvest([1020, 1.5, 425, 4]);
