
const { Vendor } = require('../../models');

module.exports = {
  // CREATE new vendor
  newVendor: async (req, res) => {
    const {
      body: {
        vendor_name,
        contact_name,
        tax_id,
        phone_number,
        remittance_address,
        city,
        state,
        zip_code,
        country,
        remittance_email,
        service_provided,
        minority_ownership,
        authorized_name,
        authorized_phone_number,
        authorized_signature
      },
    } = req;
    try {
      const vendorData = await Vendor.create(req.body);
      res.status(200).json(vendorData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};