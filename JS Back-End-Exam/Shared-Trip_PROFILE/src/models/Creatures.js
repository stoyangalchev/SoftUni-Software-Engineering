const mongoose = require("mongoose");

let creaturesSchema = new mongoose.Schema({
  start: {
    type: String,
    required: [true, "Start is required!"],
  },
  end: {
    type: String,
    required: [true, "End is required!"],
  },
  date: {
    type: String,
    required: [true, "Date is required!"],
  },
  time: {
    type: String,
    required: [true, "Time is required!"],
  },
  image: {
    type: String,
    required: true,
    validate: [/^https?:\/\//i, "Invalid image URL!"],
  },
  brand: {
    type: String,
    required: [true, "Brand is required!"],
  },
  seats: {
    type: Number,
    required: [true, "Seats is required!"],
  },
  price: {
    type: Number,
    required: [true, "Price is required!"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
  },
  signUpList: [
    {
      user: {
        type: mongoose.Types.ObjectId,
        required: "true",
        ref: "User",
        min: 0,
      },
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});


creaturesSchema.method("getComment", function () {
  return this.signUpList.map((x) => x._id);
});

let Creatures = mongoose.model("Creatures", creaturesSchema);

module.exports = Creatures;
