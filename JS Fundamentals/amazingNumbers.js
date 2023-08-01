function amazingNumbers1(num) {
  let numberAsString = num.toString();
  let sum = 0;
  for (let i = 0; i < numberAsString.length; i++) {
    sum += Number(numberAsString[i]);
  }
 let result =sum.toString().includes("9")
 console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
}
amazingNumbers1(1233);
////////////////////////////////////////////////////////////////////////////
function amazingNumbers(num) {
    let numberAsString = num.toString();
    let sum = 0;
    for (let i = 0; i < numberAsString.length; i++) {
      sum += Number(numberAsString[i]);
    }
    let haveNine = false;
    let toStrSUm = String(sum);
  
    for (let i = 0; i < toStrSUm.length; i++) {
      let curentChar = Number(toStrSUm[i]);
      if (curentChar === 9) {
        haveNine = true;
        break;
      }
    }
    if (haveNine) {
      console.log(`${num} Amazing? True`);
    } else {
      console.log(`${num} Amazing? False`);
    }
  }amazingNumbers(999);