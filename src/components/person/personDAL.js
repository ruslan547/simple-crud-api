const { personDb } = require('./db');

exports.getAll = () => personDb.getAll();

exports.getById = (personId) => personDb.getById(personId);

exports.create = (person) => personDb.push(person);

exports.update = (personId, data) => personDb.put(personId, data);

exports.deleteById = (personId) => personDb.delete(personId);
