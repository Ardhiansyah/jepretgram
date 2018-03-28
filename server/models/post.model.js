const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Post', new Schema({
    url: String,
    caption: String,
    user: { type: Schema.ObjectId, ref: 'User' },
    like: [{ type: Schema.ObjectId, ref: 'User' }],
}, {
    timestamps: true
}));