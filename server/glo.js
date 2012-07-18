var http = require('http');
var faye = require('faye');
var url = require('url');

var port = 8000;
var clientPort = 1337;

var wd = require('./world/world.js');
var ground = require('./world/ground.js');
var player = require('./player/player.js');

var bayeux = new faye.NodeAdapter({mount: '/nodedigger', timeout: 45}).listen(port);

var client = new faye.Client('http://localhost:' + port + '/nodedigger');

var commands = {
    list : function() {
	return [{'position': '59.435573, 18.030946', 'title': 'Maxis plejz'},
		{'position': '59.434920, 18.032470', 'title': 'Nathans plejz'},
		{'position': '56.505500, 12.947173', 'title': 'Mellbystrand'}];
    }
};

var srv = http.createServer(function (req, res) {
    res.writeHead(200, 
		  {'Content-Type': 'text/plain',
		   'Access-Control-Allow-Origin' : '*'});
    var path = url.parse(req.url).path;
    
    var args = path.split("/");
    var message = {playerName : args[1],
		   password: args[2],
		   command: args[3],
		  };
    
    var c = commands[message.command];
    if (typeof c != 'undefined') {
	res.end(c.call(this, message));	
    }
    res.end('Unrecognized command\n');
}).listen(port);