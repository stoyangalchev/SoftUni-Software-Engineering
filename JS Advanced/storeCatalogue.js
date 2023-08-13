function storeCatalogue(input) {
  let sorted = input.sort((a, b) => {
    return a.localeCompare(b);
  });

  let obj = {};

  for (let i = 0; i < sorted.length; i++) {
    let char = sorted[i][0];
    if (!obj.hasOwnProperty(char)) {
      obj[char] = [];
      obj[char].push(sorted[i]);
    } else {
      if (sorted[i].startsWith(char)) {
        obj[char].push(sorted[i]);
      }
    }
  }

  for (let [key, value] of Object.entries(obj)) {
    console.log(key);
    for (let el of value) {
      console.log(`  ${el.split(" : ").join(": ")}`);
    }
  }
}
storeCatalogue([
  "Banana : 2",
  "Rubic's Cube : 5",
  "Raspberry P : 4999",
  "Rolex : 100000",
  "Rollon : 10",
  "Rali Car : 2000000",
  "Pesho : 0.000001",
  "Barrel : 10",
]);
