function nameGame(input) {
  let index = 0;

  let command = input[index++];
  let points = 0; //10
  let maxPoint = 0;
  let maxPoints2=0
  let name = "";
  let maxname = "";

  while (command != "Stop") {
    let name = command;
    
    for (let i = 0; i < command.length; i++) {
      
      let num = Number(input[index++]);
      let length = command.charCodeAt(i);
      if (num === length) {
        points += 10;
      } else {
        points += 2;
      }
      
    }maxPoint += points;

    if (points == maxPoint) {
      maxname = name;
      maxPoint = points;
    }

    command = input[index++];
  }
  console.log(`The winner is ${name} with ${points} points!`);
}
nameGame([
  "Pesho",
  "124",
  "34",
  "111",
  "97",
  "99",
  "Gosho",
  "98",
  "124",
  "88",
  "76",
  "18",
  "Stop",
]);
