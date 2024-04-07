function calorieObject(input: string[]): void {
  const obj = {};

  input.forEach((element, index) => {
    if (index % 2 == 0) {
      obj[element] = Number(input[index + 1]);
    }

  });
      console.log(obj);
}

calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
