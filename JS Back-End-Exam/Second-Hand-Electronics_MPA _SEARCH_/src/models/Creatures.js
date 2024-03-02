const mongoose = require("mongoose");

let creaturesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    minLength: 10,
  },
  type: {
    type: String,
    required: [true, "Type is required!"],
    minLength: 2,
  },
  production: {
    type: Number,
    required: [true, "Production is required!"],
    minLength: 1900,
    maxLength: 2023,
  },
  exploitation: {
    type: Number,
    required: [true, "Exploitation is required!"],
    minLength: 1,
    min: 0,
  },
  damages: {
    type: String,
    required: [true, "Damages is required!"],
    minLength: 10,
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
  price: {
    type: Number,
    required: [true, "Price is required!"],
    min: 0,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  buyingList: [
    {
      user: {
        type: mongoose.Types.ObjectId,
        required: "true",
        ref: "User",
      },
    },
  ],
});

creaturesSchema.method("getComment", function () {
  return this.commentList.map((x) => x._id);
});

let Creatures = mongoose.model("Creatures", creaturesSchema);

module.exports = Creatures;
