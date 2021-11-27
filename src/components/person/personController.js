const { getParams, validatePersonParams } = require('../../utils');
const {
  getAll,
  getById,
  create,
  update
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
    case 'POST':
      req.on('data', (chunk) => {
        const data = JSON.parse(chunk.toString());

        if (validatePersonParams(data)) {
          const person = create(data);

          if (person) {
            res.writeHeader(201);
            res.end(JSON.stringify(person));
          } else {
            res.writeHeader(500);
            res.end(JSON.stringify({ message: 'Not created' }))
          }
        } else {
          res.writeHeader(400);
          res.end(JSON.stringify({ message: 'Incorrect data' }))
        }
      });
      break;
    case 'PUT':
      req.on('data', (chunk) => {
        const data = JSON.parse(chunk.toString());

        if (validatePersonParams(data)) {
          const person = update(personId, data);

          if (person) {
            res.writeHeader(204);
            res.end();
          } else {
            res.writeHeader(404);
            res.end(JSON.stringify({ message: 'Not found' }))
          }
        } else {
          res.writeHeader(400);
          res.end(JSON.stringify({ message: 'Incorrect data' }))
        }
      });
      break;
  }
};
