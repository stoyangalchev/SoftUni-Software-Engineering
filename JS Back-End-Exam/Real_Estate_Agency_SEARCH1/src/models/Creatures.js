const mongoose = require("mongoose");

let creaturesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    minLength: 4,
  },
  type: {
    type: String,
    required: [true, "Type is required!"],
    minLength: 2,
  },
  year: {
    type: Number,
    required: [true, "Year is required!"],
    min: 1850,
    max: 2021,
  },
  city: {
    type: String,
    required: [true, "City is required!"],
    minLength: 2,
  },
  image: {
    type: String,
    required: true,
    validate: [/^https?:\/\//i, "Invalid image URL!"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
    minLength: 2,
  },
  pieces: {
    type: Number,
    required: [true, "Pieces is required!"],
    min: 0,
  },

  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  donations: [
    {
      user: {
        type: mongoose.Types.ObjectId,
        required: "true",
        ref: "User",
      },
    },
  ],
});

creaturesSchema.method("buy", function () {
  return this.donations.map((x) => x._id);
});

let Creatures = mongoose.model("Creatures", creaturesSchema);

module.exports = Creatures;
