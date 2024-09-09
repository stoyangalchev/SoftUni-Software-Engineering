const jwt = require("../utils/jwt");
const User = require("../models/User");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
exports.register = (userData) => User.create(userData);

exports.findUserByID = (userId) => User.findById(userId).lean();

exports.login = async ({ email, password }) => {
  let user = await User.findOne({ email });



  if (!user) {
    throw new Error("Invalid Email or Password ");
  }

  let isValid = await user.validatePassword(password);

  if (!isValid) {
    throw new Error("Invalid Email or Password");
  }

  let payload = {
    _id: user._id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
  };

  let token = await jwt.sign(payload, JWT_SECRET);

  return token;
};
