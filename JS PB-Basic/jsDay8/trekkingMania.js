function trekkingMania(input) {
    let groupCount = Number(input[0]);
     
    let firstGroup = 0;
    let secondGroup = 0;
    let thirdGroup = 0;
    let fourthGroup = 0;
    let fifthGroup = 0;

    let group = 0;
    let allPeople = 0; //326

    for (let i = 1; i <= groupCount; i++) {
        group = Number(input[i]);
        allPeople += Number(input[i]);

        if (group <= 5) {
            firstGroup += group
        } else if (group <= 12) {
            secondGroup += group
        } else if (group <= 25) {
            thirdGroup += group
        } else if (group <= 40) {
            fourthGroup += group
        } else {
            fifthGroup += group
        }
    }
    let p1Percantage = 0;
    let p2Percantage = 0;
    let p3Percantage = 0;
    let p4Percantage = 0;
    let p5Percentage = 0;

    p1Percantage += firstGroup / allPeople * 100;
    p2Percantage += secondGroup / allPeople * 100
    p3Percantage += thirdGroup / allPeople * 100
    p4Percantage += fourthGroup / allPeople * 100
    p5Percentage += fifthGroup / allPeople * 100

    console.log(p1Percantage.toFixed(2)+"%");
    console.log(p2Percantage.toFixed(2)+"%");
    console.log(p3Percantage.toFixed(2)+"%");
    console.log(p4Percantage.toFixed(2)+"%");
    console.log(p5Percentage.toFixed(2)+"%");


}
trekkingMania(["5","25","41","31","250","6"])