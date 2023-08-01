function areaOfFigures(input) {
    let figure = input[0];
    let a = Number(input[1]);

    if (figure === "square") {
        console.log((a * a).toFixed(3))
    } else if (figure === "rectangle") {
        let b = Number(input[2]);

        console.log((a * b).toFixed(3))
    } else if (figure === "circle") {
        let result = Math.PI * (Math.pow(a, 2))
        console.log(result.toFixed(3))

    } else if (figure === "triangle") {
        let b = Number(input[2]);

        console.log(((a*b)/2).toFixed(3))


    }
}
areaOfFigures(["triangle",
"4.5",
"20"])