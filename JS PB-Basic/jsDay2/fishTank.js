function fishTank(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let value = lenght * height * width;
    let valueInlitres = value / 1000;
    let litersNeed = valueInlitres * (1- (percent/100))
    
        console.log(litersNeed)
}
fishTank(["85", "75", "47", "17"])