const router = require('express').Router();
const VendorController = require('../../controllers/api/VendorController');

router.post('/', VendorController.newVendor);

module.exports = router;

