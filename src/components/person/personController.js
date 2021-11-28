const {
  getParams,
  validatePersonParams,
  validateUuid
} = require('../../utils');
const {
  getAll,
  getById,
  create,
  update,
  deleteById
} = require('./personService');

exports.personController = (req, res) => {
  const personId = getParams(req.url)[1];

  switch (req.method) {
    case 'GET':
      if (personId) {
        if (validateUuid(personId)) {
          const person = getById(personId);

          if (person) {
            res.writeHeader(200);
            res.end(JSON.stringify(person));
          } else {
            res.writeHeader(404);
            res.end(JSON.stringify({ message: 'Not found' }));
          }
        } else {
          res.writeHeader(400);
          res.end(JSON.stringify({ message: 'id invalid' }));
        }
      } else {
        res.writeHeader(200);
        res.end(JSON.stringify(getAll()));
      }
      break;
    case 'POST':
      req.on('data', (chunk) => {
        let data;

        try {
          data = JSON.parse(chunk.toString());
        } catch (err) {
          res.writeHeader(400);
          res.end(JSON.stringify({ message: 'Incorrect data' }))
        }

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
      if (validateUuid(personId)) {
        req.on('data', (chunk) => {
          let data;

          try {
            data = JSON.parse(chunk.toString());
          } catch (err) {
            res.writeHeader(400);
            res.end(JSON.stringify({ message: 'Incorrect data' }))
          }

          if (validatePersonParams(data)) {
            const person = update(personId, data);

            if (person) {
              res.writeHeader(200);
              res.end(JSON.stringify(person));
            } else {
              res.writeHeader(404);
              res.end(JSON.stringify({ message: 'Not found' }))
            }
          } else {
            res.writeHeader(400);
            res.end(JSON.stringify({ message: 'Incorrect data' }))
          }
        });
      } else {
        res.writeHeader(400);
        res.end(JSON.stringify({ message: 'id invalid' }));
      }
      break;
    case 'DELETE':
      const deletedPerson = deleteById(personId);

      if (validateUuid(personId)) {
        if (deletedPerson) {
          res.writeHeader(204);
          res.end(JSON.stringify(deletedPerson));
        } else {
          res.writeHeader(404);
          res.end(JSON.stringify({ message: 'Not found' }));
        }
      } else {
        res.writeHeader(400);
        res.end(JSON.stringify({ message: 'id invalid' }));
      }

      break;
    default:
      res.writeHeader(405);
      res.end();
  }
};
