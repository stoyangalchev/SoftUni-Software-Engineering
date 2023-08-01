function coffeLover(input) {
  let line = input.shift().split(" ");
  let numCommands = Number(input.shift());

  for (let i = 0; i < numCommands; i++) {
    let curentLine = input.shift().split(" ");
    let [command, index1, index2] = curentLine;

    switch (command) {
      case "Include":
        {
          line.push(index1);
        }
        break;
      case "Remove":
        {
          if (index1 == "first") {
            line.splice(0, index2);
          }
          if (index1 == "last") {
            line.splice(-index2);
          }
        }
        break;
      case "Include":
        {
          line.push(index1);
        }
        break;
      case "Prefer":
        {
          index1 = Number(index1);
          index2 = Number(index2);
          let valueFirst = line[index1];
          let valueSec = line[index2];
          line.splice(index1, 1, valueSec);
          line.splice(index2, 1, valueFirst);
        }
        break;
      case "Reverse":
        {
          line.reverse();
        }
        break;
    }
  }
  console.log(`Coffees: 
${line.join(" ")}`);
}
coffeLover([
  "Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
  "5",
  "Include TurkishCoffee",
  "Remove first 2",
  "Remove last 1",
  "Prefer 3 1",
  "Reverse",
]);
