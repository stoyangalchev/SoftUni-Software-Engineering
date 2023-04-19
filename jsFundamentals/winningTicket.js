function winningTicket(arr) {
  let pattern =
    /(?=.{20}).*?(?=(?<ch>[@#$^]))(?<match>\k<ch>{6,}).*(?<=.{10})\k<match>.*/;

  arr = arr.trim().split(/\s*,\s*/);
  for (let line of arr) {
    let match = pattern.exec(line);

    if (match) {
      if (match.groups.match.length >= 6 && match.groups.match.length <= 9) {
        console.log(
          `ticket "${line}" - ${match.groups.match.length}${match.groups.ch}`
        );
      } else if (match.groups.match.length == 10) {
        console.log(
          `ticket "${line}" - ${match.groups.match.length}${match.groups.ch} Jackpot!`
        );
      }
    } else if (line.length !== 20) {
      console.log("invalid ticket");
    } else {
      console.log(`ticket "${line}" - no match`);
    }
  }
}
winningTicket("$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey");
