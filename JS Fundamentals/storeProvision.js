function storeProvision(store, addToStore) {
  let object = {};

  for (let i = 0; i < store.length; i++) {
    let product = store[i];
    let quantity = store[i + 1];
    i++;
    object[product] = Number(quantity);
  }
  for (let j = 0; j < addToStore.length; j++) {
    let product = addToStore[j];
    let quantity = addToStore[j + 1];
    j++;
    if (!object.hasOwnProperty(product)) {
      object[product] = 0;
    }
    object[product] += Number(quantity);
  }

  for (let [key, value] of Object.entries(object)) {
    console.log(`${key} -> ${value}`);
  }
}
storeProvision(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
