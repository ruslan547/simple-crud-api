const http = require('http');

const requestListener = (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  req.on('error', (err) => {
    res.writeHead(500);
    res.end(JSON.stringify(err))
  });

  switch (req.url) {
    case '/':
      res.writeHead(200);
      res.end(JSON.stringify({ data: 'simple-crud-api' }));
      break;
    case '/person':
      res.writeHead(200);
      res.end('person');
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
