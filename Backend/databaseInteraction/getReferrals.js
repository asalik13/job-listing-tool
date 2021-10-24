const { models } = require('../sequelizeSetup/sequalizeConstructor');

/**
 * Gets Referrals created for a given listing
 * 
 * @param {number} listingId The id of the listing that you want to get referrals for
 * @returns {Promise<Array>} a promise evaluating to an array containing the referral objects
 */
function getReferrals(listingId) {

  return models.Referral.findAll({
    raw: true,
    where: {
      listingId: listingId
    }
  });
}

module.exports = getReferrals;