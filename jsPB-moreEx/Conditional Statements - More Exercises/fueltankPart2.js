function fueltankPart2(input) {
  let fuelType = input[0];
  let litrefuel = Number(input[1]);
  let card = input[2];
  let gasoline = 2.22;
  let diesel = 2.33;
  let gas = 0.93;
  let zaredil = 0;

  switch (fuelType) {
    case "Gas":
      {
        if (card === "Yes") {
          gas = gas - 0.08;
        }
        zaredil = litrefuel * gas;
      }
      break;
    case "Diesel":
      {
        if (card === "Yes") {
          diesel = diesel - 0.12;
        }
        zaredil = litrefuel * diesel;
      }
      break;
    case "Gasoline":
      {
        if (card === "Yes") {
          gasoline = gasoline - 0.18;
        }
        zaredil = litrefuel * gasoline;
      }
      break;
  }
  if (litrefuel > 20 && litrefuel <= 25) {
    zaredil = zaredil * 0.92;
    console.log(zaredil.toFixed(2)+ " lv.");
  }
  if (litrefuel > 25) {
    zaredil = zaredil * 0.9;
    console.log(zaredil.toFixed(2)+ " lv.");
  }
  if (litrefuel<=20){
   if (fuelType==="Gasoline"){
      zaredil= gasoline*litrefuel;
      
   }else if (fuelType==="Diesel"){
    zaredil= diesel*litrefuel;
 }else if (fuelType==="Gas"){
    zaredil= gas*litrefuel;
 }
 console.log(zaredil.toFixed(2) + " lv.");
  }
  
}
fueltankPart2(["Diesel", 19, "No"]);
