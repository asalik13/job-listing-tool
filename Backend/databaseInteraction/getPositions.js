const {models} = require('../sequelizeSetup/sequalizeConstructor');

/**
 * Gets Listings posted for a given company
 * 
 * @param {string} companyName The name of the company you are trying to find listings on
 * @returns {Promise<object?>} a promise evaluating to the user object, if found, otherwise null
 */
function getPositions(companyName) {
  return models.Position.findAll({
    where:{
      companyName:companyName
    },
    include: [{
      model: models.Employee, 
      as: 'manager', 
    }],
  });
}

module.exports = getPositions;