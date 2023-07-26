const router = require('express').Router();
const pageroutes = require('./page');
const apiRoutes = require('./api');

router.use('/', pageroutes);
router.use('/api', apiRoutes);

module.exports = router;