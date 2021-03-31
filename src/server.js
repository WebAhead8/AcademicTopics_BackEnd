const express = require('express');
const connectDB = require('./database/connection');
const signUser = require('./handlers/users');
const blogManegment = require('./handlers/blog');
const route = express.Router();
const server = express();

server.use(express.json());

// signup & login
server.post('/signup', signUser.signUp);
server.post('/signin', signUser.signIn);

// Posts
server.post('/addPost', blogManegment.addPost);
server.get('/post/:id', blogManegment.getPostById);
server.get('/posts', blogManegment.getAllPosts);
server.put('/post', blogManegment.editPost);
server.delete('/post/:id', blogManegment.deletePost);

// Comments
server.post('/addComment', blogManegment.addComment);
server.get('/comment/:id', blogManegment.getCommentById);
server.get('/comments', blogManegment.getAllComments);

// Server
server.listen(4000, () => {
	connectDB();
	console.log('Server listening on http:localhost:4000');
});

module.exports = route;
