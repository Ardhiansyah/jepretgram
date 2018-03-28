const express = require('express');
const router = express.Router();
const { register, signin } = require('../controllers/user.controller');
// const token = require('../middlewares/token.middleware');

module.exports = router
    .get('/', (req, res) => res.status(200).send({
        message: 'Welcome to jepretgram-API'
    }))
    .post('/signin', signin)
    .post('/register', register)
    // .post('/verify', token.verify, verify)
    // .use('/articles', require('./article.route'))