function employees(input) {
  let obj = {};

  for (let person of input) {
    obj.name = person;
    obj.number = person.length;
    console.log(`Name: ${obj.name} -- Personal Number: ${obj.number} `);
  }
}
employees(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
