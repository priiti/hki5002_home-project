var express = require('express');
var http = require('http');
var socketio = require('socket.io');

var settings = {
	server: {
		ticket: 3000,
		info: 3001,
		doctor: 3002
	}
};

var connection = null;

class Server {
	constructor(port, path) {
		this.port = port;
		this.app = express();
		this.http = http.Server(this.app);
		this.path = path;
	}

	startServer() {
		this.app.use(express.static('public'));
		this.app.get('/', (req, res) => {
			res.sendFile(__dirname + this.path);
		});
		this.http.listen(this.port, (err) => {
			if (err) throw err;
			console.log("Ticket Server running on port %s.", this.port);
		})
	}
}

const ticketStation = new Server(settings.server.ticket, '/public/ticket.html');
const informationTable = new Server(settings.server.info, '/public/info.html');
const doctorScreen = new Server(settings.server.doctor, '/public/doctor.html');

ticketStation.startServer();
informationTable.startServer();
doctorScreen.startServer();