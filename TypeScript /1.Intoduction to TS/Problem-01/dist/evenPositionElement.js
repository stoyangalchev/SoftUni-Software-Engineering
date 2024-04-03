function evenPositionElement(input) {
    let result = [];
    input.forEach((element) => {
        if (Number(element) % 2 === 0) {
            result.push(element);
        }
    });
    console.log(result.join(" "));
}
evenPositionElement(["20", "30", "40", "50", "60"]);
