const express = require('express');
const connectDB = require('./database/connection');
const signUser = require('./handlers/users');
const blogManegment = require('./handlers/blog');
const route = express.Router();
const server = express();

server.use(express.json());

// signUp & signIn
server.post('/signup', signUser.signUp);
server.post('/login', signUser.login);

// Posts
server.post('/addPost', blogManegment.addPost);
server.get('/posts/:id', blogManegment.getPostById);
server.get('/posts', blogManegment.getAllPosts);
server.put('/posts', blogManegment.editPost);
server.delete('/posts/:id', blogManegment.deletePost);

// Comments
server.post('/addComment', blogManegment.addComment);
server.get('/comments/:id', blogManegment.getCommentById);
server.get('/comments', blogManegment.getAllComments);
server.put('/comments', blogManegment.editComment);
server.delete('/comments/:id', blogManegment.deleteComment);

// Server
server.listen(4000, () => {
	connectDB();
	console.log('Server listening on http:localhost:4000');
});

module.exports = route;
