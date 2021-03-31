const mongoose = require('mongoose');
const { db } = require('../schema/comments');
const Comment = require('../schema/comments');

function addComment(commentContent) {
	commentContent.user = mongoose.Types.ObjectId(commentContent.user);
	let newComment = new Comment(commentContent);
	return newComment.save();
}

function getCommentById(commentId) {
	return Comment.findById(commentId).exec();
}

function getAllComments() {
	return Comment.find({});
}

function editComment(comment) {
	const objectId = mongoose.Types.ObjectId(comment.id);
	return Comment.updateOne({ _id: objectId }, { $set: { content: comment.content } });
}

function deleteComment(commentId) {
	const objectId = mongoose.Types.ObjectId(commentId);
	return Comment.deleteOne({ _id: objectId });
}

module.exports = { addComment, getCommentById, getAllComments, deleteComment, editComment };
