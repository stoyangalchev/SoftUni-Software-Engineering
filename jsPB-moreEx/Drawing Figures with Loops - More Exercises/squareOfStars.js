function squareOfStars(input){
  let n= Number(input.shift())
    for(let c=1;c<=n;c++){
        console.log(`${"* ".repeat(n)}`);
    }
}
squareOfStars([2])