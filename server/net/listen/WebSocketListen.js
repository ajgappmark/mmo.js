/* WebSocketListen.js
Listens for WebSocket connections
mmo.js
Copyright (C) bobbybee 2013
ALL RIGHTS RESERVED
*/

var http = require('http');
var WebSocketServer = require('websocket').server;
var Connection = require('../Connection');

module.exports = function(port, connectionHandler){
    this.port = port;
    
    this.httpServer = http.createServer(function(req, res){
        res.end("TO-DO: Implement toy webserver");
        console.log("t");
    }).listen(this.port);
    
    this.wsServer = new WebSocketServer({httpServer:this.httpServer});
    this.wsServer.on('request', function(req){
        console.log(req);
        
        var conn = req.accept(null, req.origin);
        
        console.log(conn);
        
        var connObj = new Connection.Connection(Connection.WEB_SOCKETS, conn);
        connObj.onConnect();
        
        conn.on('message', function(m){
           connObj.onData(m.utf8Data);
        });
        
        conn.on('end', function(){
            connObj.onEnd();
        });
        
        connectionHandler(connObj);
    });
};