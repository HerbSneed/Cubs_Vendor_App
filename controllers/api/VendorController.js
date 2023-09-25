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
      console.log('authorized_signature:', authorized_signature);
      const signatureBuffer = await new Promise((resolve, reject) => {
        // Assuming authorized_signature is a base64 string
        const buffer = Buffer.from(authorized_signature, 'base64');
        if (buffer) {
          resolve(buffer);
        } else {
          reject('Invalid image data');
        }
      });

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
        authorized_signature: signatureBuffer,
        bank_name,
        account_number,
        routing_number
      });

      const workbook = new exceljs.Workbook();
      const worksheet = workbook.addWorksheet('Vendor Data');
      const signatureImageId = workbook.addImage({
        base64: authorized_signature.toString('base64'),
        extension: 'png',
      });

      worksheet.addImage(signatureImageId, {
        tl: { col: 16, row: 0 }, // Adjust col and row as needed
        ext: { width: 100, height: 25 }, // Adjust col and row as needed
      });

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
        '',
        bank_name,
        account_number,
        routing_number
      ]);

      worksheet.columns.forEach((column, columnIndex) => {
        let maxWidth = 0;
        let maxHeight = 1; // Minimum height

        column.eachCell({ includeEmpty: true }, (cell) => {
          const text = cell.value ? cell.value.toString() : '';
          const lines = text.split('\n');
          const length = lines.length;

          // Calculate the maximum content width in the column
          if (length > 1) {
            lines.forEach((line) => {
              const lineLength = line.length;
              if (lineLength > maxWidth) {
                maxWidth = lineLength;
              }
            });
          } else if (text.length > maxWidth) {
            maxWidth = text.length;
          }

          // Calculate the maximum content height in the column
          if (length > maxHeight) {
            maxHeight = length;
          }
        });

        // Set the column width and height based on the maximum content dimensions
        column.width = maxWidth < 10 ? 10 : maxWidth + 2; // Adjust the width as needed
        worksheet.getRow(maxHeight).height = 20; // Adjust the height as needed
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
