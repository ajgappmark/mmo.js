/* echo_entity.js
A sample echo for testing listen.js and entity.js. Telnet to localhost:1234 for testing
mmo.js
*/

var Connection = require("../net/Connection");
var listen = require("../net/listen/listen.js");
var Entity = require('../entity');

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
    var player = new Entity("Player", PlayerAI, connection);
	connection.send("Hello!\n");

	connection.onData = function(d){
	//	connection.send("You said: "+d);
        player.ai.receive(d);
	};
});
