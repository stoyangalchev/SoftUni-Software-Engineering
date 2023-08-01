function multiplicationTable(input) {
    let num = Number(input[0]);
    for (let i = 1; i <= 10; i++) {
        let multiplication = i * num;
        console.log(`${i} * ${num} = ${multiplication}`);

    }

}
multiplicationTable(["5"])