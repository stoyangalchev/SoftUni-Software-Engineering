const mongoose = require("mongoose");

const Cat = require("./models/Cat");
const Person = require("./models/Person");

async function connectDb() {
  await mongoose.connect("mongodb://127.0.0.1:27017/DemoDB");

  console.log("Db Connected successfully");

  // const result = await Cat.giveMeCats() // Static model method
  // result.forEach(cat => cat.greet()); // instance method
  //   result.forEach(cat => cat.greet()); // instance method
  // result.forEach(cat => console.log(cat.info)); // virtual property

  
  // !!!!Read
  // const cats = await Cat.find({ breed: 'Angora' });
  // const cats = await Cat.findOne({breed: 'Angora'});
  // const cats = await Cat.findById('646f8c5265a096882c26c345');

  // !!!Create method 1
  //   const newPerson = new Person({
  //     name: "Stanislava",
  //     age: 25,
  //   });
  //   await newPerson.save();

  // !!!Create method 2
  //   const newCat = await Person.create({
  //     age: 25,
  //     name: "Simona",
  //     color: "White",
  //     breed: "Chovek",
  //   });

  //!!! Update method 1
  //   const cat = await Cat.findOne({ name: "SOFAI" });
  //   cat.name = "Malkolm";
  //   cat.age = 15;
  //   await cat.save();

  // !!!Update method 2 native mongoDb
  //   await Cat.updateOne({ breed: "ssssssss" }, { $set: { age: 10 } });

  //!!! Update method 3 the mongoose extension
  //   await Cat.findByIdAndUpdate("6587284c55c1a77917c97e41", {
  //     $set: { breed: "Angora" },
  //   });

  //!!! Delete method 1
  // await Cat.deleteOne({ name: "aaa" });

  //!!! Delete method 2
  // await Person.findByIdAndDelete("6587276d0861bebfdd2657d5");

  //   Creating collection by creating first record in non existant collection
  //   await Person.create({
  //       name: 'Pesho',
  //       age: 20,
  //   });

  // Find all non angora cats
  //   const cats = await Cat.find({ breed: { $ne: "Angora" } });
  //   const cats = await Cat.find().where('breed').ne('Angora');
  //   console.log(cats);
}

connectDb();
