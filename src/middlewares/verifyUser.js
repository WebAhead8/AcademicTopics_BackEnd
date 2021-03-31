require("dotenv").config();
const jwt = require("jsonwebtoken");
const model = require("../database/model/user");
function verfyuser(req, res, next) {
  const auth = req.headers.authentication;
  if (!auth) {
    const error = new Error("bad request");
    error.status = 400;
    next(error);
  }
  try {
    const token = auth.replace("Bearer ", "");
    const userID = jwt.verify(token, process.env.JWT_SECRET);
    model
      .getUserById(userID.user)
      .then((data) => {
        if (data.length > 0) {
          req.user = data[0]._id;
          next();
        } else {
          const error = new Error("not An user");
          error.status = 401;
          next(error);
        }
      })
      .catch(next);
  } catch (er) {
    const error = new Error("Invalid token");
    error.status = 401;
    next(error);
  }
}

module.exports = verfyuser;
