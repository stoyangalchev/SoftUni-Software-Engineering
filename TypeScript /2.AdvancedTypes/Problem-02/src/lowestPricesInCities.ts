function lowestPricesInCities(input: string[]) {
  let products = new Map<string, Map<string, number>>();
  for (let line of input) {
    let [town, product, price] = line.split(" | ");
    if (!products.has(product)) {
      products.set(product, new Map<string, number>());
    }
    products.get(product).set(town, Number(price));
  }
 
  for (let [product, towns] of products) {
    let lowestPrice = Number.MAX_SAFE_INTEGER;
    let lowestPriceTown = "";
    for (let [town, price] of towns) {
      if (price < lowestPrice) {
        lowestPrice = price;
        lowestPriceTown = town;
      }
    }
    console.log(`${product} -> ${lowestPrice} (${lowestPriceTown})`);
    
  }
}
lowestPricesInCities([
  "Sample Town | Sample Product | 1000",

  "Sample Town | Orange | 2",

  "Sample Town | Peach | 1",

  "Sofia | Orange | 3",

  "Sofia | Peach | 2",

  "New York | Sample Product | 1000.1",

  "New York | Burger | 10",
]);
