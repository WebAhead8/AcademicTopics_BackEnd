const mongoose = require('mongoose');
const { db } = require('../schema/comments');
const Comment = require('../schema/comments');

function addComment(commentContent) {
	commentContent.user = mongoose.Types.ObjectId(commentContent.user);
	let newComment = new Comment(commentContent);
	return newComment.save();
}

function commentById(commentId) {
	return Comment.findById(commentId).exec();
}

module.exports = { commentById, addComment };
