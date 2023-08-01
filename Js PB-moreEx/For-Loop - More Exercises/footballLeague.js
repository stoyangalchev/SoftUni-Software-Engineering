function footballLeague(input) {
  let capacityStadium = Number(input.shift());
  let countFans = Number(input.shift());

  let secA = 0;
  let secB = 0;
  let secV = 0;
  let secG = 0;
  for (let p = 1; p <= countFans; p++) {
    let firsFanSector = input.shift();
    if (firsFanSector === "A") {
      secA++;
    } else if (firsFanSector === "B") {
      secB++;
    } else if (firsFanSector === "V") {
      secV++;
    } else {
      secG++;
    }
  }
  let percentA = (secA / countFans) * 100;
  let percentB = (secB / countFans) * 100;
  let percentV = (secV / countFans) * 100;
  let percentG = (secG / countFans) * 100;
  let avarage = (countFans / capacityStadium) * 100;
  console.log(`${percentA.toFixed(2)}%`);
  console.log(`${percentB.toFixed(2)}%`);
  console.log(`${percentV.toFixed(2)}%`);
  console.log(`${percentG.toFixed(2)}%`);
  console.log(`${avarage.toFixed(2)}%`);
}
footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
