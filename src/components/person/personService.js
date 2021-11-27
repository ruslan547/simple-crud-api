const personDAL = require('./personDAL');

exports.getAll = () => personDAL.getAll();

exports.getById = (personId) => personDAL.getById(personId);
