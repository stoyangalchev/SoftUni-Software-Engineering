function moveing(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let hight = Number(input[2]);

    let capacity = width * length * hight;
    let command = input[3]
    let index = 4
    let pieces = 0;
    while (command !== "Done") {
        pieces += Number(command);

        if (pieces > capacity) {
            break;
        }
        command = input[index]
        index++
    }
    if (capacity >= pieces) {
        console.log(`${capacity - pieces} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${pieces-capacity} Cubic meters more.`);
    }

}
moveing(["10",

    "10",

    "2", "20", "20", "20", "20", "122"])