const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema and Model

const CommentSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "posts",
  },
  content: { type: String },
});

const CommentName = mongoose.model("commentname", CommentSchema);

module.exports = CommentName;
