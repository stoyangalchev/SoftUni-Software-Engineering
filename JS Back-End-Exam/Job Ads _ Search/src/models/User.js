const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required!"],
    unique: true,
    minLength: 3,
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    minLength: 3,
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
    minLength: 3,
  },

  ads: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Creatures",
    },
  ],
});

userSchema.pre("save", function (next) {
  return bcrypt.hash(this.password, SALT_ROUNDS).then((hash) => {
    this.password = hash;

    return next();
  });
});

userSchema.method("validatePassword", function (password) {
  return bcrypt.compare(password, this.password);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
