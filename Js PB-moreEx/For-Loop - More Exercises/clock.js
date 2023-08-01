function clock() {
  for (let h = 0; h <= 23; h++) {
    let hour = h;
    for (let m = 0; m <= 59; m++) {
      let min = m;
      for (let s = 0; s <= 59; s++) {
        let sec = s;

        console.log(`${hour} : ${min} : ${sec}`);
      }
    }
  }
}

clock();
