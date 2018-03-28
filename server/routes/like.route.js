const express = require('express');
const router = express.Router();
const { likePost, findLikePost } = require('../controllers/like.controller');
const { verify } = require('../middlewares/token.middleware');

module.exports = router
  .get('/:id', findLikePost)
  .post('/:id', verify, likePost);