function numbersDividedby3WithoutReminder() {
  for (let index = 1; index < 100; index++) {
    let n = index;
    if (n % 3 === 0) {
      console.log(n);
    }
  }
}
numbersDividedby3WithoutReminder();
