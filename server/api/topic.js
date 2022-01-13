const express = require('express');
const passport = require('passport');
const { Topic } = require('../models');
const router = express.Router();

router.get('/topics', async (req, res) => {
  try {
    const topics = await Topic.findAll();
    return res.json(topics);
  } catch (err) {
    return res.json({ message: 'Something went wrong' });
  }
});

router.post(
  '/create-topic',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { name } = req.body;

    try {
      const topic = await Topic.create({ name });

      return res.json(topic);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
);

module.exports = router;
