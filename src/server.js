const express = require("express");
const connectDB = require("./database/connection");
const signUser = require("./handlers/users");
const blogManegment = require("./handlers/blog");
const route = express.Router();
const server = express();

// server.use(express.json({ extended: false }));

server.use(express.json());
connectDB();

server.post("/signUp", signUser.signUp);
server.post("/login", signUser.login);

server.post("/addPost", blogManegment.addPost);
server.post("/addComment", blogManegment.addComment);

// server.get("/posts", blogManegment.getAllPosts);
server.get("/posts/:id", blogManegment.getPostById);

server.listen(4000, () =>
  console.log("Server listening on http:localhost:4000")
);

module.exports = route;
