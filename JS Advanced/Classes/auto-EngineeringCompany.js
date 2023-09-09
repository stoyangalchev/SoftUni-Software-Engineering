function autoEngineeringCompany(input) {
  let mapCars = {};
  for (const line of input) {
    let [brand, model, produced] = line.split(" | ");

    if (!mapCars.hasOwnProperty(brand)) {
      mapCars[brand] = {};
    }

    let mapModel = mapCars[brand];

    if (!mapModel.hasOwnProperty(model)) {
      mapModel[model] = 0;
    }

    mapModel[model] = mapModel[model] + Number(produced);
  }

  for (let [key, value] of Object.entries(mapCars)) {
    console.log(key);
    for (let [k, v] of Object.entries(value)) {
      console.log(`###${k} -> ${v}`);
    }
  }
}
autoEngineeringCompany([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
