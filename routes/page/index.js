const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const loginRoutes = require('./login-page-routes');
const signupRoutes = require('./signupRoutes');
const newPostRoutes = require('./new-post-routes');
const singlePostRoutes = require('./single-post-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/create-new-post', newPostRoutes);
router.use('/get-single-post', singlePostRoutes);

module.exports = router;
