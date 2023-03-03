function traveling(input) {
    let index = 0;
    let array = input[index]

    while (array !== "End") {
        let destination = array
        index++
        let price = Number(input[index])
        let saved = 0
        while (saved < price) {
            index++
            saved += Number(input[index])
        }
        console.log(`Going to ${destination}!`);
        index++
        array = input[index]
    }
}
traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])