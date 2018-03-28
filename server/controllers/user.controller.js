const User = require('../models/user.model');
const Token = require('../middlewares/token.middleware');
const Hash = require('../middlewares/hash.middleware');

module.exports = {
  register: (req, res) => {
    req.body.password = Hash.generate(req.body.password);

    new User(req.body).save((err, user) => {
      if (err) return res.status(500).send({ err: err.message });

      return res.status(201).send({
        message: 'register ok',
        token: Token.generate({
          id: user._id,
          name: user.name,
          username: user.username,
        }),
      });
    });
  },

  signin: (req, res) => {
    User.findOne({ username: req.body.username }, (err, user) => {
      if (err) return res.status(500).send({ err: err.message });

      if (user.length < 1) return res.status(401).send({ err: 'username tidak ditemukan' });

      if (!Hash.compare(req.body.password, user.password)) return res.status(401).send({ err: 'password salah' });

      return res.status(200).send({
        message: 'signin ok',
        token: Token.generate({
          id: user._id,
          name: user.name,
          username: user.username,
        }),
      });
    });
  },

  verify: (req, res) => {
    return res.status(200).send({
      id: req.headers.id,
      name: req.headers.name,
      username: req.headers.username,
    });
  }
}