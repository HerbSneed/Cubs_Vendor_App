const router = require('express').Router();
const PostController = require('../../controllers/PostController');

router.get('/', PostController.getNewPostPage);

module.exports = router;