function phoneBook(array) {
  let result = {};

  for (let el of array) {
    let tokens = el.split(" ");
    let name = tokens[0];
    let number = tokens[1];
    result[name] = number;
  }
  for (let [keys, values] of Object.entries(result)) {
    console.log(`${keys} -> ${values}`);
  }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
