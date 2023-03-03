function celsiumaTof(input) {
    let celsium = Number(input[0]);
    let fahrenheit =celsium * 1.8000 + 32.00
    console.log(fahrenheit.toFixed(2));
}
celsiumaTof([25])
//°F =°C * 1.8000+ 32.00