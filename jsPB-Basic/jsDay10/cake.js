function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);

    let allCake = width * length;
    let piceTaken = 0
    let command = input[2]
    let index = 3

    while (command !== "STOP") {
        piceTaken+=Number(command);
        
        if (piceTaken>allCake){
            break;
        }
        command = input[index]
        index++
    }
    if ( piceTaken<=allCake){
        console.log(`${allCake-piceTaken} pieces are left.`);
    }else{
        console.log(`No more cake left! You need ${piceTaken-allCake} pieces more.`);
    }
}
cake(["10",

"10",

"20",

"20","20", "20", "21"])