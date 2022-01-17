const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { Post, User, Topic } = require('../models');

const router = express.Router();

router.post(
  '/create-post',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { name, body } = req.body;
    if (!name || !body) return res.json({ message: 'Invalid Inputs' });

    const jwtToken = req.headers.authorization.split(' ')[1];

    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);

    const user = await User.findOne({ where: { id: decoded.id } }).catch(
      (err) => {
        return res.json({ message: 'No user found' });
      }
    );
    const topic = await Topic.findOne({ where: { name: name } }).catch(
      (err) => {
        return res.json({ message: 'No Topic found' });
      }
    );
    const post = await Post.create({
      body,
      userId: user.id,
      topicId: topic.id,
    }).catch((err) => {
      return res.json({ message: 'Something went wrong' });
    });
    return res.json(post);
  }
);

router.get('/homepage-posts', async (req, res) => {
  const { name, limit, order } = req.query;
  const topic = await Topic.findOne({
    where: { name: name },
  }).catch((err) => {
    return res.json({ message: 'No Topic found' });
  });
  const posts = await Post.findAll({
    where: { topicId: topic.id },
    limit,
    order: [['createdAt', order]],
    include: [User, Topic],
  }).catch((err) => {
    return res.json({ message: 'No Posts Found' });
  });
  return res.json(posts);
});

router.get('/user-posts', async (req, res) => {
  const { limit, userId, order } = req.query;

  const user = await User.findOne({ where: { uuid: userId } }).catch((err) => {
    return res.json({ message: 'No user found' });
  });

  const posts = await Post.findAll({
    where: { userId: user.id },
    limit,
    order: [['createdAt', order]],
    include: [User, Topic],
  }).catch((err) => {
    return res.json({ message: 'No user found' });
  });
  return res.json(posts);
});

router.delete(
  '/delete-post/:uuid',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    console.log(req.query);
    const uuid = req.params.uuid;
    const post = await Post.findOne({ where: { uuid } }).catch((err) => {
      return res.json(err);
    });
    const destroyedPost = post.destroy().catch((err) => {
      return res.json(err);
    });
    return res.json({ message: 'Post deleted!' });
  }
);
module.exports = router;
