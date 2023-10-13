class OnlineShop {
  constructor(warehouseSpace) {
    (this.warehouseSpace = warehouseSpace),
      (this.products = []),
      (this.sales = []);
  }
  loadingStore(product, quantity, spaceRequired) {
    if (spaceRequired > this.warehouseSpace) {
      throw Error("Not enough space in the warehouse.");
    }
    this.warehouseSpace -= spaceRequired;
    this.products.push({ product, quantity });
    return `The ${product} has been successfully delivered in the warehouse.`;
  }
  quantityCheck(product, minimalQuantity) {
    let productCheck = this.products.find((p) => p.product == product);

    if (!productCheck) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }

    if (minimalQuantity <= 0) {
      throw Error(`The quantity cannot be zero or negative.`);
    } else if (minimalQuantity <= productCheck.quantity) {
      return `You have enough from product ${product}.`;
    } else {
      let difference = minimalQuantity - productCheck.quantity;
      productCheck.quantity = minimalQuantity;
      return `You added ${difference} more from the ${product} products.`;
    }
  }
  sellProduct(product) {
    let sellProduct = this.products.find((p) => p.product == product);

    if (!sellProduct) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }

    sellProduct.quantity--;
    this.sales.push({ [product]: 1 });
    return `The ${sellProduct.product} has been successfully sold.`;
  }
  revision() {
    let allsales = [];
    if (this.sales.length < 1) {
      throw Error(`There are no sales today!`);
    }
    allsales.push(`You sold ${this.sales.length} products today!`);
    allsales.push(`Products in the warehouse:`);

    this.products.map((x) =>
      allsales.push(`${x.product}-${x.quantity} more left`)
    );
    return allsales.join("\n");
  }
}
const myOnlineShop = new OnlineShop(500);
console.log(myOnlineShop.loadingStore("headphones", 10, 200));
console.log(myOnlineShop.loadingStore("laptop", 5, 200));

console.log(myOnlineShop.quantityCheck("headphones", 10));
console.log(myOnlineShop.quantityCheck("laptop", 10));

console.log(myOnlineShop.sellProduct("headphones"));
console.log(myOnlineShop.sellProduct("laptop"));
console.log(myOnlineShop.revision());
