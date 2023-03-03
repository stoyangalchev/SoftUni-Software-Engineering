function sleepyTomCat(input) {
  let target = 30000;
  let workPlayDay = 63;
  let restDay = 127;
  let dayInYearRest = Number(input[0]);
  let year = 365;
  let dayInYearWork = year - dayInYearRest;
  let timeRestDays = dayInYearRest * restDay;
  let timeWorkDays = workPlayDay * dayInYearWork;
  let tomsTime = timeRestDays + timeWorkDays;
  let dif =Math.abs(target - tomsTime);
  let hInMin = dif / 60; //95.416
  let h = hInMin - Math.trunc(hInMin);
  let m = Math.round(h * 60);
 if (target>=tomsTime){
    console.log("Tom sleeps well");
    
console.log(`${Math.trunc(hInMin)} hours and ${Math.trunc(m)} minutes less for play`);

 }else {
    console.log("Tom will run away");
    console.log(`${Math.trunc(hInMin)} hours and ${Math.trunc(m)} minutes more for play`);
 }
  
}
sleepyTomCat([113]);
