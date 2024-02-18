const router = require("express").Router();
const { log } = require("util");
const { isAuth } = require("../middleware/authMiddleware");
const creaturesServices = require("../services/creaturesServices");

router.get("/", async (req, res) => {
  let creatures = await creaturesServices.getAll();
  let voteLength;
  for (let i = 0; i < creatures.length; i++) {
    let voteLength = creatures[i].votes.length;
    creatures[i].voteLength = voteLength;
  }

  res.render("home", { creatures, voteLength });
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
router.get("/profile", isAuth, async (req, res) => {
  let userId = req.user._id;

  let creatures = await creaturesServices.getMyCreatedPost(userId);
  let owner = await creaturesServices
    .findOwner(userId)
    .populate("sharedpost")
    .lean();

  let sharedPost = await creaturesServices
    .findOwner(userId)
    .populate("sharedpost")
    .lean();
let shared = sharedPost.sharedpost;
  console.log(creatures);
  console.log(">>>>>>>>");

  res.render("profile", { creatures, owner, shared });
});
module.exports = router;
