/* listen.js
Protocol polyfill for listening for connections
mmo.js
Copyright (C) bobbybee 2013
ALL RIGHTS RESERVED
*/

var RawTCPListen = require('./RawTCPListen');
var Connection = require('../Connection');

module.exports = function(type, port, newConnection){
	this.listener = null;

	if(type == Connection.RAW_TCP){
		this.listener = new RawTCPListen(port, newConnection);
	} else {
		console.error("[FATAL] Inappropiate listener type: "+type);
	}
}
