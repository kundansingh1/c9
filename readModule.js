var listFiles = require('./modules/listFiles');
var filepath = process.argv[2];
var extension = process.argv[3];

var files = listFiles(filepath, extension, function(err, data) {
   if(err) {
       console.log(err);
   }
   for (var i=0; i < data.length; i++) {
       console.log(data[i]);
   }
});
