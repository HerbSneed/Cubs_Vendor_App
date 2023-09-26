const Vendor = require('../../models/vendor');
const nodemailer = require('nodemailer');
const exceljs = require('exceljs');
const { Buffer } = require('buffer');

const transporter = nodemailer.createTransport({
  service: 'Outlook',
  auth: {
    user: 'twistedtech2323@outlook.com',
    pass: 'Sneed2628191931$',
  }
});

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
        bank_name,
        account_number,
        routing_number
      },
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
        bank_name,
        account_number,
        routing_number
      });

      const workbook = new exceljs.Workbook();
      const worksheet = workbook.addWorksheet('Vendor Data');
      const labels = [
        { text: 'Vendor Name', bold: true },
        { text: 'Contact First Name', bold: true },
        { text: 'Contact Last Name', bold: true },
        { text: 'Contact Middle Intial', bold: true },
        { text: 'Tax Id', bold: true },
        { text: 'Contact Phone Number', bold: true },
        { text: 'Remittance Address', bold: true },
        { text: 'City', bold: true },
        { text: 'State', bold: true },
        { text: 'Zip Code', bold: true },
        { text: 'Country', bold: true },
        { text: 'Remittance Email', bold: true },
        { text: 'Service Provided', bold: true },
        { text: 'Minority Ownership', bold: true },
        { text: 'Authorized Name', bold: true },
        { text: 'Authorized Phone Number', bold: true },
        { text: 'Authorized Signature', bold: true },
        { text: 'Bank Name', bold: true },
        { text: 'Account Number', bold: true },
        { text: 'Routing Number', bold: true },
      ];

      worksheet.addRow(labels.map(label => label.text));
      worksheet.getRow(1).font = { bold: true };

      worksheet.addRow([
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
        bank_name,
        account_number,
        routing_number
      ]);

      worksheet.columns.forEach(function (column, i) {
        if (i !== 16) { 
          let maxLength = 0;
          column.eachCell({ includeEmpty: true }, function (cell) {
            const columnLength = cell.value ? cell.value.toString().length : 10;
            if (columnLength > maxLength) {
              maxLength = columnLength;
            }
          });
          column.width = maxLength < 10 ? 10 : maxLength;
        }
      });

      const buffer = await workbook.xlsx.writeBuffer();

      const mailOptions = {
        from: "twistedtech2323@outlook.com",
        to: "drgreenthumbs79@gmail.com",
        subject: `New Vendor Alert for ${vendorData.vendor_name}`,
        text: `${vendorData.vendor_name} has signed up as a new vendor.`,
        attachments: [{
          filename: `${vendorData.vendor_name} vendor_data.xlsx`,
          content: buffer,
        }],
      };

      try {
        const info = await transporter.sendMail(mailOptions);
        if (info.messageId) {
          console.log('success!')
        } else {
          res.status(500).json({ error: 'Email could not be sent' });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Issue with nodemailer' });
      }

      res.status(200).json(vendorData);
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
