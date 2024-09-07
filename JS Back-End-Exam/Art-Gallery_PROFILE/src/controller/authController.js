const router = require("express").Router();
const authServices = require("../services/authServices");
const { isGuest, isAuth } = require("../middleware/authMiddleware");
require("dotenv").config();
const { MongooseError } = require("mongoose");
const { ValidationError } = require("mongoose").Error;
const { ValidatorError } = require("mongoose").Error;
const MongoServerError = require("mongodb").MongoServerError;
const { log } = require("util");

const AUTH_COOKIE_NAME = process.env.AUTH_COOKIE_NAME;

router.get("/login", isGuest, (req, res) => {
  res.render("auth/login");
});
router.post("/login", isGuest, async (req, res) => {
  const { username, password } = req.body;
  try {
    let token = await authServices.login({
      username,
      password,
    });
    res.cookie(AUTH_COOKIE_NAME, token);
    res.redirect("/");
  } catch (error) {
    res.render("auth/login", { ...req.body, error: getErrorMessage(error) });
  }
});

router.get("/register", isGuest, (req, res) => {
  res.render("auth/register");
});

router.post("/register", isGuest, async (req, res) => {
  const { username, password, rePass, address } = req.body;

  if (password !== rePass) {
    res.locals.error = "Passwords do not match!";
    return res.render("auth/register");
  }

  try {
    await authServices.register({
      username,
      password,
      rePass,
      address,
    });

    let token = await authServices.login({
      username,
      password,
    });
    res.cookie(AUTH_COOKIE_NAME, token);
    res.redirect("/");
  } catch (error) {
    res.render("auth/register", { ...req.body, error: getErrorMessage(error) }); ////ADDED username and address
  }
});

function getErrorMessage(error) {
  console.log(error);

  if (
    error instanceof MongooseError ||
    error instanceof Error ||
    error instanceof ValidationError ||
    error instanceof ValidatorError ||
    error instanceof MongoServerError
  ) {
    let usernameError = error.keyValue?.username;
    let addressError = error.keyValue?.address;
    if (usernameError || addressError) {
      return "Username or address is already taken!";
    } else if (!usernameError && !addressError) {
      let errorsArr = Object.keys(error.errors);
      return error.errors[errorsArr[0]];
    }
  }

  let errorsArr = Object.keys(error.errors);
  if (errorsArr.length > 0) {
    console.log(errorsArr);
    return error.errors[errorsArr[0]];
  } else {
    return error.message;
  }
}

router.get("/logout", isAuth, (req, res) => {
  res.clearCookie(AUTH_COOKIE_NAME);

  res.redirect("/");
});

module.exports = router;
