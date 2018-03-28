const express = require('express');
const router = express.Router();
const { register, signin, verify } = require('../controllers/user.controller');
const { getAll, getPostByUser } = require('../controllers/post.controller');
const token = require('../middlewares/token.middleware');

module.exports = router
    .get('/', (req, res) => res.status(200).send({
        message: 'Welcome to jepretgram-API'
    }))
    .post('/signin', signin)
    .post('/register', register)
    .get('/me', token.verify, verify)
    .get('/post', getAll)
    .get('/post/:idUser', getPostByUser)
    .use('/post', require('./post.route'))
    .use('/like', require('./like.route'));