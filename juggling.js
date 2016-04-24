var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var length = process.argv.length;
var lengthRev = 2;

var result = juggling(url1);

function juggling (url) {
    http.get(url, function(response) {
        var responseData = '';
        response.setEncoding('utf8');
        
        response.on('error', function(err) {
            throw Error(err);
        });
        response.on('data', function(data) {
            responseData += data;
        });
        response.on('end', function() {
            lengthRev++;
            console.log(responseData);
            if(lengthRev < length) {
                juggling(process.argv[lengthRev]);
            }
        });
    });
}