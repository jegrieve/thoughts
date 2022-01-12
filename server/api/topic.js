const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get(
  '/topic',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.send('authenticated');
  }
);

module.exports = router;
