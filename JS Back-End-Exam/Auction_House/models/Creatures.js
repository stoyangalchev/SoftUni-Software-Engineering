const mongoose = require("mongoose");

let creaturesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required!"],
    minLength: 2,
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
    minLength: 3,
  },
  category: {
    type: String,
    required: [true, "Category is required!"],
    minLength: 3,
  },
  image: {
    type: String,
    required: true,
    validate: [/^https?:\/\//i, "Invalid image URL!"],
  },
  price: {
    type: Number,
    required: [true, "Price is required!"],
    minLength: 3,
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
