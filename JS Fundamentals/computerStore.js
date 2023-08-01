function computerStore(arr) {
  if (arr[0] === "regular" || arr[0] === "special") {
    console.log("Invalid order!");
    return;
  }
  let last = arr.pop().toLowerCase();

  let sum = 0;
  for (num of arr) {
    num = Number(num);
    if (num < 0) {
      console.log("Invalid price!");
    } else {
      sum += num;
    }
  }
  if (sum === 0) {
    return console.log("Invalid order!");
  }
  console.log("Congratulations you've just bought a new computer!");
  console.log(`Price without taxes: ${sum.toFixed(2)}$`);

  let taxes = 0.2 * sum;
  console.log(`Taxes: ${taxes.toFixed(2)}$\n-----------`);
  let total = taxes + sum;
  if (last === "special") {
    total *= 0.9;
  }
  console.log(`Total price: ${total.toFixed(2)}$`);
}
computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
