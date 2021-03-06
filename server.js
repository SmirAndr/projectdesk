const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static(__dirname + '/public'))

function onConnection(socket) {
	socket.on('drawing', data => socket.broadcast.emit('drawing', data))
}

io.on('connection', onConnection)

const port = process.env.PORT || 3000
http.listen(port, () =>
	console.log('listening on port http://localhost' + port)
)
