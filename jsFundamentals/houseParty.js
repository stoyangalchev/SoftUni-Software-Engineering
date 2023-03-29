function houseParty(arr) {
  let result = [];

  for (let el of arr) {
    let command = el.split(" ");
    let name = command[0];
    // console.log(name);
    if (command.length === 3) {
      if (result.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        result.push(name);
      }
    } else {
      if (!result.includes(name)) {
        console.log(`${name} is not in the list!`);
      } else {
        let index = result.indexOf(name);
        result.splice(index, 1);
      }
    }
  }
  console.log(result.join("\n"));
}
houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
