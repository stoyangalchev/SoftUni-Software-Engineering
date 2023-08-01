function pets(input) {
    let day =Number(input[0]);
    let food = Number(input[1]);
    let dogFood =Number(input[2]);
    let catFood =Number(input[3]);
    let turtleFood =Number(input[4]);

    let dogNeeded =day*dogFood;
    let catNeeded =day*catFood;
    let turtleNeeded =(day *turtleFood)/1000;

    let sum =dogNeeded+catNeeded+turtleNeeded;
    let dif =Math.abs(food-sum);

    if (food>=sum){
        console.log(`${Math.floor(dif)} kilos of food left.`);
    }else {
        console.log(`${Math.ceil(dif)} more kilos of food are needed.`);
    }
}
pets([5,
    10,
    2.1,
    0.8,
    321
    ]);
