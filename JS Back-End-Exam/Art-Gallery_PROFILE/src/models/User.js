const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { log } = require("util");

const SALT_ROUNDS = 5;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required!"],

    minLength: 3,
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    minLength: 4,
  },

  address: {
    type: String,
    required: [true, "Address is required!"],
    minLength: 4,
  },
  publications: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Creatures",
    },
  ],
  sharedpost: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Creatures",
    },
  ],
});

userSchema.pre("save", async function (next) {
  return await bcrypt.hash(this.password, SALT_ROUNDS).then((hash) => {
    this.password = hash;
    return next();
  });
});

userSchema.method("validatePassword", async function (password) {
  return bcrypt.compare(password, this.password);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
