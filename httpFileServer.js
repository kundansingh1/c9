var fs = require('fs');
var http = require('http');
var port = process.argv[2];
var location = process.argv[3];

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    var readStream = fs.createReadStream(location);
    readStream.pipe(response);
});

server.listen(port);