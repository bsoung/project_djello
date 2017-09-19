const router = require('express').Router();
const controllers = require('../controllers');

router.get('/currentuser', controllers.users.get);

router.get('/logout', controllers.users.logout);

router.post('/login', controllers.users.login);

module.exports = router;
