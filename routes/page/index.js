const router = require('express').Router();
const homeRoutes = require('./home-routes');
const formSubmittedRoutes = require('./formSubmitted-route');


router.use('/', homeRoutes);
router.use('/submitted', formSubmittedRoutes);


module.exports = router;