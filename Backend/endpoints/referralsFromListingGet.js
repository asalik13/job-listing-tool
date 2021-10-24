const getReferrals = require('../databaseInteraction/getReferrals');
const {Express} = require('express');

// TODO: This should be a protected route, i.e., only hiring managers should be able to access this
// Should also verify if the company of the hiring manager is the same as the company of the listing


/**
 * Gets referrals for a given listingId
 * 
 * @param {Express} app The express instance to setup the endpoint on
 * @returns {void} Sets up the referrals get endpoint
 */
function referralsGet(app) {
  app.get('/api/referrals/:listingId', async (req, res) => {
    res.send(await getReferrals(req.params.listingId));
  });
}

module.exports = referralsGet;
