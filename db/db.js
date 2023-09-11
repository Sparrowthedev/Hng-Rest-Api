// require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set('strictQuery', false);
const db = mongoose.connect(process.env.MONGO_URI);

module.exports = db;