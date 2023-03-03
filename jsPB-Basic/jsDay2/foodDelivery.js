function foodDelivery(input) {

    let chicken = 10.35;
    let fish = 12.40;
    let veggan = 8.15

    let chickenMenu = Number(input[0]) * chicken;
    let fishMenu = Number(input[1]) * fish;
    let vegganMenu = Number(input[2]) * veggan;

    let allPrice = chickenMenu + fishMenu + vegganMenu;
    let dessert = 0.2 * allPrice
    let finalPrice = allPrice + dessert + 2.50

    console.log(finalPrice)
}
foodDelivery(["2", "4", "3"])