const express = require("express");

const server = express();

server.listen(4000, () =>
  console.log("Server listening on http:localhost:4000")
);
