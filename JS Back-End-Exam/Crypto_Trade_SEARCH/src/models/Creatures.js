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
  payment: {
    type: String,
    required: [true, "Platform is required!"],
    enum: ["crypto-wallet", "credit-card", "debit-card", "paypal"],
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
