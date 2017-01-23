'use strict';

const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
server.listen(9000);

const randomString = require('./randomString');
const randomStringGenerator = new randomString.RandomString();

const path = require('path');

app.use(express.static('../client'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('../client/index.html'));
});

io.on('connection', function (socket) {
    socket.on('start messaging', function (data) {
        setInterval(sendMessage, 1000, socket);
    });
});

function sendMessage(socket) {
    let message = randomStringGenerator.getRandomString();
    console.log(message);

    socket.emit('message', {
        string: message
    });
}
