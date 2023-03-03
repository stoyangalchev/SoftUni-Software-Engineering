function fuelTank(input) {
  let fuel = input[0];
  let litres = Number(input[1]);

  switch (fuel) {
    case "Diesel":
      {
        if (litres < 25) {
          console.log(`Fill your tank with diesel!`);
        } else if (litres >= 25) {
          console.log(`You have enough diesel.`);
        }
      }
      break;
    case "Gasoline":
      {
        if (litres < 25) {
          console.log(`Fill your tank with gasoline!`);
        } else if (litres >= 25) {
          console.log(`You have enough gasoline.`);
        }
      }
      break;
    case "Gas":
      {
        if (litres < 25) {
          console.log(`Fill your tank with gas!`);
        } else if (litres >= 25) {
          console.log(`You have enough gas.`);
        }
      }
      break;
    default:
      {
        console.log(`Invalid fuel!`);
      }
      break;
  }
}
fuelTank(["Gas", 10]);
