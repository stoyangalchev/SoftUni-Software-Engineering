function oscars(input) {
    let actorName = input[0];
    let point = Number(input[1]);
    let countJudges = Number(input[2]);

    for (let i = 3; i < input.length; i++) {
        let judgeName = input[i++]
        let judgePoint = Number(input[i])
        let judgeNameL = Number(judgeName.length)
        point = ((judgeNameL * judgePoint) / 2) + point

        if (point > 1250.5) {
            break;
        }

    }
    let notEnought = Math.abs(point - 1250.5)

    if (point > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${point.toFixed(1)}!`)
    }
    else {
        console.log(`Sorry, ${actorName} you need ${notEnought.toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])