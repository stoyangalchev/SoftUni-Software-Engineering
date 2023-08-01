function carToGo(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let clas = 0;

  switch (season) {
    case "Summer":
      {
        if (budget <= 100) {
          clas = "Economy class";
          console.log(clas);
          carPrice = budget * 0.35;
          console.log(`${"Cabrio"} - ${carPrice.toFixed(2)}`);
        } else if (budget <= 500) {
          clas = "Compact class";
          console.log(clas);
          carPrice = budget * 0.45;
          console.log(`${"Cabrio"} - ${carPrice.toFixed(2)}`);
        } else if (budget > 500) {
          clas = "Luxury class";
          console.log(clas);
          carPrice = budget * 0.9;
          console.log(`${"Jeep"} - ${carPrice.toFixed(2)}`);
        }
      }
      break;
    case "Winter": {
      if (budget <= 100) {
        clas = "Economy class";
        console.log(clas);
        carPrice = budget * 0.65;
        console.log(`${"Jeep"} - ${carPrice.toFixed(2)}`);
      } else if (budget <= 500) {
        clas = "Compact class";
        console.log(clas);
        carPrice = budget * 0.8;
        console.log(`${"Jeep"} - ${carPrice.toFixed(2)}`);
      } else if (budget > 500) {
        clas = "Luxury class";
        console.log(clas);
        carPrice = budget * 0.9;
        console.log(`${"Jeep"} - ${carPrice.toFixed(2)}`);
      }
    }
  }
}
carToGo([450, "Winter"]);
