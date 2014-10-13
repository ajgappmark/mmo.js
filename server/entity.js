/* 
entity.js
Entity object for representing interactive game world objects
mmo.js
*/

var Protocol = require("./net/Protocol");
var ConnectionAsEntity = require("./ConnectionAsEntity");

function Entity(className, ai, conn){
	this.class = className; // a string for the class name, for distinguishing types of objects. Player is reserved for players, all others refer to extension-based entities
	this.ai = new ai(ConnectionAsEntity(conn)); // the ai for the object. This is an extension for handling the server-side logic of the entity;
	
	if(this.class == "Player")
		this.send = conn.send; // connection, all entity require them. For players, this is some sort of socket. For NPCs and game objects, this is an AI class
	else
		this.send = this.ai.receive;
}

Entity.prototype.trigger = function(e){
    this.send(Protocol.serialize(e));
}

module.exports = Entity;
