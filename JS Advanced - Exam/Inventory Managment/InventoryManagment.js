class InventoryManager {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = [];
    this.outOfStock = [];
  }
  addItem(itemName, quantity) {
    quantity = Number(quantity);
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }
    if (this.capacity == this.items.length) {
      throw new Error("The inventory is already full.");
    }

    let findItem = this.items.find((x) => {
      return x.name == itemName;
    });
    if (findItem == undefined) {
      this.items.push({ itemName, quantity });
    } else {
      findItem.quantity += quantity;
    }
    return `Added ${quantity} ${itemName}(s) to the inventory.`;
  }

  sellItem(itemName, quantity) {
    quantity = Number(quantity);
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }
    let findItem = this.items.find((x) => {
      return x.itemName == itemName;
    });
    if (findItem == undefined) {
      throw new Error(
        `The item ${itemName} is not available in the inventory.`
      );
    }
    if (quantity > findItem.quantity) {
      throw new Error(`Not enough ${itemName}(s) in stock.`);
    }
    findItem.quantity -= quantity;
    ////////////////
    if (findItem.quantity <= 0) {
      this.items = this.items.filter((x) => {
        return x.itemName != findItem.itemName;
      });
      this.outOfStock.push(findItem);
    }
    return `Sold ${quantity} ${itemName}(s) from the inventory.`;
  }
  restockItem(itemName, quantity) {
    quantity = Number(quantity);
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }
    let findItem = this.items.find((x) => {
      return x.itemName == itemName;
    });
    let findOutOfStockItem = this.outOfStock.find((x) => {
      return x.itemName == itemName;
    });
    if (findItem == undefined) {
      this.items.push({ itemName, quantity });
    } else {
      findItem.quantity += quantity;
    }
    if (findOutOfStockItem == undefined) {
    } else {
      this.outOfStock = this.outOfStock.filter((x) => {
        return x.itemName != findOutOfStockItem.itemName;
      });
    }
    return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
  }
  getInventorySummary() {
    let result = ["Current Inventory:"];
    this.items.forEach((x) => {
      return result.push(`${x.itemName}: ${x.quantity}`);
    });
    let outStockArray = ["Out of Stock: "];
    let arr = [];
    if (this.outOfStock.length > 0) {
      this.outOfStock.forEach((x) => {
        return arr.push(`${x.itemName}`);
      });
      outStockArray.push(arr.join(", "));

      result.push(outStockArray.join(""));
    }

    return result.join("\n");
  }
}
const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 10));
console.log(manager.sellItem("Hammer", 5));
// console.log(manager.restockItem("Drill", 10));
console.log(manager.restockItem("Paintbrush", 1));

console.log(manager.getInventorySummary());

("Current Inventory:\nChisel: 5\nDrill: 1\nOut of Stock: Hammer");
("Current Inventory:\nChisel: 5\nDrill: 1\nOut of Stock:  Hammer");
