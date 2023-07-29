const router = require('express').Router();
const VendorController = require('../../controllers/api/VendorController');
const EftController = require('../../controllers/api/EftController');
const vendorRoutes = require('./vendor-routes')
const eftRoutes = require('./eft-routes');

router.use('/vendor', vendorRoutes);
router.use('/eft', eftRoutes);



module.exports = router;