const router = require('express').Router();
const PostController = require('../../controllers/PostController');

router.post('/', PostController.createPost);

router.put('/:post_id', PostController.updateSinglePost);

router.delete('/:post_id', PostController.deleteSinglePost);

module.exports = router;

