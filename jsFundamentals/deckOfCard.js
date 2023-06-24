function deckOfCard(input) {
  let line = input.shift().split(", ");
  let numCommand = Number(input.shift());

  for (let i = 0; i < numCommand; i++) {
    let curentLine = input.shift().split(", ");
    let [command, index1, index2] = curentLine;

    switch (command) {
      case "Add":
        {
          if (!line.includes(index1)) {
            line.push(index1);
            console.log("Card successfully added");
          } else {
            console.log("Card is already in the deck");
          }
        }
        break;
      case "Remove":
        {
          if (line.includes(index1)) {
            let index = line.indexOf(index1);
            line.splice(index, 1);
            console.log("Card successfully removed");
          } else {
            console.log("Card not found");
          }
        }
        break;

      case "Remove At":
        {
          if (index1 < 0 || index1 >= line.length) {
            console.log("Index out of range");
          } else {
            line.splice(index1, 1);
            console.log("Card successfully removed");
          }
        }
        break;
      case "Insert":
        {
          if (index1 < 0 || index1 >= line.length) {
            console.log("Index out of range");
          } else if (index1 >= 0 && index1 < line.length) {
            if (line.includes(index2)) {
              console.log("Card is already added");
            } else if (!line.includes(index2)) {
              line.splice(index1, 0, index2);
              console.log("Card successfully added");
            }
          }
        }
        break;
    }
  }

  console.log(line.join(", "));
}
deckOfCard([
  "Jack of Spades, Ace of Clubs, Jack of Clubs",
  "2",
  "Insert, -1, Queen of Spades",
  "Remove At, 1",
]);
