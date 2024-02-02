const router = require("express").Router();
const { log } = require("util");
const { isAuth } = require("../middleware/authMiddleware");
const creaturesServices = require("../services/creaturesServices");

router.get("/", async (req, res) => {
  let creatures = await creaturesServices.getAll();

  res.render("home", { creatures });
});

// router.get("/profile", isAuth, async (req, res) => {
//   let userId = req.user._id;

//   let creatures = await creaturesServices.getMyCreatedPost(userId);
//   let owner = await creaturesServices.findOwner(userId);
//   console.log(creatures);

//   res.render("my-posts", {
//     creatures,
//     owner,
//     creaturesCount: creatures.length,
//   });
// });

module.exports = router;
