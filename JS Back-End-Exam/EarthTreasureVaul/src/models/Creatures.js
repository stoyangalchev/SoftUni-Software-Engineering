const mongoose = require("mongoose");

let creaturesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    minLength: [2, "Name must be at least 2 characters long!"],
  },

  category: {
    type: String,
    required: [true, "Category is required!"],
    minLength: [3, "Category must be at least 3 characters long!"],
  },
  color: {
    type: String,
    required: [true, "Color is required!"],
    minLength: [3, "Color must be at least 3 characters long!"],
  },
  image: {
    type: String,
    required: [true, "Image is required!"],
    validate: [/^https?:\/\//i, "Invalid image URL!"],
  },
  location: {
    type: String,
    required: [true, "Location is required!"],
    minLength: [5, "Location must be at least 5 characters long!"],
    maxLength: [15, "Location must be at most 15 characters long!"],
  },

  formula: {
    type: String,
    required: [true, "Formula is required!"],
    minLength: [3, "Formula must be at least 3 characters long!"],
    maxLength: [30, "Formula must be at most 30 characters long!"],
  },

  description: {
    type: String,
    required: [true, "Formula is required!"],
    minLength: [10, "Description must be at least 10 characters long!"],
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
