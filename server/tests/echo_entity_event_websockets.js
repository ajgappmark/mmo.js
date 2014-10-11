/* echo_entity_event.js
A sample echo for testing listen.js, entity.js, protocol.js, event.js, and websockets. Telnet to localhost:1234 for testing
mmo.js
*/

var Connection = require("../net/Connection");
var listen = require("../net/listen/listen.js");
var Entity = require('../Entity');
var Event = require('../event');
var Protocol = require('../net/protocol');

function PlayerAI(player){
    this.player = player;
    this.lastMessage = "";
}
PlayerAI.prototype.receive = function(event){
   // this.player.conn.send("Before you sent: "+this.lastMessage+"\n");
    //this.player.conn.send("You just sent: "+event+"\n");
  //  this.player.conn.send(Protocol.serialize(new Event("previous", [this.lastMessage])));
//    this.player.conn.send(Protocol.serialize(new Event("current", [event.arguments["data"])));
    this.player.trigger(new Event("previous", {"message":this.lastMessage}));
    this.player.trigger(new Event("previous", {"message":events.arguments["message"]}));
    this.lastMessage = event.arguments["data"];
};


new listen(Connection.WEB_SOCKETS, 1337, function(connection){
    var player = new Entity("Player", connection, PlayerAI);
	connection.send("Hello!\n");

	connection.onData = function(d){
	//	connection.send("You said: "+d);
      //  player.ai.receive(d);
      try {
          player.ai.receive(Protocol.deserialize(d));
      } catch(e){
          console.log(e);
      }
    };
});
