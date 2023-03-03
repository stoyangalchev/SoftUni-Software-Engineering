function newHouse(input) {
    let flowers = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);
    let sum = 0;
   
    switch (flowers) {
        case "Roses": {
            sum = count * 5;
            if (count > 80) {
                sum *= 0.90;
            }
        }; break;
        case "Dahlias": {
            sum = count * 3.80;
            if (count > 90) {
                sum *= 0.85;
            }

        }; break;
        case "Tulips": {
            sum = count * 2.80;
            if (count > 80) {
                sum *= 0.85;
            }
        }; break;
        case "Narcissus": {
            sum = count * 3;
            if (count < 120) {
                sum *= 1.15;
            }
        }; break;
        case "Gladiolus": {
            sum = count * 2.50;
            if (count < 80) {
                sum *= 1.2;
            }
        }; break;
    }
    let dif = Math.abs(sum - budget);

    if (budget>=sum) {
        console.log(`Hey, you have a great garden with ${count} ${flowers} and ${dif.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${dif.toFixed(2)} leva more.`);
    }
}
newHouse(["Narcissus", "119", "360"])

