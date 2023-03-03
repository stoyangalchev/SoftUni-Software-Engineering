function footballTournament(input) {
  let clubName = input[0]
  let countGames=Number(input[1])
  let win = 0;
  let draw = 0;
  let lose = 0;
if(countGames<=0){
    console.log(`${clubName} hasn't played any games during this season.`);
    return;
}
  for (let i = 2; i <= input.length - 1; i++) {
    let command = input[i];
    if (command === "W") {
      win++;
    } else if (command === "D") {
      draw++;
    } else if (command === "L") {
      lose++;
    }
  }

  let winPoints=win*3
  let drawPoints=draw*1
  
  let allActive= winPoints+drawPoints
  let winRate=win/countGames*100
 console.log(`${clubName} has won ${allActive} points during this season.
 Total stats:
 ## W: ${win}
 ## D: ${draw}
 ## L: ${lose}
 Win rate: ${winRate.toFixed(2)}%
 `);
}
footballTournament(["Liverpool",
"10",
"W",
"D",
"D",
"W",
"L",
"W",
"D",
"D",
"W",
"W"])

