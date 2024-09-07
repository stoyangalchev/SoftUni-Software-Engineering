const jwt = require("../utils/jwt");
const User = require("../models/User");
require("dotenv").config();
const JWT_Secret = process.env.JWT_SECRET;
const { log } = require("util");
const bcrypt = require("bcrypt");

exports.register = (userData) => User.create(userData);

exports.login = async ({ username, password }) => {
  let user = await User.findOne({ username });

  console.log(user);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // let isValid = await user.validatePassword(password);

  // if (!isValid) {
  //   throw new Error("Invalid Password ");
  // }
  if (!password) {
    throw new Error("Invalid username or password");
  }

  let payload = {
    _id: user._id,
  };

  let token = await jwt.sign(payload, JWT_Secret);

  return token;
};
