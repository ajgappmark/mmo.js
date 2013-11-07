/* 
Connection.js
Connection object for mmo.js
MMO.js
Copyright (C) bobbybee 2013
ALL RIGHTS RESERVED
*/

// connection type enuumeration
// type of connection
module.exports.RAW_TCP = 0; // raw TCP connection using require('net');

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

Connection.prototype.send = function(data){
	if(this.type == module.exports.RAW_TCP){
		this.raw.write(data);	
	}
}

module.exports.Connection = Connection;
