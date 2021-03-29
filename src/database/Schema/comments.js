const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema and Model

const CommentSchema = new Schema({
  title: String,
  user: String,
  admissionRequirements: Array,
});

const CommentName = mongoose.model("commentname", CommentSchema);

module.exports = CommentName;
