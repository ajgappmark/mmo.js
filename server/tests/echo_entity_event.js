/* echo_entity_event.js
A sample echo for testing listen.js, entity.js, protocol.js, event.js. Telnet to localhost:1234 for testing
mmo.js
*/

var Connection = require("../net/Connection");
var listen = require("../net/listen/listen.js");
var Entity = require('../entity');
var Event = require('../event');
var Protocol = require('../net/protocol');

function PlayerAI(player){
    this.player = player;
    this.lastMessage = "";
}
PlayerAI.prototype.receive = function(event){
    console.log(event);
    this.player.trigger(new Event("previous", {"message":this.lastMessage}));
    this.player.trigger(new Event("current", {"message":event.arguments["message"]}));
    this.lastMessage = event.arguments["message"];
};


new listen(Connection.RAW_TCP, 1234, function(connection){
    var player = new Entity("Player", PlayerAI, connection);
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
