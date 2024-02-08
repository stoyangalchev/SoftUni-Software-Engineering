const mongoose = require("mongoose");

let creaturesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    minLength: 4,
  },
  image: {
    type: String,
    required: true,
    validate: [/^https?:\/\//i, "Invalid image URL!"],
  },
  price: {
    type: Number,
    required: [true, "Price is required!"],
    min: 0,
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
    minLength: 2,
  },
  genre: {
    type: String,
    required: [true, "Genre is required!"],
    minLength: 2,
  },

  description: {
    type: String,
    required: [true, "Description is required!"],
    minLength: 10,
  },
  platform: {
    type: String, //required; one of the following: "PC", "Nintendo", "PS4", "PS5", "XBOX"
    required: [true, "Platform is required!"],
    enum: ["PC", "Nintendo", "PS4", "PS5", "XBOX"],
    minLength: 2,
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
