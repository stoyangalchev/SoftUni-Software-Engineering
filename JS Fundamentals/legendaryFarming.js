function solve(input) {
  let obj = {};

  for (let el of input) {
    let splited = el.split(" - ");
    let garageNumber = splited[0];
    let dataSplited = splited[1].split(":").join(" -");

    if (!obj.hasOwnProperty(garageNumber)) {
      obj[garageNumber] = dataSplited;
    } else {
      obj[garageNumber] += ". " + dataSplited;
    }
  }
  for (let [key, value] of Object.entries(obj)) {
    console.log(`Garage № ${key}`);
    let valueSplited = value.split(". ");
    for (let el of valueSplited) {
      console.log(`--- ${el}`);
    }
  }
}
solve([
  "1 - color: dark red, manufacture: WV",
  "2 - fuel type: diesel",
  "3 - color: dark blue, fuel type: petrol",
  "1 - color: green, fuel type: petrol",
]);
