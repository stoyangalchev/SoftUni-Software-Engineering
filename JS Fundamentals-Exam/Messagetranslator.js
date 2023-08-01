function Messagetranslator(input) {
  let number = input.shift(); //2

  let regex = /\!(?<tex>([A-Z][a-z]{3,}))\!:\[(?<name>[A-z]{8,})\]/gm;

  let myArray = [];

  let newArray = [];
  let obj = {};
  for (let i = 0; i < number; i++) {
    let element = input[i];
    let digitArray = [];
    if ((myArray = regex.exec(element)) !== null) {
      let tex = myArray.groups["tex"];
      let name = myArray.groups["name"];
      let arrayname = Array.from(name);

      for (let el of arrayname) {
        let char = el.charCodeAt();
        digitArray.push(char);
      }
      let allarray = `${tex}: ${digitArray.join(" ")}`;
      console.log(allarray);
      newArray.push(allarray);
      digitArray = [];
    } else {
      console.log("The message is invalid ");
    }
  }
}
Messagetranslator([
  "2",
  "!Send!:[IvanisHere]",
  "!Sensd!:[IvanisHere]",
  "*Time@:[Itis5amAlready",
]);
console.log("......");
Messagetranslator([
  "3",
  "!play!:[TheNewSong]",
  "!Ride!:[Bike]",
  "!Watch!:[LordofTheRings]",
]);


