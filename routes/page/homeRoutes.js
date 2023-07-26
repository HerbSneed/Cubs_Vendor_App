const router = require('express').Router();
const HomepageController = require('../../controllers/HomepageController');

router.get('/', HomepageController.getHomePage);

module.exports = router;