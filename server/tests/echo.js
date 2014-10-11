/* echo.js
A sample echo for testing listen.js. Telnet to localhost:1234 for testing
mmo.js
*/

var Connection = require("../net/Connection");
var listen = require("../net/listen/listen.js");

new listen(Connection.RAW_TCP, 1234, function(connection){
	connection.send("Hello!\n");

	connection.onData = function(d){
		connection.send("You said: "+d);	
	};
});
