function solve(input) {
    let days = Number(input[0]);
    let dayPlunder = Number(input[1]);
    let target = Number(input[2]);
  
    let dayCounter = 0;
    let totalPlunder = 0;
    for (let i = 0; i < days; i++) {
      dayCounter++;
      totalPlunder += dayPlunder;
  
      if (dayCounter % 3 == 0) {
        totalPlunder += dayPlunder * 0.5;
      }
      if (dayCounter % 5 == 0) {
        totalPlunder = totalPlunder * 0.7;
      }
    }
    if (totalPlunder >= target) {
      console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
      console.log(
        `Collected only ${((totalPlunder / target) * 100).toFixed(
          2
        )}% of the plunder.`
      );
    }
  }
  solve(["5", "40", "100"]);
  solve(["10", "20", "380"]);