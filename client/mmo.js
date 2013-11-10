/*
mmo.js
mmo.js
WebSocket client
Copyright (C) 2013 bobbybee
ALL RIGHTS RESERVED
*/

function MMO(host, port){
    this.host = host ? host : "localhost";
    this.port = port ? port : 1337;

    this.isConnected = false;
    this.sock = null;
}

MMO.prototype.connect = function(){
    this.sock = new WebSocket("ws://"+this.hort+":"+this.port);
        
    this.sock.onopen = this.onopen;
    this.sock.onclose = this.onclose;
    this.sock.onmessage = this.onmessage;
    this.sock.onerror = this.onerror;
};

MMO.prototype.onopen = function(e){
    
};

MMO.prototype.onclose = function(e){
    
};

MMO.prototype.onmessage = function(e){
    var message = Protocol.deserialize(e.data);
    
    console.log(message);
};

MMO.prototype.onerror = function(e){
    
};

MMO.prototype.send = function(m){
    this.sock.send(Protocol.serialize(m));
};