const Eft = require('./eft');
const Invoice = require('./invoice');
const Vendor = require('./vendor');
const Finance = require('./finance');

// Vendor.hasMany(Invoice, {
//   foreignKey: 'vendor_id',
//   onDelete: 'CASCADE',
// });

// Invoice.belongsTo(Vendor, {
//   foreignKey: 'vendor_id',
//   onDelete: 'CASCADE',
// });

// Eft.belongsTo(Vendor, {
//   foreignKey: 'vendor_id',
//   onDelete: 'CASCADE',
// });

// Finance.hasMany(Invoice, {
//   foreignKey: 'finance_id',
//   onDelete: 'CASCADE',
// });

// Invoice.belongsTo(Finance, {
//   foreignKey: 'finance_id',
//   onDelete: 'CASCADE',
// });

// Finance.hasMany(Vendor, {
//   foreignKey: 'finance_id',
//   onDelete: 'CASCADE',
// });

// Vendor.belongsTo(Finance, {
//   foreignKey: 'finance_id',
//   onDelete: 'CASCADE',
// })

module.exports = {
  Vendor,
  Eft,
  Invoice,
  Finance,
};
