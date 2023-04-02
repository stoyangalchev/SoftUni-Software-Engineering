function cats(arr) {
  let catty = [];

  class Catinfo {
    constructor(name, age) {
      (this.name = name), (this.age = age);
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let token = arr[i].split(" ");

    let catName = token[0];

    let catAge = token[1];

    let myCat = new Catinfo(catName, catAge);
    
    catty.push(myCat)
    
  }  
  

  for (let myCat of catty) {
    
   myCat.meow()
    
  }

}
cats(["Mellow 2", "Tom 5"]);
