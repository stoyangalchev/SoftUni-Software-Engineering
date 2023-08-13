function calorieObject(input) {
  let result = {};
  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    let value = +input[i + 1];
    i++;
    result[element] = value;
  }
  console.log(result);
}
calorieObject(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
