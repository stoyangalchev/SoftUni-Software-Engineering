function solve(input) {
    let text = input[0];
    
    let sum = 0;
    for (let i = 0; i < text.length; i++) {
       let firstchar = text[i]
        if (firstchar == "a") {
            sum += 1
        } else if (firstchar == "e") {
            sum +=2
        } else if (firstchar == "i") {
            sum +=3
        } else if (firstchar == "o") {
            sum +=4
        } else if (firstchar == "u") {
            sum +=5
        }
    }console.log(sum);
}
solve(["bamboo"])