var fs = require('fs');
var path = require('path');
var filepath = process.argv[2];
var extension = '.'+process.argv[3];

fs.readdir(filepath, function(err, list) {
    if(err) {
        throw Error(err);
    }
    for (var i =0; i< list.length; i++ ) {
        var currentExt = path.extname(list[i]);
        if (currentExt == extension) {
            console.log(list[i]);
        }
    }
});