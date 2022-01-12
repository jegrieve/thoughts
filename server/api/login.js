const express = require('express');
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username } }).catch((err) => {
    console.log('Error: ', err);
  });

  if (!user)
    return res
      .status(400)
      .json({ message: 'Email or password does not match!' });

  bcrypt.compare(password, user.password, (err, match) => {
    if (!match) {
      res.json({ message: 'Incorrect password' });
    } else {
      const jwtToken = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET
      );

      // const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET); //to decode

      res.json({ message: 'Welcome Back!', token: jwtToken, user });
    }
  });
});

module.exports = router;
