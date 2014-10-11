/* RawTCPListen.js
Listens for RawTCP connections
mmo.js
*/

var net = require('net');
var Connection = require('../Connection');

module.exports = function(port, connectionHandler){
	this.port = port;

	net.createServer(function(conn){
		var connObj = new Connection.Connection(Connection.RAW_TCP, conn);
		connObj.onConnect(); // note: will never be called, due to no time for connection object initialization
		
		conn.on('data', function(d){
			connObj.onData(d.toString());
		});

		conn.on('end', function(){
			connObj.onEnd();
		});

		connectionHandler(connObj);
	}).listen(port);
}
