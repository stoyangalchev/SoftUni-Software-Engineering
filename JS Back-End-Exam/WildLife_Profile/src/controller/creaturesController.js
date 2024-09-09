const router = require("express").Router();
const creaturesServices = require("../services/creaturesServices");
const { isAuth } = require("../middleware/authMiddleware");

router.get("/all-posts", async (req, res) => {
  let creatures = await creaturesServices.getAll();
  res.render("creatures/all-posts", { creatures });
});

router.get("/create", isAuth, (req, res) => {
  res.render("creatures/create");
});

router.post("/create", isAuth, async (req, res) => {
  try {
    await creaturesServices.create({ ...req.body, owner: req.user._id });
    res.redirect("/creatures/all-posts");
  } catch (error) {
    console.log(error);
    res.render("creatures/create", { error: getErrorMessage(error) });
  }
});

function getErrorMessage(error) {
  let errorsArr = Object.keys(error.errors);
  if (errorsArr.length > 0) {
    return error.errors[errorsArr[0]];
  } else {
    return error.message;
  }
}

router.get("/:id/details", async (req, res) => {
  let creaturesId = req.params.id;

  let creatures = await creaturesServices
    .getOne(creaturesId)
    .populate("voted")
    .lean();

  let isOwner = req.user?._id == creatures.owner._id;
  let votedLength = creatures.voted.length;
  let isVoted =
    req.user &&
    creatures.voted
      .map((user) => user._id.toString())
      .includes(req.user._id.toString());

  let allVotedUsers = creatures.voted
    .slice(0, 5)
    .map((x) => x.firstname)
    .join(", ");

  res.render("creatures/details", {
    creatures,
    isOwner,
    isVoted,
    votedLength,
    allVotedUsers,
  });
});

router.get("/:id/delete", isAuth, async (req, res) => {
  try {
    await creaturesServices.delete(req.params.id);
    res.redirect("/creatures/all-posts");
  } catch (error) {
    res.render("creatures/create", { error: getErrorMessage(error) });
  }
});

router.get("/:id/edit", isAuth, async (req, res) => {
  let creature = await creaturesServices.getOne(req.params.id);
  res.render("creatures/edit", { creature });
});

router.post("/:id/edit", isAuth, async (req, res) => {
  //first way to do it
  try {
    const reqBody = req.body;
    await creaturesServices.updateOne(req.params.id, reqBody);
    res.redirect(`/creatures/${req.params.id}/details`);
  } catch (error) {
    res.render("creatures/edit", {
      error: getErrorMessage(error),
      creature: reqBody,
    });
  }
});

router.post("/:id/comments", isAuth, async (req, res) => {
  const creaturesId = req.params.id;
  const message = req.body.message;
  const user = req.user._id;
  await creaturesServices.addComment(creaturesId, { user, message });
  res.redirect(`/creatures/${creaturesId}/details`);
});

router.get("/:id/vote", isAuth, async (req, res) => {
  try {
    await creaturesServices.vote(req.params.id, req.user._id);
    res.redirect(`/creatures/${req.params.id}/details`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get("/:id/votedown", isAuth, async (req, res) => {
  try {
    await creaturesServices.votedown(req.params.id, req.user._id);
    res.redirect(`/creatures/${req.params.id}/details`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
