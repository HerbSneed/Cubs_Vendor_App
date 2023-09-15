const router = require('express').Router();
const vendorRoutes = require('./vendor-routes')

router.use('/vendor', vendorRoutes);

module.exports = router;