const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');

module.exports = {
  getDashboardPage: async (req, res) => {
    res.render('dashboard', {
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
     });
  },

  getUserDashboard: async (req, res) => {
    try {
      const user_id = req.session.user_id;
      const userData = await User.findByPk(req.params.user_id, {
        include: [Post]
    });        
    if (!userData) {
        res.status(500).json({ message: 'No user found with this id!' });
        return;
    }
    const userPosts = userData.posts.map((post) => post.get({ plain: true }));
    console.log(userPosts)
    res.render('dashboard', { 
      userPosts,
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
    }); 
    } catch (err) {
      res.status(500).json(err);
    }
  },  
};
