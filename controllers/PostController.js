const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');

module.exports = {
  getNewPostPage: async (req, res) => {
    res.render('create-new-post', {
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id
    });
  },

//CREATE POST
  createPost: async (req, res) => {
    const {
      body: {
        title,
        description,
      },
      session: {
        user_id
      }
    } = req;
    try {
      const postData = await Post.create({
        title,
        description,
        user_id
      });
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
//GET SINGLE POST
  getSinglePost: async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.post_id, {
        include: [User, Comment]
      });
      const posts = postData.get({ plain: true });
      res.render('single-post-form', {
        posts,
        loggedIn: req.session.loggedIn,
        user_id: req.session.user_id,
      })
      console.log(posts)
    } catch (err) {
      res.status(500).json(err);
    }
  },
// GET SINGLE POST AND COMMENT
  getSinglePostComment: async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.post_id, {
        include: [User]
      });
      const posts = postData.get({ plain: true });
      const commentData = await Comment.findAll({
        where: {post_id: req.params.post_id},
        include: [User, Post]
      });
      const comments = commentData.map((comment) => comment.get({ plain: true }));
      res.render('single-post-no-form', {
        posts,
        comments,
        username: req.session.username,
        loggedIn: req.session.loggedIn,
        user_id: req.session.user_id,
      })
    } catch (err) {
      res.status(500).json(err);
    }
  },

// GET SINGLE POST PAGE FOR EDIT DELETE
  getSinglePostDeleteUpdate: async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.post_id, {
        include: [User]
      });
      const posts = postData.get({ plain: true });
      res.render('single-post-delete-update', {
        posts,
        username: req.session.username,
        loggedIn: req.session.loggedIn,
        user_id: req.session.user_id,
      })
      console.log(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

// UPDATE A SINGLE POST
  updateSinglePost: async (req, res) => {
    const {
      body: {
        title,
        description,
      },
      session: {
        user_id
      }
    } = req;
    try {
      const postData = await Post.update(
      {
        title,
        description,
        user_id
      },
      {
        where: {
          post_id: req.params.post_id,
        },
      }
      );
      if (!postData) {
        return res.status(404).json({ error: 'Post not found.' });
      }
      res.status(200).json(postData);
      console.log('>>>>>> Post Data' + postData)
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong.' });
    }
  },

//DELETE A SINGLE POST
  deleteSinglePost: async (req, res) => {
    try {
      const postDelete = await Post.destroy(
        {
          where: {
            post_id: req.params.post_id,
          },
        }
      );
      console.log(req.params)
      res.json(postDelete)
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
