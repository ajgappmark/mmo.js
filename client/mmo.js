/*
mmo.js
mmo.js
WebSocket client
*/

function MMO(host, port){
    this.host = host ? host : "localhost";
    this.port = port ? port : 1337;

    this.isConnected = false;
    this.sock = null;
}

MMO.prototype.connect = function(){
    this.sock = new WebSocket("ws://"+this.host+":"+this.port);
        
    this.sock.onopen = this.onopen;
    this.sock.onclose = this.onclose;
    this.sock.onmessage = this.onmessage;
    this.sock.onerror = this.onerror;
};

MMO.prototype.onopen = function(e){
    this.isConnected = true;
    console.log("WebSocket connected");
};

MMO.prototype.onclose = function(e){
    this.isConnected = false;
    console.log("WebSocket disconnected");
};

MMO.prototype.onmessage = function(e){
    var message = Protocol.deserialize(e.data);
    
    console.log(message);
};

MMO.prototype.onerror = function(e){
    console.log("ERROR: ");
    console.log(JSON.stringify(e));
};

MMO.prototype.send = function(m){
    this.sock.send(Protocol.serialize(m));
};