function pCGameShop(input) {
  let numberGames = Number(input[0]);
  let hearthstone = 0;
  let fortnite = 0;
  let overwatch = 0;
  let others = 0;
  for (let i = 1; i <= input.length - 1; i++) {
    let gameName = input[i];
    if (gameName === "Hearthstone") {
      hearthstone++;
    } else if (gameName === "Fornite") {
      fortnite++;
    } else if (gameName === "Overwatch") {
      overwatch++;
    } else {
      others++;
    }
  }
  console.log(
    `Hearthstone - ${((hearthstone / numberGames) * 100).toFixed(2)}%`
  );
  console.log(`Fornite - ${((fortnite / numberGames) * 100).toFixed(2)}%`);
  console.log(`Overwatch - ${((overwatch / numberGames) * 100).toFixed(2)}%`);
  console.log(`Others - ${((others / numberGames) * 100).toFixed(2)}%`);
}
pCGameShop(["3", "Hearthstone", "Diablo 2", "Star Craft 2"]);
