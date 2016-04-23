var http = require('http');
var url = process.argv[2];
http.get(url, function(response) {
    response.setEncoding('utf8')
    response.on('error', function(err) {
        throw Error(err);
    });
    response.on('data', function(data) {
        console.log(data);
    });
    response.on('end', function(data) {
        process.exit();
    });
});