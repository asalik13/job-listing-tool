const { Sequelize } = require('sequelize');

// Extract database uri from environmental variables
require('dotenv').config();
const DATABASE_URI = process.env.DATABASE_URI;

const sequelize = new Sequelize(DATABASE_URI,{
  logging: false,
  dialect: 'postgres',
  sqlConnectionSsl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

const modelDefiners = [
  require('./Models/Employee'),
  require('./Models/Position'),
  require('./Models/Referral'),
];

for (const modelDefiner of modelDefiners) {
  sequelize.define(...modelDefiner);
}

require('./sequalizeConstraints')(sequelize);

module.exports = sequelize;