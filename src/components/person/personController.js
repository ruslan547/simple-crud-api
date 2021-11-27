const { getParams } = require('../../utils');
const {
  getAll,
  getById
} = require('./personService');

exports.personController = (req, res) => {
  const personId = getParams(req.url)[1];

  switch (req.method) {
    case 'GET':
      if (personId) {
        const person = getById(personId);

        if (person) {
          res.writeHeader(200);
          res.end(JSON.stringify(person))
        } else {
          res.writeHeader(404);
          res.end(JSON.stringify({ message: 'Not found' }))
        }
      } else {
        res.writeHeader(200);
        res.end(JSON.stringify(getAll()));
      }
      break;
  }
};
