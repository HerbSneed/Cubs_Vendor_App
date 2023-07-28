module.exports = {
  createEft: async (req, res) => {
    const {
      body: {
        bank_name,
        account_number,
        routing_number,
      },
      session: {
        vendor_id,
        user_id,
      }
    } = req;

    try {
      const eftData = await Eft.create({
        bank_name,
        account_number,
        routing_number,
        vendor_id,
        user_id
      })
      console.log(eftData);
      res.status(200).json(eftData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteEft: async (req, res) => {
    try {
      const eftDelete = await Eft.destroy(
        {
          where: {
            eft_id: req.params.eft_id,
          },
        } 
      );
    res.json(eftDelete)
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateEft: async (req, res) => {
    const {
      body: {
        bank_name,
        account_number,
        routing_number,
      },
      session: {
        vendor_id,
        user_id
      }
    } = req;
    try {
      const eftData = await Eft.update(
        {
          bank_name,
          account_number,
          routing_number,
        },
        {
          where: {
            eft_id: req.params.eft_id,
          },
        }
      );
      if (!eftData) {
        return res.status(404).json({ error: 'Eft data not found'})
      }
      res.status(200).json(eftData);
    } catch (err) {
      res.status(500).json({ error: 'Something went wrong in the Eft api controller'})
    }
  }
}

