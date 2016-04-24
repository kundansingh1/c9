var net = require('net');
var portNumber = process.argv[2];
console.log(portNumber);

var server = net.createServer(function(socket) {
    var date = new Date();
    var msg = date.getFullYear()+'-'+('0' + date.getDate()).slice(-2)+'-'+('0' + date.getDate()).slice(-2)+' '+date.getHours()+':'+('0' + date.getDate()).slice(-2)+'\n';
    socket.end(msg);
});

server.listen(portNumber);
