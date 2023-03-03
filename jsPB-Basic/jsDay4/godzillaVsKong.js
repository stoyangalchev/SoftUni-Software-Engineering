function godzillaVsKong(input) {
    let movieBudget = Number(input[0]);
    let people = Number(input[1]);
    let clothes = Number(input[2]);
    let decor = movieBudget * 0.10;//2000
    if (people > 150) {
        clothes = clothes * 0.90
    }
    let sumForClothes = clothes * people //6660
    let finalSum = decor + sumForClothes;//8660
    
    if (finalSum > movieBudget) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(finalSum - movieBudget).toFixed(2)} leva more.`)
    }
    if (finalSum <= movieBudget) {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(movieBudget - finalSum).toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["15437.62",

    "186",

    "57.99"])