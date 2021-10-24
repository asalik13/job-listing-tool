const { DataTypes } = require('sequelize');

const ReferralSchema = {
  firstName : {
    type: DataTypes.STRING,
  },
  lastName : {
    type: DataTypes.STRING,
  },
  email : {
    type: DataTypes.STRING,
  },
  referralText : {
    type: DataTypes.STRING(1000),
  },
  listingId : {
    type: DataTypes.INTEGER,
  },
  companyName: {
    type: DataTypes.STRING,
  },
  authorId: {
    type: DataTypes.INTEGER
  },
};

module.exports = ['Referral', ReferralSchema];