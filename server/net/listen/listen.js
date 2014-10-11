/* listen.js
Protocol polyfill for listening for connections
mmo.js
*/

var RawTCPListen = require('./RawTCPListen');
var WebSocketListen = require('./WebSocketListen');
var Connection = require('../Connection');

module.exports = function(type, port, newConnection){
	this.listener = null;

	if(type == Connection.RAW_TCP){
		this.listener = new RawTCPListen(port, newConnection);
	} else if(type == Connection.WEB_SOCKETS){
        this.listener = new WebSocketListen(port, newConnection);
    } else {
		console.error("[FATAL] Inappropiate listener type: "+type);
	}
}
