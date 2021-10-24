const getPositions = require('../databaseInteraction/getPositions');
const {Express} = require('express');

/**
 * Sets up the login endoint
 * 
 * @param {Express} app The express instance to setup the endpoint on
 * @returns {void} Sets up the login endpoint
 */
function listingsPost(app) {
  app.post('/api/listings', async (req, res) => {
    const company = req.body.company;
    if(!company){
      res.status(400);
      res.send({ Error: 'No company sent to look for listings' });
      return;
    }
    
    positions = await getPositions(company)

    res.send(JSON.parse(JSON.stringify(positions)));
  });
}

module.exports = listingsPost;
