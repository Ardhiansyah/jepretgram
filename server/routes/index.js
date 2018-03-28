const express = require('express');
const router = express.Router();
const { register, signin } = require('../controllers/user.controller');
const { getAll, getPostByUser } = require('../controllers/post.controller');
// const token = require('../middlewares/token.middleware');

module.exports = router
    .get('/', (req, res) => res.status(200).send({
        message: 'Welcome to jepretgram-API'
    }))
    .post('/signin', signin)
    .post('/register', register)
    .get('/post', getAll)
    .get('/post/:idUser', getPostByUser)
    .use('/post', require('./post.route'));
    // .post('/verify', token.verify, verify)