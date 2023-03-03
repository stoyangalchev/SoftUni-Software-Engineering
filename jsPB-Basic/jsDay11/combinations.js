function combinations(input) {
    let n = Number(input[0])
    counter = 0
    for (let x1 = 0; x1 <= n; x1++) {
        for (let y2 = 0; y2 <= n; y2++) {
            for (let z3 = 0; z3 <= n; z3++) {
                if (x1 + y2 + z3 == n){
                    counter++
                }
            }  
        }
    }console.log(counter);
}
combinations(['5'])
