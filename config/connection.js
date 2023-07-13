const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI);

module.exports = mongoose.connection;