// const sequelize = require('../config/connection');

// const { User, Eft, Finance, Invoice, Vendor } = require('../models');

// // const userSeeds = require('./user-seeds.json');
// const eftSeeds = require('./eft-seeds.json')
// const financeSeeds = require('./finance-seeds.json');
// const invoiceSeeds = require('./invoice-seeds.json');
// const vendorSeeds = require('./vendor-seeds.json');


// const seedDatabase = async () => {

//   await sequelize.sync({ force: true });
//   console.log('\n----- DATABASE SYNCED -----\n');

//   await User.bulkCreate(userSeeds);
//   console.log('\n----- USER SEEDED -----\n');

//   await Vendor.bulkCreate(vendorSeeds);
//   console.log('\n----- VENDOR SEEDED -----\n');

//   await Invoice.bulkCreate(invoiceSeeds);
//   console.log('\n----- INVOICE SEEDED -----\n');

//   await Finance.bulkCreate(financeSeeds);
//   console.log('\n----- FINANCE SEEDED -----\n');

//   await Eft.bulkCreate(eftSeeds);
//   console.log('\n----- EFT SEEDED -----\n');

//   process.exit(0);
// };

// seedDatabase();