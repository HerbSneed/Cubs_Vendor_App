module.exports = {
  getHomepage: async (req, res) => {
      res.render('homepage')
  },
  getSubmittedPage: async (req, res) => {
      res.render('submitted')
  }
};
