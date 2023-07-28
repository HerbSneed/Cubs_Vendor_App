const session = require('express-session');

module.exports = {
  getAllEft: async (req, res) => {
    try {
      const eftData = await Eft.findAll({
        include: [Vendor, User, Invoice]
      }),
      const eft = eftData.map((eft) => eft.get({ plain: true }));
      res.status(200).json(eftData);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

