const router = require('express').Router();
const homeRoutes = require('./home-routes');
const eftRoutes = require('./eft-route');

router.use('/', homeRoutes);
router.use('/eft', eftRoutes);

module.exports = router;