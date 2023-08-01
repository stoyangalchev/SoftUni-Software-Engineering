function tennisRanklist(input) {
    let tournamentCount = Number(input[0]);
    let point = Number(input[1]);
    let length = Number(input.length)

    let points = 0
    let winTournament = 0;

    for (let i = 2; i <= length; i++) {
        let curentWin = input[i]

        if (curentWin === "F") {
            points += 1200;
        } else if (curentWin === "SF") {
            points += 720;
        } else if (curentWin === "W") {
            points += 2000;
            winTournament++
        }
    }
    let finalPoint = points + point;
    let averagePoint = (finalPoint - point) / tournamentCount;
    let percentWin = (winTournament / tournamentCount) * 100

    console.log(`Final points: ${finalPoint}`);
    console.log(`Average points: ${Math.floor(averagePoint)}`);
    console.log(`${percentWin.toFixed(2)}%`);
}

tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"])