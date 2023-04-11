function piccolo(data) {
  let result = new Set();

  for (let el of data) {
    let tokens = el.split(", ");
    let command = tokens[0];
    let number = tokens[1];

    if (command === "IN") {
      result.add(number);
    } else if (command === "OUT") {
      result.delete(number);
    }
  }
  let sorted = Array.from(result).sort();

  for (let index of sorted) {
    console.log(index);
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
