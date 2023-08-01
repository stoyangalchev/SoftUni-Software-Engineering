function worldSwimmingRecord(input) {
    let recordInSec = Number(input[0]);
    let distanceInMetre = Number(input[1]);//3017
    let oneMetreInSec = Number(input[2]);//5.03

    let distanceToSwim = distanceInMetre * oneMetreInSec;//15175.51
    let waterResistance =Math.floor(distanceInMetre / 15) * 12.5; //2512.5

    let fullTime =(distanceToSwim + waterResistance); // 17688.01

    ivanTime =0;//37867.65

    if (recordInSec <= fullTime) {
        let ivanTime =fullTime - recordInSec
        console.log(`No, he failed! He was ${ivanTime.toFixed(2)} seconds slower.`);
    } else if (recordInSec > fullTime) {
      
        console.log(`Yes, he succeeded! The new world record is ${fullTime.toFixed(2)} seconds.`);
    }
}
worldSwimmingRecord(["55555.67", "3017", "5.03"])
worldSwimmingRecord (["10464",

"1500",

"20"])
