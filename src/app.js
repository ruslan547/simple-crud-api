const http = require('http');

const { getParams } = require('./utils');
const { personController } = require('./components')

const requestListener = (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  req.on('error', (err) => {
    res.writeHead(500);
    res.end(JSON.stringify(err))
  });

  switch (getParams(req.url)[0]) {
    case '':
      res.writeHead(200);
      res.end(JSON.stringify({ data: 'simple-crud-api' }));
      break;
    case 'person':
      personController(req, res);
      break;
    default:
      res.writeHead(404);
      res.end(JSON.stringify({ message: 'Not found' }));
  }
};

const server = http.createServer(requestListener);

server.listen(3000, (err) => {
  err
    ? console.error(err)
    : console.log(`listening port 3000`);
});
