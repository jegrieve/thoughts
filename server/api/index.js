const express = require('express');
const registerApi = require('./register');
const loginApi = require('./login');
const postApi = require('./post');
const topicApi = require('./topic');

const router = express.Router();

router.use(registerApi);
router.use(loginApi);
router.use(postApi);
router.use(topicApi);

module.exports = router;
