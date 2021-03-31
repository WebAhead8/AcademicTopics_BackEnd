const model = require('../database/models/user');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('../database/Schema/users');
dotenv.config();

function signUp(req, res, next) {
	bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
		if (err) {
			res.json({
				error: err
			});
		}
		let user = new User({
			name: req.body.name,
			email: req.body.email,
			address: req.body.address,
			password: hashedPass
		});
		user
			.save()
			.then((user) => {
				res.json({
					message: 'Your now signed up!'
				});
			})
			.catch((error) => {
				res.json({
					message: 'An error occurred!'
				});
			});
	});
}

function login(req, res, next) {
	const email = req.body.email;
	const password = req.body.password;
	User.findOne({ email: email })
		.then((user) => {
			if (user) {
				bcrypt.compare(password, user.password, function(err, match) {
					if (err) {
						res.json({
							error: err
						});
					}
					if (match) {
						const token = jwt.sign({ email: user.email }, 'Secret');
						res.json({
							message: 'Welcome,Your logged in!',
							token
						});
					} else {
						res.json({
							message: 'Wrong password!'
						});
					}
				});
			} else {
				res.json({
					message: 'User not found!'
				});
			}
		})
		.catch(next);
}

module.exports = { signUp, login };
