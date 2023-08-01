function cinema(input) {
    let projectionType = input[0];
    let row = Number(input[1]);
    let colum = Number(input[2]);

    switch (projectionType){
        case "Premiere": console.log((row*colum*12).toFixed(2));break;
        case "Normal": console.log((row*colum*7.5).toFixed(2));break;
        case "Discount": console.log((row*colum*5).toFixed(2));break;
    }
}
cinema(["Normal", "21", "13"])