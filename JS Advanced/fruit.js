function fruit(fruit, grams, price) {
  let convertGrams = grams / 1000; //2.5
  let money = convertGrams * price; //4.5

  console.log(
    `I need $${money.toFixed(2)} to buy ${convertGrams.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
fruit("orange", 2500, 1.8);
