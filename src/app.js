const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'simple-crud-api'
  }));
});

server.listen(3000, (err) => {
  err ? console.log(err) : console.log(`listening port 3000`);
});
