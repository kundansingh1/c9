var fs = require('fs');
var path = process.argv[2];

fs.readFile(path, function(err, content) {
    // return content.toString('UTF-8').split('\n');
    if(err) {
        throw Error(err);
    }
    console.log(content.toString('UTF-8').split('\n').length -1);
});
