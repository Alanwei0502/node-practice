var http = require('http');

http
  .createServer(function (request, response) {
    console.log(request.url);
    response.writeHeader(200, { 'Content-Type': 'text/plain' });
    response.write('hello!!');
    response.end();
  })
  .listen(8085);

http
  .createServer(function (request, response) {
    console.log(request.url);
    response.writeHeader(200, { 'Content-Type': 'text/html' });
    response.write('<h1>hello!!</h1>');
    response.end();
  })
  .listen(8083);
