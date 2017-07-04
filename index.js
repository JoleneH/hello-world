const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000);

/*
 * Raw nodejs http server
*/
// const http = require('http');
//
// const server = http.createServer(function(req, res) {
//   console.log('Handling response');
//   res.end('Hello world');
// });
//
// server.listen(3000, function() {
//   console.log('Server listening on port 3000');
// });
