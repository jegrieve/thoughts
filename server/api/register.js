const express = require('express');
const { User } = require('../models');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
          const jwtToken = jwt.sign(
            { id: newUser.id, username: newUser.username },
            process.env.JWT_SECRET
          );
          res.json({ token: jwtToken, newUser });
        })
        .catch((err) => {
          res.json({ error: 'Cannot register user at the moment!' });
        });
    }
  });
});

module.exports = router;
