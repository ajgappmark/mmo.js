/* echo_entity.js
A sample echo for testing listen.js and entity.js. Telnet to localhost:1234 for testing
mmo.js
Copyright (C) bobbybee 2013
ALL RIGHTS RESERVED
*/

var Connection = require("./Connection");
var listen = require("./listen/listen.js");
var Entity = require('./entity');

function PlayerAI(player){
    this.player = player;
    this.lastMessage = "";
}
PlayerAI.prototype.receive = function(event){
    this.player.conn.send("Before you sent: "+this.lastMessage+"\n");
    this.player.conn.send("You just sent: "+event+"\n");
    this.lastMessage = event;
};


new listen(Connection.RAW_TCP, 1234, function(connection){
    var player = new Entity("Player", connection, PlayerAI);
	connection.send("Hello!\n");

	connection.onData = function(d){
	//	connection.send("You said: "+d);
        player.ai.receive(d);
	};
});
