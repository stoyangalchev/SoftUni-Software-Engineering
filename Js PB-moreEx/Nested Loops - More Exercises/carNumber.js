function carNumber(input) {
    let firstDigit = Number(input[0]);
 
    let lastDigit = Number(input[1]);
 
    let combinations = "";
 
    for (let i = firstDigit; i <= lastDigit; i++) {
 
        for (let j = firstDigit; j <= lastDigit; j++) {
 
            for (let k = firstDigit; k <= lastDigit; k++) {
 
                for (let l = firstDigit; l <= lastDigit; l++) {
                    
                    if (i > l && (j + k) % 2 === 0) {
                        if (i % 2 === 0 && l % 2 !== 0) {
                            combinations += `${i}${j}${k}${l} `;
                        }
                        else if (i % 2 !== 0 && l % 2 === 0){
                            combinations += `${i}${j}${k}${l} `;
                        }
                    }
                }
            }
        }
    }
    console.log(combinations);
}
carNumber(["2", "3"]);
