function addressBook(arr) {
  let result = {};

  for (let el of arr) {
    let tokens = el.split(":");
    let name = tokens[0];
    let address = tokens[1];
    result[name] = address;
  }

  const sortable = Object.fromEntries(
    Object.entries(result).sort(([a], [b]) => a.localeCompare(b))
  );
  for (let element in sortable) {
    console.log(`${element} -> ${sortable[element]}`);
  }
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
