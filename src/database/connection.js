const mongoose = require('mongoose');
require('dotenv').config();

// Connect Mongodb
// const URI = "mongodb+srv://jimongodb:123698745@mycluster.pveqm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectionString = process.env.DATABASE_URL;

const connectDB = async () => {
	await mongoose.connect(connectionString, {
		useUnifiedTopology: true,
		useNewUrlParser: true
	});
	console.log('DB Connected!');
};
module.exports = connectDB;
