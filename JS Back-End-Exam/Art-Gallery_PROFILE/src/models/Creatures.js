const mongoose = require("mongoose");

let creaturesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Tittle is required!"],
    minLength: 2,
  },
  technique: {
    type: String,
    required: [true, "Technique is required!"],
    minLength: [3, "Technique must be at least 3 characters!"],
  },
  image: {
    type: String,
    required: [true, "Image is required!"],
    validate: [/^https?:\/\//i, "Invalid image URL!"],
  },
  certificate: {
    type: String,
    required: [true, "Certificate is required!"],
    lowercase: true,
    enum: {
      values: ["yes", "no"],
      message: "Certificate must be yes or no",
    },
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },

  votes: [
    {
      user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    },
  ],
});

// creaturesSchema.method("getComment", function () {
//   return this.commentList.map((x) => x._id);
// });

let Creatures = mongoose.model("Creatures", creaturesSchema);

module.exports = Creatures;
