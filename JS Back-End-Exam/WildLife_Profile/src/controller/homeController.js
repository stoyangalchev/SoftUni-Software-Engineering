const router = require("express").Router();
const { isAuth } = require("../middleware/authMiddleware");
const authServices = require("../services/authServices");
const creaturesServices = require("../services/creaturesServices");

router.get("/", async (req, res) => {
  try {
    const userId = req.user._id; // Adjust this based on how you store the user ID

    const user = await authServices.findUserByID(userId);

    res.render("home", { user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.get("/profile", isAuth, async (req, res) => {
  let userId = req.user._id;

  let creatures = await creaturesServices.getMyCreatedPost(userId);
  let owner = await creaturesServices.findOwner(userId);


  res.render("profile", {
    creatures,
    owner,
    creaturesCount: creatures.length,
  });
});

module.exports = router;
