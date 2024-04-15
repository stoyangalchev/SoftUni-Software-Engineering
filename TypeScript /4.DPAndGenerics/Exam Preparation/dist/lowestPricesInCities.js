function lowestPricesInCities(input) {
    const products = new Map();
    input.forEach((line) => {
        const [town, product, price] = line.split(" | ");
        if (!products.has(product)) {
            products.set(product, new Map());
        }
        products.get(product).set(town, Number(price));
    });
    for (const [product, towns] of products) {
        let lowestPrice = Number.MAX_SAFE_INTEGER;
        let lowestPriceTown = "";
        for (const [town, price] of towns) {
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
