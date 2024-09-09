const Creatures = require("../models/Creatures");
const User = require("../models/User");

//Gives all the creatures.
exports.getAll = () => Creatures.find().populate("owner").lean();

//Gives the creature by id.
exports.getOne = (creaturesId) =>
  Creatures.findById(creaturesId).populate("owner").lean(); //

//Creates a new creature.
exports.create = (creaturesData) => Creatures.create(creaturesData);

//Deletes the creature.
exports.delete = (creaturesId) => Creatures.findByIdAndDelete(creaturesId);

//Gives the creature a new data.
exports.updateOne = (creaturesId, creaturesData) =>
  Creatures.findByIdAndUpdate(creaturesId, creaturesData);

//Gives the creature a comment.
exports.addComment = async (creaturesId, commentData) => {
  const creatures = await Creatures.findById(creaturesId);
  creatures.voted.push(commentData);
  return creatures.save();
};
exports.vote = async (creaturesId, userId) => {
  try {
    const creature = await Creatures.findById(creaturesId);

    if (!creature) {
      throw new Error("Creature not found");
    }

    // Check if the user has already voted
    if (!creature.voted.some((vote) => vote.equals(userId))) {
      creature.voted.push(userId);
      await creature.save();
    } else {
      console.log(
        `User ${userId} has already voted for creature ${creaturesId}`
      );
    }
  } catch (error) {
    console.error(`Error in vote function: ${error.message}`);
    throw error;
  }
};
exports.votedown = async (creaturesId, userId) => {
  try {
    const creature = await Creatures.findById(creaturesId);

    if (!creature) {
      throw new Error("Creature not found");
    }

    // Check if the user has already voted
    const voteIndex = creature.voted.findIndex((vote) => vote.equals(userId));
    console.log(voteIndex);
    if (voteIndex !== -1) {
      creature.voted.splice(voteIndex, 1);
      await creature.save();
    } else {
      console.log(`User ${userId} has not voted for creature ${creaturesId}`);
    }
  } catch (error) {
    console.error(`Error in votedown function: ${error.message}`);
    throw error;
  }
};
// exports.getPopulatedUsersInCreatureId = async (creaturesId) => {
//   const creature = await Creatures.findById(creaturesId).populate("voted");
//   return creature;
// };
//Gives the owner of the creature.
exports.findOwner = (userId) => User.findById(userId).lean();

//Gives all the creatures that the user has created.
exports.getMyCreatedPost = (userId) =>
  Creatures.find({ owner: userId }).populate("owner").lean();
