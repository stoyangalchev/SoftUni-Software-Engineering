const router = require("express").Router();
const creaturesServices = require("../services/creaturesServices");

const { isAuth } = require("../middleware/authMiddleware");
const { log } = require("util");
const { hash } = require("bcrypt");

router.get("/all-posts", async (req, res) => {
  let creatures = await creaturesServices.getAll();

  res.render("creatures/all-posts", { creatures });
});

router.get("/create", isAuth, (req, res) => {
  res.render("creatures/create");
});

router.post("/create", isAuth, async (req, res) => {
  try {
    console.log(req.body);
    await creaturesServices.create({ ...req.body, owner: req.user._id });
    res.redirect("/"); //change to all-posts //  /creatures/all-posts
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
    .populate("owner")
    .lean();
  let isOwner = req.user?._id == creatures.owner._id;

  let isSigned =
    req.user && creatures.signUpList.some((c) => c.user._id == req.user?._id);

  let signedArrayOfUsersNames = [];

  creatures.signUpList
    .map((x) => x.user._id)
    .forEach(async (x) => {
      let user = await creaturesServices.findOwner(x);
      signedArrayOfUsersNames.push(user.username);
    });

  // for (let i = 0; i < signedArrayOfUsers.length; i++) {
  //   let user = await creaturesServices.findOwner(signedArrayOfUsers[i]);
  //   signedArrayOfUsersNames.push(user.username);
  // }
  console.log(signedArrayOfUsersNames);

  res.render("creatures/details", {
    creatures,
    isOwner,
    isSigned,
    signedArrayOfUsersNames,
  });
});

router.get("/:id/signup", async (req, res) => {
  try {
    const creaturesId = req.params.id;

    const user = req.user._id;

    await creaturesServices.signup(creaturesId, { user });

    res.redirect(`/creatures/${creaturesId}/details`);
  } catch (error) {
    console.log(getErrorMessage(error));
    res.redirect(`/creatures/${creaturesId}/details`, {
      error: getErrorMessage(error),
    });
  }
});

// async function isOwner(req, res, next) {
//   let creatures = await creaturesServices.getOne(req.params.id);

//   if (creatures.owner == req.user._id) {
//     res.redirect(`/creatures/${req.params.id}/details`);
//   } else {
//     next();
//   }
// }

// async function checkIsOwner(req, res, next) {
//   let creatures = await creaturesServices.getOne(req.params.id);

//   if (creatures.owner == req.user._id) {
//     next();
//   } else {
//     res.redirect(`/creatures/${req.params.id}/details`);
//   }
// }

router.get("/:id/delete", isAuth, async (req, res) => {
  try {
    await creaturesServices.delete(req.params.id);
    res.redirect("/creatures/all-posts");
  } catch (error) {
    res.render("creatures/create", { error: getErrorMessage(error) });
  }
});

router.get("/:id/edit", isAuth, async (req, res) => {
  let creatures = await creaturesServices.getOne(req.params.id);

  res.render("creatures/edit", { creatures });
});

router.post("/:id/edit", isAuth, async (req, res) => {
  try {
    const reqBody = req.body;
    console.log(reqBody);
    const creatures = await creaturesServices.getOne(req.params.id).lean(); ///lean() is IMPORTANT.

    await creaturesServices.updateOne(creatures, reqBody).lean();

    res.redirect(`/creatures/${req.params.id}/details`);
  } catch (error) {
    console.log(getErrorMessage(error));
    res.render("creatures/create", { error: getErrorMessage(error) });
  }
});

// router.post("/:id/comments", isAuth, async (req, res) => {
//   const creaturesId = req.params.id;
//   const message = req.body.message;
//   const user = req.user._id;

//   await creaturesServices.addComment(creaturesId, { user, message });

//   res.redirect(`/creatures/${creaturesId}/details`);
// });

// router.get("/:id/voted",  async (req, res) => {
//   let creatures = await creaturesServices.getOne(req.params.id);

//   creatures.voted.push(req.user);
//   await creatures.save();

//   res.redirect(`/creatures/${req.params.id}/details`);
// });

module.exports = router;
