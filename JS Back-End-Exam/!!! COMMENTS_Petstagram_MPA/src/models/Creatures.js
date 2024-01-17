const mongoose = require("mongoose");

let creaturesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    minLength: 2,
  },
  image: {
    type: String,
    required: true,
    validate: [/^https?:\/\//i, "Invalid image URL!"],
  },
  age: {
    type: Number,
    required: [true, "Age is required!"],
    minLength: 2,
    maxLength: 100,
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
    minLength: 5,
    maxLength: 50,
  },
  location: {
    type: String,
    required: [true, "Location is required!"],
    minLength: 5,
    maxLength: 50,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  commentList: [
    {
      user: {
        type: mongoose.Types.ObjectId,
        required: "true",
        ref: "User",
      },
      message: { type: String, required: [true, "Message is required!"] },
    },
  ],
});

creaturesSchema.method("getComment", function () {
  return this.commentList.map((x) => x._id);
});

let Creatures = mongoose.model("Creatures", creaturesSchema);

module.exports = Creatures;
