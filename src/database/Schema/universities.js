const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema and Model

const UniNameSchema = new Schema({
  name: String,
  location: String,
});

const UniName = mongoose.model("uniname", UniNameSchema);

module.exports = UniName;
