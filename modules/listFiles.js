var fs = require('fs');
var path = require('path');
var data = [];

module.exports = function (dirName, fileExt, callback) {
    fileExt = '.'+fileExt;
    
    fs.readdir(dirName, function(err, list) {
        if(err) {
            callback(err);
        }
        for (var i =0; i< list.length; i++ ) {
            var currentExt = path.extname(list[i]);
            if (currentExt == fileExt) {
                data.push(list[i]);
            }
        }
        callback(null, data);
    });
}