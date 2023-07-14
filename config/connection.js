// creating our connection to mongoose
const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('dotenv').config();
// Mongoose will connect via the string of nonsense in my dotenv
mongoose.connect(process.env.MONGODB_URI);

module.exports = mongoose.connection;