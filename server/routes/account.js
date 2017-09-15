var router = require('express').Router();
var controllers = require('../controllers');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const { User } = require('../models');

router.get('/currentuser', controllers.users.get);

router.get('/logout', controllers.users.logout);

router.post('/login', controllers.users.login);

module.exports = router;
