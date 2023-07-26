const router = require('express').Router();
const UserController = require('../../controllers/UserController');

router.get('/', UserController.getSignupPage);

module.exports = router;