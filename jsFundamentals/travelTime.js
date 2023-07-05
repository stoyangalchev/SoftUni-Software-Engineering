function solve(input) {
  let result = {};

  input.map((x) => {
    let [country, town, price] = x.split(" > ");

   
    if (!result.hasOwnProperty(country)) {
      // x[country] = {};
      result[country] = {};
    }

    if (!result[country].hasOwnProperty(town)) {
      result[country][town] = Number(price);
    } else if (result[country][town] > Number(price)) {
      result[country][town] = Number(price);
    }

   
  });

  let sorted = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));
  sorted.forEach(([country, towns]) => {
   
    let finalString = `${country} -> `;
    let sortedTowns = Object.entries(towns).sort((a, b) => a[1] - b[1]);
    sortedTowns.forEach(([town, price]) => {
      finalString += `${town} -> ${price} `;
    });

    console.log(finalString.trim());
  });
}
solve([
  "Bulgaria > Sofia > 25000",
  "aaa > Sofia > 1",
  "aa > Orgrimar > 0",
  "Albania > Tirana > 25000",
  "zz > Aarna > 25010",
  "Bulgaria > Lukovit > 10",
]);
