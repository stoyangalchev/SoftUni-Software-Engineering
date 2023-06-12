function shopingList(input) {
  let result = input.shift().split("!");

  i = 0;
  let command = input[i];
  i++;

  while (command !== "Go Shopping!") {
    let [command1, product1, product2] = command.split(" ");

    switch (command1) {
      case "Urgent":
        {
          if (!result.includes(product1)) {
            result.unshift(product1);
          }
        }
        break;
      case "Unnecessary":
        {
          if (result.includes(product1)) {
            let indexOfProduct = result.indexOf(product1);
            result.splice(indexOfProduct, 1);
          }
        }
        break;
      case "Correct":
        {
          if (result.includes(product1)) {
            let indexOfProduct = result.indexOf(product1);
            result.splice(indexOfProduct, 1, product2);
          }
        }
        break;

      case "Rearrange": {
        if (result.includes(product1)) {
          let indexOfProduct = result.indexOf(product1);
          let splicedProduct = result.splice(indexOfProduct, 1).join(" ");
          result.push(splicedProduct);
        }
      }
    }

    command = input[i++];
  }
  console.log(result.join(", "));
}
shopingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);

shopingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
