const router = require('express').Router();
const HomepageController = require('../../controllers/page/HomepageController');

router.get('/', HomepageController.getHomepage);

module.exports = router;

