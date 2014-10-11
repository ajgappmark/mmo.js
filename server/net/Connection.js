/* 
Connection.js
Connection object for mmo.js
MMO.js
*/

// connection type enuumeration
// type of connection
module.exports.RAW_TCP = 0; // raw TCP connection using require('net');
module.exports.WEB_SOCKETS = 1; // WebSocket connections using require('websocket')

/* Connection(type, raw)
type = connection type, see connection type enumeration
raw = the raw socket/websocket/etc object
*/

function Connection(type, raw){
	this.type = type;
	this.raw = raw;

	// listeners
	this.onConnect = function(){};
	this.onData = function(){};
	this.onEnd = function(){};
}

// cross-protocol send function
Connection.prototype.send = function(data){
	if(this.type == module.exports.RAW_TCP){
		this.raw.write(data);	
	} else if(this.type == module.exports.WEB_SOCKETS){
	    this.raw.send(data);
	}
}

module.exports.Connection = Connection;
