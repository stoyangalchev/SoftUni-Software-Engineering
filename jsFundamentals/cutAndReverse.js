function cutAndReverse(input) {
  let revers = input.split("").reverse().join("");
  let lenghtInput = revers.length;

  console.log(revers.substring(lenghtInput / 2));
  console.log(revers.substring(0, lenghtInput / 2));
}
cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
