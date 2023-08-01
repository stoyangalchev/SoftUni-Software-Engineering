function meetings(arr) {
  let result = {};

  for (let el of arr) {
    let tokens = el.split(" ");
    let day = tokens[0];
    let name = tokens[1];

    if (!result.hasOwnProperty(day)) {
      result[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }
  for (let element in result) {
    console.log(`${element} -> ${result[element]}`);
  }
}
meetings([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
