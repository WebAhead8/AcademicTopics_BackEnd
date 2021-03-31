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

// function getAllPost() {
//   return Post.find({});
// }

module.exports = { addPost, deletePost, getPostById };
