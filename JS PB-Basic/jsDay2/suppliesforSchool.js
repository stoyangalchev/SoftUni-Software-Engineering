function suppliesforSchool(input) {
    let pens = Number(input[0]);//Цена на пакетите химикали =>2 * 5.80 = 11.60 лв.
    //Цена на пакетите маркери =>3 * 7.20= 21.60 лв.
    //Цена на препарата =>4* 1.20= 4.80 лв.
    //Цена за всички материали => 11.60 + 21.60 + 4.80 = 38.00 лв.
    //25% = 0.25
    //Цена с намаление = 38.00 – (38.00 * 0.25) = 28.50 лв.

    let markers = Number(input[1]);
    let preparation = Number(input[2]);
    let discount = Number(input[3])/100
    let numPens = pens * 5.80
    let numMarkers = markers * 7.20
    let numPreparation = preparation * 1.20
    let allAmpunt = numMarkers+numPens+numPreparation
    let discountSum= allAmpunt-(allAmpunt*discount)

        console.log(discountSum);
}
suppliesforSchool(["4",
"2",
"5",
"13"]

)