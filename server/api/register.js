const express = require('express');
const { User } = require('../models');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      res.json({ message: 'Could not create user' });
    } else {
      const newUser = new User({ username, email, password: hashedPassword });
      const savedUser = newUser
        .save()
        .then(() => {
          res.json({ message: 'User registered' });
        })
        .catch((err) => {
          res.json({ error: 'Cannot register user at the moment!' });
        });
    }
  });
});

module.exports = router;
