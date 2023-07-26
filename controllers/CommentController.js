
const session = require('express-session');

module.exports = {
  createComment: async (req, res) => {
    const {
      body: {
        description,
        post_id,
      },
      session: {
        user_id,
        username,
      }
    } = req;

    try {
      const commentData = await Comment.create({
        description,
        user_id,
        post_id,
        username,
      })
      console.log(commentData);
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
}

