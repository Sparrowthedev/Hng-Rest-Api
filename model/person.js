const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    age:{
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    occupation:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    hobbies: [String],
}, { timestamps: true });

const Person = mongoose.model('Person', personSchema);

module.exports = Person;