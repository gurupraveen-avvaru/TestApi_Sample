/**
*   Server file, to respond client requests.
**/
var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = process.env.PORT || 3000;

app.use(express.static('webcontent'));

server.listen(port, function () {
    console.log('Updated : Server listening at port %d', port);
});