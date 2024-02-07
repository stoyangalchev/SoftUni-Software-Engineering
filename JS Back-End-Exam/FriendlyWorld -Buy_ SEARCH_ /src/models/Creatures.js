const mongoose = require("mongoose");

let creaturesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required!"],
    minLength: 2,
  },
  years: {
    type: Number,
    required: [true, "years is required!"],
    minLength: 2,
  },
  kind: {
    type: String,
    required: [true, "kind is required!"],
    minLength: 2,
  },
  need: {
    type: String,
    required: [true, "need is required!"],
    minLength: 1,
    min: 0,
  },
  location: {
    type: String,
    required: [true, "location is required!"],
    minLength: 2,
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
    minLength: 10,
    maxLength: 200,
  },
  image: {
    type: String,
    required: true,
    validate: [/^https?:\/\//i, "Invalid image URL!"],
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
