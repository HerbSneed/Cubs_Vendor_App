const bcrypt = require('bcrypt');

module.exports = {
  //GET SIGN UP PAGE
  getSignupPage: async (req, res) => {
    res.render('signup');
  },
  getLoginPage: async (req, res) => {
    res.render('login');
  },

  // CREATE new user
  register: async (req, res) => {
    const {
      body: {
        username,
        password
      },
    } = req;
    try {
      const user = await User.create(req.body);
      delete user.password;
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.username = user.username;
        req.session.user_id = user.user_id,
        res.status(200).json(user);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // LOGIN user
  login: async (req, res) => {
    const {
      body: {
        username,
        password
      },
    } = req;
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      req.session.loggedIn = true;
      req.session.username = user.username;
      req.session.user_id = user.user_id; 
      await req.session.save();
      res.status(200).json({
        user: username,
        user_id: req.session.user_id,
        loggedIn: req.session.loggedIn,
        message: 'You are now logged in!'
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // LOGOUT user
  logout: (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  },
};