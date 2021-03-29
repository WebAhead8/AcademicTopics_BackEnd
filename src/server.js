const express = require("express");
const connectDB = require("./database/connection");
const signUser = require("./handlers/users");
const route = express.Router();
const server = express();

// server.use(express.json({ extended: false }));

server.use(express.json());
connectDB();

server.post("/signUp", signUser.signUp);
server.post("/login", signUser.login);

server.listen(4000, () =>
  console.log("Server listening on http:localhost:4000")
);

module.exports = route;
