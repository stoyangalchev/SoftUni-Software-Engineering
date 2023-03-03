function bestPlayer(input) {
  let index = 0;
  let namePlayer = input[index++];
  let best = 0;
  let goals = 0;
  while (namePlayer !== "END") {
    let score = Number(input[index++]);
    if (score > goals) {
      goals = score;
      best = namePlayer;
      if (goals >= 10) {
        break;
      }
    }
    namePlayer = input[index++];
  }
  console.log(`${best} is the best player!`);
  if (goals >= 3)
    console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
  else console.log(`He has scored ${goals} goals.`);
}
bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);
