function evenPowersOf2(input) {
    let n = Number(input[0]);
   
    for (a = 0; a <= n; a += 2) {
     let result = Math.pow(2,a)
        console.log(result);
        

    }
}
evenPowersOf2(["10"])