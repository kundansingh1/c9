var http = require('http');
var port = process.argv[2];
var url  = require('url');

var server = http.createServer(function(req, res) {
    if(req.url === '/api/parsetime') {
        var recieveTime = url.query;
    } else if(req.url === '/api/unixtime') {
        
    }
    
    res.writeHead(200, {'Content-Type':'application/json'})
});

server.listen(port);