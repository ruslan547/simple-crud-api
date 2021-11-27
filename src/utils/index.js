const { getParams } = require('./paramsUtils');
const validationUtils = require('./validationUtils');

module.exports = {
  getParams,
  ...validationUtils
};
