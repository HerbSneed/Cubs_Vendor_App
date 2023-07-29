const { Eft } = require('../../models');

module.exports = {
  newEft: async (req, res) => {
    const {
      body: {
        bank_name,
        account_number,
        routing_number,
      },
    } = req;
    console.log(req.body);
    try {
      const eftData = await Eft.create({
        bank_name,
        account_number,
        routing_number,
      })
      res.status(200).json(eftData);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}