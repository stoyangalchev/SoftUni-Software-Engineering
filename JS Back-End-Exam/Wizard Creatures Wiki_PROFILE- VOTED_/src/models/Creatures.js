const mongoose = require("mongoose");

let creaturesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    minLength: 2,
  },
  species: {
    type: String,
    required: [true, "species is required!"],
    minLength: 3,
  },
  skinColor: {
    type: String,
    required: [true, "skinColor is required!"],
    minLength: 3,
  },

  eyeColor: {
    type: String,
    required: [true, "eyeColor is required!"],
    minLength: 3,
  },
  image: {
    type: String,
    required: true,
    validate: [/^https?:\/\//i, "Invalid image URL!"],
  },
  description: {
    type: String,
    required: [true, "description is required!"],
    minLength: 5,
    maxLength: 500,
  },

  votes: [
    {
      user: {
        type: mongoose.Types.ObjectId,
        required: "true",
        ref: "User",
      },
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

// creaturesSchema.method("getComment", function () {
//   return this.commentList.map((x) => x._id);
// });

let Creatures = mongoose.model("Creatures", creaturesSchema);

module.exports = Creatures;
