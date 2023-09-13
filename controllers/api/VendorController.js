const { Vendor } = require('../../models/');

module.exports = {
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
      authorized_signature,
      }
    } = req;
    try {
      const vendorData = await Vendor.create({
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
        authorized_signature,
      });
      console.log(vendorData)
      res.status(200).json(vendorData);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};