var http = require('http');
var url = process.argv[2];
var responseLength = 0;
var responseData = '';
http.get(url, function(response) {
    response.setEncoding('utf8')
    response.on('error', function(err) {
        throw Error(err);
    });
    response.on('data', function(data) {
        responseLength += data.length;
        responseData += data;
    });
    response.on('end', function(data) {
        console.log(responseLength);
        console.log(responseData);
        process.exit();
    });
});