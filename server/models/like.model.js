const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Like', new Schema({
    user: { type: Schema.ObjectId, ref: 'User' },
    post: { type: Schema.ObjectId, ref: 'Post' },
}, {
    timestamps: true
}));