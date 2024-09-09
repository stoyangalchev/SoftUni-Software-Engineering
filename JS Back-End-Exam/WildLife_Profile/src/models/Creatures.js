const mongoose = require("mongoose");

let creaturesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required!"],
    minLength: 2,
  },

  keyword: {
    type: String,
    required: [true, "Age is required!"],
    minLength: 2,
    maxLength: 100,
  },
  location: {
    type: String,
    required: [true, "Description is required!"],
    minLength: 5,
    maxLength: 50,
  },
  dateCreation: {
    type: String,
    required: [true, "Date is required!"],
  },
  image: {
    type: String,
    required: true,
    validate: [/^https?:\/\//i, "Invalid image URL!"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
    minLength: 5,
   
  },
  ratingofpost: {
    type: Number,

    min: 0,
  },

  voted: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],

  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

creaturesSchema.method("getComment", function () {
  return this.voted.map((x) => x._id);
});

let Creatures = mongoose.model("Creatures", creaturesSchema);

module.exports = Creatures;
