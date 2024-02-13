const { log } = require("util");
const Creatures = require("../models/Creatures");
const User = require("../models/User");

//Gives all the creatures.
exports.getAll = () => Creatures.find().populate("owner").lean();

//Gives the creature by id.
exports.getOne = (creaturesId) =>
  Creatures.findById(creaturesId).populate("owner").lean(); //

  //Gives the user by id.
exports.getOneUser = (userId) =>
  User.findById(userId).populate("ads").lean();
  
//Creates a new creature.
exports.create = (creaturesData) => Creatures.create(creaturesData);

//Get last three creatures added.
exports.getLastThree = () =>
  Creatures.find({}).sort({ createdAt: -1 }).limit(3).lean();

//Deletes the creature.
exports.delete = (creaturesId) => Creatures.findByIdAndDelete(creaturesId);

//Gives the creature a new data.
exports.updateOne = (creaturesId, creaturesData) =>
  Creatures.findByIdAndUpdate(creaturesId, creaturesData);

//Gives the creature a comment.
exports.buy = async (creaturesId, commentData) => {
  const creatures = await Creatures.findById(creaturesId);
  creatures.donations.push(commentData);
  return creatures.save();
};
//Gives ads to the user.
exports.addAd = async (creaturesId, userId) => {
  const user = await User.findById(userId);
  user.ads.push(creaturesId);
  return user.save();
};

//Gives the owner of the creature.
exports.search = (creaturesName) => {
  if (creaturesName) {
    return User.find({
      email: { $regex: creaturesName, $options: "i" },
    })
      .populate("ads")
      .lean();
  }

  // if(creaturesPlatform){
  //   return Creatures.find({
  //     platform: { $regex: creaturesPlatform, $options: "i" },
  //   }).lean();
  // }
  // if (creaturesType) {
  //   return Creatures.find({
  //     type: { $regex: creaturesType, $options: "i" },
  //   }).lean();
  // }

  // if (!creaturesName && creaturesType) {
  //   return Creatures.find({ type: creaturesType }).lean();
  // }
};
