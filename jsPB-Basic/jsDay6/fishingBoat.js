function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let countFisherman = Number(input[2]);
    let rent = 0;


    switch (season) {
        case "Summer": {
            rent = 4200
            if (countFisherman <= 6) {
                rent *= 0.9;
                if (countFisherman % 2 == 0) {
                    rent *= 0.95

                }
            } else if (countFisherman >= 7 && countFisherman <= 11) {
                rent *= 0.85;
                if (countFisherman % 2 == 0) {
                    rent *= 0.95
                }
            } else if (countFisherman >= 12) {
                rent *= 0.75;
                if (countFisherman % 2 == 0) {
                    rent *= 0.95
                }

            }

        }; break;
        case "Winter": {
            rent = 2600;
            if (countFisherman <= 6) {
                rent *= 0.9;
                if (countFisherman % 2 == 0) {
                    rent *= 0.95

                }
            } else if (countFisherman >= 7 && countFisherman <= 11) {
                rent *= 0.85;
                if (countFisherman % 2 == 0) {
                    rent *= 0.95
                }
            } else if (countFisherman >= 12) {
                rent *= 0.75;
                if (countFisherman % 2 == 0) {
                    rent *= 0.95
                }
            }

        }; break;
        case "Autumn": {
            rent = 4200;
            if (countFisherman <= 6) {
                rent *= 0.9;


            }
            else if (countFisherman >= 7 && countFisherman <= 11) {
                rent *= 0.85;


            } else if (countFisherman >= 12) {
                rent *= 0.75;

            }

        }; break;
        case "Spring": {
            rent = 3000;
            if (countFisherman <= 6) {
                rent *= 0.9;
                if (countFisherman % 2 == 0) {
                    rent *= 0.95

                }
            } else if (countFisherman >= 7 && countFisherman <= 11) {
                rent *= 0.85;
                if (countFisherman % 2 == 0) {
                    rent *= 0.95
                }
            } else if (countFisherman >= 12) {
                rent *= 0.75;
                if (countFisherman % 2 == 0) {
                    rent *= 0.95
                }
            }

        }; break;
    }
    let dif = Math.abs(budget - rent);

    if (budget >= rent) {
        console.log(`Yes! You have ${dif.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${dif.toFixed(2)} leva.`);
    }

}

fishingBoat(["2000", "Spring", "26"])