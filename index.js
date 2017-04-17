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

var apps = {};

function startTicketMachine() {
	apps.ticketMachine = {};
	apps.ticketMachine.app = express();
	apps.ticketMachine.http = http.Server(apps.ticketMachine.app);

	apps.ticketMachine.app.use(express.static('public'));

	apps.ticketMachine.app.get('/', (req, res) => {
		res.sendFile(__dirname + '/public/ticket.html');
	});

	apps.ticketMachine.http.listen(settings.server.ticketPort, () => {
		// if (err) {
		// 	throw err;
		// }

		console.log("Ticket machine running on port %s.", settings.server.ticketPort);
	});

}

// We could start all the machines differently like this
startTicketMachine();