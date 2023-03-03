function pipesInPool(input) {
  let v = Number(input[0]);
  let p1Debbit = Number(input[1]);
  let p2Debbit = Number(input[2]);
  let hoursMissed = Number(input[3]);

  let pipe1 = p1Debbit * hoursMissed;
  let pipe2 = p2Debbit * hoursMissed;
  let sum = pipe1 + pipe2;

  let poolPercent = (sum / v) * 100;
  let pipe1Percent =(pipe1/sum)*100;
  let pipe2Percent = (pipe2 /sum)*100;
  
  if (sum<=v){
    console.log(`The pool is ${poolPercent.toFixed(2)}% full. Pipe 1: ${pipe1Percent.toFixed(2)}%. Pipe 2: ${pipe2Percent.toFixed(2)}%.`);
  }else {
    console.log(`For ${hoursMissed.toFixed(2)} hours the pool overflows with ${(sum-v).toFixed(2)} liters.`);
  }

}
pipesInPool([100,
    100,
    100,
    2.5
    ]);
