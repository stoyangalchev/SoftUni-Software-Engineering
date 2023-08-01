function operationsBetweenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let evenOdd = 0;
    let discount = 0;

    if (operator === "+" || operator === "-" || operator === "*") {
        switch (operator) {
            case "+": {/*"{N1} {оператор} {N2} = {резултат} – {even/odd}"*/
                result = num1 + num2;

            }; break;
            case "-": {
                result = num1 - num2;
            }; break;
            case "*": {
                result = num1 * num2;
            }; break;
        }if (result % 2 === 0) {
            evenOdd = "even"
            console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOdd}`);
        } else {
            evenOdd = "odd"
            console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOdd}`);
        }
    } else if (num2 === 0) {
        console.log(`Cannot divide ${num1} by zero`);
    } else if (operator === "/") {
        switch (operator) {
            case "/": {
                result = num1 / num2;
            }; break;
        }
        console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
    
} else if (operator === "%") {
    switch (operator) {
        case "%": {
            result = num1 % num2
            console.log(`${num1} % ${num2} = ${result}`);
        }; break;
    }
}
    


}
operationsBetweenNumbers(["7",

    "3",

    "/"])