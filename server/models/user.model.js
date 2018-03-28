const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
    name: String,
    username: {
      type: String,
      unique: true,
    },
    password: String,
}, {
    timestamps: true
}));