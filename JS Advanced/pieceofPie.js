function pieceofPie(input, str1, str2) {
  let result = [];
  let indexofstr1 = input.indexOf(str1);
  let indexofstr2 = input.indexOf(str2);

  return input.slice(indexofstr1, indexofstr2 + 1);
}
console.log(pieceofPie(
  [
    "Apple Crisp",
    "Mississippi Mud Pie",
    "Pot Pie",
    "Steak and Cheese Pie",
    "Butter Chicken Pie",
    "Smoked Fish Pie",
  ],
  "Pot Pie",
  "Smoked Fish Pie"
))
