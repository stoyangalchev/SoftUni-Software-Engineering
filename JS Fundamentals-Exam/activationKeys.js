function activationKeys(input) {
  let key = input.shift();

  let line = input.shift();
  while (line !== "Generate") {
    let [command, index1, index2, index3] = line.split(">>>");

    switch (command) {
      case "Slice":
        {
          key = key.slice(0, index1) + key.slice(index2, key.length);
          console.log(key);
        }
        break;
      case "Flip":
        {
          if (index1 == "Upper") {
            key =
              key.slice(0, index2) +
              key.slice(index2, index3).toUpperCase() +
              key.slice(index3, key.length);
            console.log(key);
          } else if (index1 == "Lower") {
            key =
              key.slice(0, index2) +
              key.slice(index2, index3).toLowerCase() +
              key.slice(index3, key.length);
            console.log(key);
          }
        }
        break;
      case "Contains": {
        if (key.includes(index1)) {
          console.log(`${key} contains ${index1}`);
        } else {
          console.log(`Substring not found!`);
        }
      }
    }

    line = input.shift();
  }
  console.log(`Your activation key is: ${key}`);
}
activationKeys([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate",
]);
