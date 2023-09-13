const router = require('express').Router();
const pageroutes = require('./page');
const apiRoutes = require('./api');

router.use('/', pageroutes);
router.use('/api', apiRoutes);

router.use((err, req, res, next) => {
 console.error(err.stack);
 res.status(500).send('Something went wrong!');
});

module.exports = router;