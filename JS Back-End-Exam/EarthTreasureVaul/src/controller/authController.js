const router = require("express").Router();
const authServices = require("../services/authServices");
const { isGuest, isAuth } = require("../middleware/authMiddleware");
const { AUTH_COOKIE_NAME } = require("../constants");
const { MongooseError } = require("mongoose");
const { ValidationError } = require("mongoose").Error;
const { ValidatorError } = require("mongoose").Error;
const MongoServerError = require("mongodb").MongoServerError;

router.get("/login", isGuest, (req, res) => {
  res.render("auth/login");
});

router.post("/login", isGuest, async (req, res) => {
  const { email, password } = req.body;
  try {
    let token = await authServices.login({
      email,
      password,
    });
    res.cookie(AUTH_COOKIE_NAME, token);
    res.redirect("/");
  } catch (error) {
    res.render("auth/login", { error: error.message });
  }
});

router.get("/register", isGuest, (req, res) => {
  res.render("auth/register");
});

router.post("/register", isGuest, async (req, res) => {
  const { email, password, rePass } = req.body;

  if (password !== rePass) {
    res.locals.error = "Passwords do not match!";
    return res.render("auth/register");
  }

  try {
    await authServices.register({
      email,
      password,
    });

    let token = await authServices.login({
      email,
      password,
    });
    res.cookie(AUTH_COOKIE_NAME, token);
    res.redirect("/");
  } catch (error) {
    res.render("auth/register", { error: getErrorMessage(error) });
  }
});

function getErrorMessage(error) {
  console.log(error);

  if (
    error instanceof MongoServerError ||
    error instanceof MongooseError ||
    error instanceof Error ||
    error instanceof ValidationError ||
    error instanceof ValidatorError
  ) {
    let usernameError = error.keyValue?.email;

    if (usernameError) {
      return "Username is already taken!";
    } else if (!usernameError) {
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
