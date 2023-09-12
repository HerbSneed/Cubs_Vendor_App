
const { Vendor } = require('../../models');

module.exports = {
  // CREATE new vendor
  newVendor: async (req, res) => {
    const {
      body: {
        vendor_name,
        contact_firstName,
        contact_lastName,
        contact_MiddleInt,
        tax_id,
        contact_phone_number,
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
      console.log(vendorData);
      res.status(200).json(vendorData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};