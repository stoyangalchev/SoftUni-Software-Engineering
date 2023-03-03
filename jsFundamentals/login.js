function reverseString(str) {
  let pass = str.shift();
  let reversed = pass.split("").reverse().join("");
  let length = str.length;
  let count = 0;
  for (let i = 0; i <= length; i++) {
    let curentWord = str.shift();
    count++;
    if (curentWord === reversed) {
      console.log(`User ${pass} logged in.`);
      break;
    } else {
      if (count === 4 && curentWord != reversed) {
        console.log(`User ${pass} blocked!`);
        break;
      }
      console.log(`Incorrect password. Try again.`);
    }
  }
}
reverseString(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
reverseString(["Acer", "login", "go", "let me in", "recA"]);
