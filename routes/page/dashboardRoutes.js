const router = require('express').Router();
const DashboardController = require('../../controllers/DashboardController');

router.get('/', DashboardController.getDashboardPage);
router.get('/:user_id', DashboardController.getUserDashboard);

module.exports = router;