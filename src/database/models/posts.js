const mongoose = require('mongoose');
const { post } = require('../../server');
const { db } = require('../schema/posts');
const Post = require('../schema/posts');

function addPost(postTitle) {
	postTitle.user = mongoose.Types.ObjectId(postTitle.user);
	let newPost = new Post(postTitle);
	return newPost.save();
}

function deletePost(postId) {
	const objectId = mongoose.Types.ObjectId(postId);
	return Post.deleteOne({ _id: objectId });
}

function getPostById(postId) {
	return Post.findById(postId);
}

function getAllPosts() {
	return Post.find({});
}

function editPostTitle(postDetails) {
	const objectId = mongoose.Types.ObjectId(postDetails.id);
	return Post.updateOne({ _id: objectId }, { $set: { title: postDetails.title } });
}

function editPostContent(postContent) {
	const objectId = mongoose.Types.ObjectId(postContent.id);
	return Post.updateOne({ _id: objectId }, { $set: { content: postContent.content } });
}
module.exports = {
	addPost,
	deletePost,
	getPostById,
	getAllPosts,
	editPostContent,
	editPostTitle
};
