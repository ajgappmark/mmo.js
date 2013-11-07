/* 
entity.js
Entity object for representing interactive game world objects
mmo.js
Copyright (C) bobbybee 2013
ALL RIGHTS RESERVED
*/

function Entity(class, conn){
	this.class = class; // a string for the class name, for distinguishing types of objects. Player is reserved for players, all others refer to extension-based entities
	this.conn = conn; // connection, all entity require them. For players, this is some sort of socket. For NPCs and game objects, this is an AI class

}


module.exports = Entity;
