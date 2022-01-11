const express = require('express');
const passport = require('passport');

const router = express.Router();

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
