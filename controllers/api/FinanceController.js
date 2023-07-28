module.exports = {
  createFinanceUser: async (req, res) => {
    const {
      body: {
        first_name,
        last_name,
      },
      session: {
        user_id,
      }
    } = req;

    try {
      const financeUserData = await Finance.create({
        first_name,
        last_name,
      })
      res.status(200).json(financeUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  createFinanceComment: async (req, res) => {
    const {
      body: {
        finance_vendor_comments,
      },
      session: {
        user_id,
      }
    } = req;

    try {
      const financeVenderCommentsData = await Finance.create({
        finance_vendor_comments,
      })
      res.status(200).json(financeVenderCommentsData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  ////// Next up Update and Delete Finance
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

