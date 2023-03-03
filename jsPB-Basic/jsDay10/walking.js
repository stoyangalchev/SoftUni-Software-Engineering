function walking(input) {
    let steps = 0;
    let target = 10000;
    let goingHome = input[input.length - 2]

    if (goingHome === "Going home") {

        for (let i = 0; i < input.length - 2; i++) {
            steps += Number(input[i]);
        }
        steps += Number(input[input.length - 1])
    } else {
        for (let i = 0; i < input.length; i++) {
            steps += Number(input[i]);
        }
    }
    if (steps >= target) {
        console.log("Goal reached! Good job!")
        console.log(`${steps - target} steps over the goal!`);
    } else {
        console.log(`${target - steps} more steps to reach goal.`);


    }
}


walking(["1000",

"1000",

"Going home",

"6500"])