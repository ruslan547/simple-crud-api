const personDAL = require('./personDAL');
const { Person } = require('./model');

exports.getAll = () => personDAL.getAll();

exports.getById = (personId) => personDAL.getById(personId);

exports.create = (data) => personDAL.create(new Person(data));
