const { log } = require("util");
const Creatures = require("../models/Creatures");
const User = require("../models/User");

//Gives all the creatures.
exports.getAll = () => Creatures.find().populate("owner").lean();

//Gives the creature by id.
exports.getOne = (creaturesId) =>
  Creatures.findById(creaturesId).populate("owner").lean(); //

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

//Gives the owner of the creature.

exports.search = (creaturesName, creaturesPlatform) => {
  if (creaturesName && creaturesPlatform) {
    return Creatures.find({
      name: { $regex: creaturesName, $options: "i" },
      payment: creaturesPlatform,
    }).lean();
  }

  if (creaturesName) {
    return Creatures.find({
      name: { $regex: creaturesName, $options: "i" },
    }).lean();
  }

  if (!creaturesName && creaturesPlatform) {
    return Creatures.find({ payment: creaturesPlatform }).lean();
  }
};
