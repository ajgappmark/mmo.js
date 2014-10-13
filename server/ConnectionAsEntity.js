var Protocol = require("./net/protocol");

module.exports = function(conn) {
	return {
		trigger: function(e) {
			conn.send(Protocol.serialize(e));
		}
	}
}