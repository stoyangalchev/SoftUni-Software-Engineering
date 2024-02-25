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
    res.render("auth/login", { email, error: getErrorMessage(error) });
  }
});

router.get("/register", isGuest, (req, res) => {
  res.render("auth/register");
});

router.post("/register", isGuest, async (req, res) => {
  const { firstname, lastname, email, password, rePass } = req.body;

  if (password !== rePass) {
    res.locals.error = "Passwords do not match!";
    return res.render("auth/register");
  }

  try {
    await authServices.register({
      firstname,
      lastname,
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
    res.render("auth/register", {
      firstname,
      lastname,
      email,
      error: getErrorMessage(error),
    });
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
    let usernameError = error.keyValue?.email;
    let addressError = error.keyValue?.address;
    if (usernameError || addressError) {
      return "Username or address is already taken!";
    } else if (!usernameError && !addressError) {
      return error.message;
    }
  }

  let errorsArr = Object.keys(error?.errors);
  if (errorsArr) {
    if (errorsArr.length > 0) {
      console.log(errorsArr);
      return error.errors[errorsArr[0]];
    }
  } else {
    return error.message;
  }
}

router.get("/logout", isAuth, (req, res) => {
  res.clearCookie(AUTH_COOKIE_NAME);
  res.redirect("/");
});

module.exports = router;
