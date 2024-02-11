const mongoose = require("mongoose");

let creaturesSchema = new mongoose.Schema({
  headline: {
    type: String,
    required: [true, "Name is required!"],
    minLength: 4,
  },

  location: {
    type: String,
    required: [true, "Price is required!"],
    min: 0,
  },
  companyName: {
    type: String,
    required: [true, "Description is required!"],
    minLength: 2,
  },
  companyDescription: {
    type: String,
    required: [true, "Genre is required!"],
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
