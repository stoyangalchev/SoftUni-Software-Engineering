function aMinerTask(arr) {
  let result = new Map();

  for (let i = 0; i < arr.length; i += 2) {
    let product = arr[i];
    let quantity = Number(arr[i + 1]);

    if (!result.has(product)) {
      result.set(product, 0);
    }
    let oldQuantity = result.get(product);
    result.set(product, oldQuantity + quantity);
  }

  for (let [key, value] of result) {
    console.log(`${key} -> ${value}`);
  }
}
aMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);

console.log("............");

function aMinerTask(input) {
  let collection = {};

  for (let i = 0; i < input.length; i += 2) {
    let resource = input[i];
    let quantity = Number(input[i + 1]);

    if (!collection.hasOwnProperty(resource)) {
      collection[resource] = 0;
    }
    collection[resource] += quantity;
  }

  for (let item in collection) console.log(`${item} -> ${collection[item]}`);
}
aMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
