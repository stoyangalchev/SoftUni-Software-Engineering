function skiTrip(input) {
    let overNight = Number(input[0]) - 1;
    let room = input[1];
    let greed = input[2];

    let roomOnePerson = 18;
    let apartment = 25;
    let president = 35;
    let sum = 0;

    switch (room) {
        case "room for one person": {
            if (overNight <= 10) {
                sum = roomOnePerson * overNight;
            } else if (overNight > 10 && overNight <= 15) {
                sum = roomOnePerson * overNight;
            } else if (overNight > 15) {
                sum = roomOnePerson * overNight;
            }
        }; break;
        case "apartment": {
            if (overNight <= 10) {
                sum = apartment * overNight * 0.70;
            } else if (overNight > 10 && overNight <= 15) {
                sum = apartment * overNight * 0.65;
            } else if (overNight > 15) {
                sum = apartment * overNight * 0.50;
            }
        }; break;
        case "president apartment": {
            if (overNight <= 10) {
                sum = president * overNight * 0.90;
            } else if (overNight > 10 && overNight <= 15) {
                sum = president * overNight * 0.75;
            } else if (overNight > 15) {
                sum = president * overNight * 0.80;
            }
        }; break;
    }
    if (greed == "positive") {
        sum *= 1.25
    } else if (greed == "negative") {
        sum *= 0.90;
    }console.log(sum.toFixed(2));
}


skiTrip(["2", "apartment", "positive"])