function storage(arr) {
  let map = new Map();

  for (let el of arr) {
    let tokens = el.split(" ");
    let product = tokens[0];
    let quantity = Number(tokens[1]);
    if (!map.has(product)) {
      map.set(product, quantity);
    } else {
      let currQuantity = map.get(product);
      let newQuantity = (currQuantity += quantity);
      map.set(product, newQuantity);
    }
  }
  for (let [key, value] of map) {
    console.log(`${key} -> ${value}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
