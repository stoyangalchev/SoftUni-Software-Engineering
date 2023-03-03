function summerOutfit(input) {
    let degree = Number(input[0]);
    let dayTime = input[1];
    let outfit = 0;
    let shoes = 0;
    if (degree >= 10 && degree <= 18) {
        if (dayTime === "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
            console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
        } else if (dayTime === "Afternoon" || dayTime === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
            console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
        }
    } else if (degree >= 18 && degree <= 24) {
        if (dayTime === "Afternoon") {
            outfit = "T-Shirt"
            shoes = "Sandals"
            console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
        } else if (dayTime === "Morning" || dayTime === "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins"
            console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
        }
    } else if (degree >= 25) {
        if (dayTime === "Morning") {
            outfit = "T-Shirt"
            shoes = "Sandals"
            console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
        } else if (dayTime === "Afternoon") {
            outfit = "Swim Suit"
            shoes = "Barefoot"
            console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
        }else if (dayTime==="Evening"){
            outfit = "Shirt"
            shoes = "Moccasins"
            console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`)
}
    }


}
summerOutfit((["28", "Evening"]))