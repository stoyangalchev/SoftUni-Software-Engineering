function townPopulation(array) {
  let obj = {};
  for (let el of array) {
    let [town, population] = el.split(" <-> ");
    population = Number(population);

    if (!obj.hasOwnProperty(town)) {
      obj[town] = population;
    } else {
      obj[town] += population;
    }
  }
  for (let [key, value] of Object.entries(obj)) {
    console.log(`${key} : ${value}`);
  }
}
townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
