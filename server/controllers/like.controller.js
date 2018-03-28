const mongoose = require('mongoose');
const Like = require('../models/like.model');

module.exports = {
  likePost: (req, res) => {
    new Like({
      user: req.headers.id,
      post: req.params.id,
    }).save((err, like) => {
      if (err) return res.status(500).send({ err: err.message });

      return res.status(200).send({
        message: `like post success`,
        like,
      });
    })
  },

  findLikePost: (req, res) => {
    Like.find({ post: mongoose.Types.ObjectId(req.params.id) }, (err, likes) => {
      if (err) return res.status(500).send({ err: err.message });

      return res.status(200).send({
        message: `find like post success`,
        likes,
      });
    }).populate('user', 'username');
  }
}