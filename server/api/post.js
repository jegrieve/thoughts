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
  const { name, limit } = req.query;
  const topic = await Topic.findOne({ where: { name: name } }).catch((err) => {
    return res.json({ message: 'No Topic found' });
  });
  const posts = await Post.findAll({
    where: { topicId: topic.id },
    limit,
  }).catch((err) => {
    return res.json({ message: 'No Posts Found' });
  });
  return res.json(posts);
  //what i need to do next is
  //start working on display feed to page
  //also limit
  //?limit=${postLimit}&posts=${true}
  // try {
  //   const topics = await Topic.findAll();
  //   return res.json(topics);
  // } catch (err) {
  //   return res.json({ message: 'Something went wrong' });
  // }
});

//WIGB, now the create post works
//make the frontend now able to create posts.

//then after that works, make a router for
//GETting posts based on topic.

// router.post('/users', async (req, res) => {
//   const { name, email, password, bio } = req.body;

//   try {
//     const user = await User.create({ name, email, password, bio });

//     return res.json(user);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json(err);
//   }
// });

// router.get('/users', async (req, res) => {
//   try {
//     const users = await User.findAll();

//     return res.json(users);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: 'Something went wrong' });
//   }
// });

// router.get('/users/:uuid', async (req, res) => {
//   const uuid = req.params.uuid;
//   try {
//     const user = await User.findOne({
//       where: { uuid },
//     });
//     return res.json(user);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: 'Something went wrong' });
//   }
// });
module.exports = router;
