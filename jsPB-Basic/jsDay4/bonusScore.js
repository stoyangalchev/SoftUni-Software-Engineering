function bonusScore(input) {
    let num = Number(input[0]);
    let bonus = 0.0;

    if (num <= 100) {
        bonus = 5
    }
    else if (num > 100 && num < 1000) {
        bonus = 0.20 * num
    } else  {
        bonus = 0.10 * num
    }

    if (num % 2 === 0) {
        bonus += 1;
    } else if (num % 10 === 5) {
        bonus += 2
    }
    console.log(bonus);
    console.log(bonus + num);
}
bonusScore(["150"])
