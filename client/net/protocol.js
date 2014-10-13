/*
protocol.js
The low-level event (de)serializing code
mmo.js
*/

// Protocol definition
// 11-8-13: currently using simple JSON

var Protocol = {};

Protocol.serialize = function(event){
    return JSON.stringify(event);
};

Protocol.deserialize = function(message){
    return JSON.parse(message);
};