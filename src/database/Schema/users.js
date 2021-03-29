const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema and Model

const UserSchema = new Schema({
  name: String,
  address: String,
  email: String,
  password: String,
  role: String,
});

const UserName = mongoose.model("username", UserSchema);

module.exports = UserName;
