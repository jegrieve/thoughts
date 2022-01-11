const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get(
  '/payment',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.send('You have 100$');
  }
);

module.exports = router;
