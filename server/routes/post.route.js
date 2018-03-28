const express = require('express');
const multer = require('multer');
const router = express.Router();
const { create, updateCaption, deletePost } = require('../controllers/post.controller');
const { verify } = require('../middlewares/token.middleware');
const { upload } = require('../middlewares/upload-item.multer');

const limit = multer({
  storage: multer.MemoryStorage,
  limits: {
      fileSize: 10 * 1024 * 1024
  }
})

module.exports = router
    .use(verify)
    .post('/', limit.single('image') , upload, create)
    .put('/:id', updateCaption)
    .delete('/:id', deletePost)