function sumOfTwoNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let magicNum = Number(input[2]);
    let combNum = 0
    let flag = false
    for (let a = num1; a <= num2; a++) {
        
        for (let b = num1; b <= num2; b++) {
            combNum++
            if (a + b === magicNum) {
                
                console.log(`Combination N:${combNum} (${a} + ${b} = ${magicNum})`);
                flag = true
                break;
            }
        } if (flag) 
        { break; }
    }
if (!flag){
    console.log(`${combNum} combinations - neither equals ${magicNum}`);
}
}
sumOfTwoNumbers(["23",

"24",

"20"])