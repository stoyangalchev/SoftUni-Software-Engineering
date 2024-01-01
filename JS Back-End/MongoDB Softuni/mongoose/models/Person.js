const mongoose = require('mongoose');   // import mongoose module

const personSchema = new mongoose.Schema({  // create schema
    name: String,   // name field
    age: Number,    // age field
    color: String,  // color field
    breed: String   // breed field
});

const Person = mongoose.model('Person', personSchema);  // create model from schema 

module.exports = Person;    // export model for use in other files
