const { db } = require("../Schema/users");
const mongoose = require("mongoose");
const User = require("../Schema/users");

function getUserById(id) {
  const objectId = mongoose.Types.ObjectId(id);
  return User.find({ _id: objectId });
}

module.exports = { getUserById };
