function building(input) {
    let floor = Number(input[0]);
    let room = Number(input[1]);

    for (let f = floor; f >= 1; f--) {
        let string = ''
        for (let r = 0; r < room; r++) {

            if (floor == f) {
                string += (`L${f}${r} `);
            } else if (f % 2 === 0){
                string += (`O${f}${r} `);
            }else if (f % 2 !== 0){
                string += (`A${f}${r} `);
            }
            
        }
        console.log(string);

    }
}
building(["6", "4"])