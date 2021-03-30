const commentsModel = require("../database/models/comments");
const postsModel = require("../database/models/posts");

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
        res.status(201).send({ message: "Comment added", commentContent });
      })
      .catch(next);
  }
}

function getCommentById(req, res, next) {}

function getAllComments(req, res, next) {}

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
        res.status(201).send({ message: "Post added", postTitle });
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
        res.status(404).send({ status: "invalid Id" });
      }
    })
    .catch(next);
}

// function getAllPosts(req, res, next) {
//   postsModel
//     .getAllPosts({})
//     .then((data) => {
//       console.log(data);
//       if (data) {
//         // if post_user_id === logged in user id
//         // if yes move to delete
//         // if not send an error
//         res.status(200).send(data);
//       } else {
//         res.status(404).send({ status: "No Posts!" });
//       }
//     })
//     .catch(next);
// }

function deletePost(req, res, next) {}

function editPost(req, res, next) {}

module.exports = {
  addComment,
  getCommentById,
  getAllComments,
  deleteComment,
  editComment,
  addPost,
  getPostById,

  deletePost,
  editPost,
};
