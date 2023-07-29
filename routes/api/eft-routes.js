const router = require('express').Router();
const EftController = require('../../controllers/api/EftController');

router.post('/', EftController.newEft);

module.exports = router;

