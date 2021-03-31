const commentsModel = require('../database/models/comments');
const postsModel = require('../database/models/posts');

//Comments

function addComment(req, res, next) {
	const newComment = req.body;
	//   newComment.user = req.users;
	if (!newComment.post || !newComment.content) {
		res.status(422).send({ error: "Fields can't be empty" });
	} else {
		commentsModel
			.addComment(newComment)
			.then((commentContent) => {
				res.status(201).send({ message: 'Comment added', commentContent });
			})
			.catch(next);
	}
}

function getCommentById(req, res, next) {
	const id = req.params.id;
	commentsModel
		.getCommentById(id)
		.then((data) => {
			console.log(data);
			if (data) {
				res.status(200).send(data);
			} else {
				res.status(404).send({ status: 'invalid Id' });
			}
		})
		.catch(next);
}

function getAllComments(req, res, next) {
	postsModel
		.getAllComments()
		.then((data) => {
			console.log(data);
			if (data) {
				res.status(200).send(data);
			} else {
				res.status(404).send({ status: 'No Comments!' });
			}
		})
		.catch(next);
}

function deleteComment(req, res, next) {}

function editComment(req, res, next) {}

//Posts
function addPost(req, res, next) {
	const newPost = req.body;
	//   newPost.user = req.user;
	console.log(req);
	if (!newPost.title || !newPost.content) {
		res.status(422).send({ error: "Fields can't be empty" });
	} else {
		postsModel
			.addPost(newPost)
			.then((postTitle) => {
				res.status(201).send({ message: 'Post added', postTitle });
			})
			.catch(next);
	}
}

function getPostById(req, res, next) {
	const id = req.params.id;
	postsModel
		.getPostById(id)
		.then((data) => {
			console.log(data);
			if (data) {
				// if post_user_id === logged in user id
				// if yes move to delete
				// if not send an error
				res.status(200).send(data);
			} else {
				res.status(404).send({ status: 'invalid Id' });
			}
		})
		.catch(next);
}

function getAllPosts(req, res, next) {
	postsModel
		.getAllPosts()
		.then((data) => {
			console.log(data);
			if (data) {
				// if post_user_id === logged in user id
				// if yes move to delete
				// if not send an error
				res.status(200).send(data);
			} else {
				res.status(404).send({ status: 'No Posts!' });
			}
		})
		.catch(next);
}

function deletePost(req, res, next) {
	const id = req.params.id;
	postsModel
		.getPostById(id)
		.then((post) => {
			if (post) {
				postsModel
					.deletePost(id)
					.then((data) => {
						res.status(200).send({ status: 'Post deleted successfully' });
					})
					.catch(next);
			} else {
				res.status(400).send({ status: 'Post not found' });
			}
		})
		.catch(next);
}

function editPost(req, res, next) {
	const body = req.body;
	console.log(body);
	if (!body._id) {
		res.status(422).send({ error: 'Post not found' });
	} else {
		postsModel.getPostById(body._id).then((post) => {
			if (post) {
				if (!body.title || !body.content) {
					res.status(422).send({ status: 'Field Cannot be empty!' });
				} else {
					postsModel.editPostTitle({ id: body._id, title: body.title }).catch(next);
					postsModel
						.editPostContent({
							id: body._id,
							content: body.content
						})
						.then((data) => {
							res.status(200).send({ status: 'post updated successfully' });
						})
						.catch(next);
				}
			} else {
				res.status(400).send({ status: 'invalid Post Id' });
			}
		});
	}
}

module.exports = {
	addComment,
	getCommentById,
	getAllComments,
	deleteComment,
	editComment,
	addPost,
	getPostById,
	getAllPosts,
	deletePost,
	editPost
};
