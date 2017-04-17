var express = require('express');
var http = require('http');
var socketio = require('socket.io');

var settings = {
	server: {
		ticketPort: 3000,
		infoTablePort: 3001,
		doctorPort: 3002
	}
};

var connection = null;

class Machine {
	constructor(port, path) {
		this.port = port;
		this.app = express();
		this.http = http.Server(this.app);
		this.path = path;
	}

	startMachine() {
		this.app.use(express.static('public'));
		this.app.get('/', (req, res) => {
			res.sendFile(__dirname + this.path);
		});
		this.http.listen(settings.server.ticketPort, () => {
			console.log("Ticket machine running on port %s.", settings.server.ticketPort);
		})
	}
}

const myConnection = new Machine(3000, '/public/ticket.html');
myConnection.startMachine();

