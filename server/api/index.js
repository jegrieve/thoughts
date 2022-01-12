const express = require('express');
const registerApi = require('./register');
const loginApi = require('./login');
const paymentApi = require('./payment');
const userApi = require('./user');
const topicApi = require('./topic');

const router = express.Router();

router.use(registerApi);
router.use(loginApi);
router.use(paymentApi);
router.use(userApi);
router.use(topicApi);

module.exports = router;
