function listOfNames(input) {
  let sorted = input.sort((a, b) => a.localeCompare(b));

  let i = 1;
  for (let el of sorted) {
    console.log(`${i}.${el}`);
    i++;
  }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);
