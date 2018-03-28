const mongoose = require('mongoose');
const Post = require('../models/post.model');

module.exports = {
  create: (req, res) => {
    new Post({
      url: req.body.url,
      caption: req.body.caption,
      user: req.headers.id,
    }).save((err, post) => {
      if (err) return res.status(500).send({ err: err.message });

      return res.status(201).send({
        message: 'post success',
        post,
      });
    })
  },

  getAll: (req, res) => {
    Post.find((err, posts) => {
      if (err) return res.status(500).send({ err: err.message });

      return res.status(200).send({
        message: 'get all post success',
        posts,
      });
    }).populate('user', 'username');
  },

  getPostByUser: (req, res) => {
    Post.find({ user: mongoose.Types.ObjectId(req.params.idUser) }, (err, posts) => {
      if (err) return res.status(500).send({ err: err.message });

      return res.status(200).send({
        message: `get all post user success`,
        posts,
      });
    }).populate('user', 'username');
  },

  updateCaption: (req, res) => {
    Post.findByIdAndUpdate(req.params.id, {
      caption: req.body.caption,
    }, (err, post) => {
      if (err) return res.status(500).send({ err: err.message });

      return res.status(200).send({
        message: `update caption success`,
        post,
      });
    })
  },

  deletePost: (req, res) => {
    Post.findByIdAndRemove(req.params.id, (err, post) => {
      if (err) return res.status(500).send({ err: err.message });

      return res.status(200).send({
        message: `delete post success`,
        post,
      });
    })
  },
};