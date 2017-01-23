(function () {
    'use strict';

    window.onload = function () {
        const socket = io.connect('http://localhost:9000');
        socket.emit('start messaging');

        socket.on('message', function (data) {
            addElementToList('string-list', data.string);
        });

        socket.on('error', function (error) {
            console.error(error);
        });
    };

    function addElementToList(listId, elementText) {
        let ol = document.getElementById(listId);
        let li = document.createElement('li');
        let liText = document.createTextNode(elementText);

        li.appendChild(liText);
        ol.appendChild(li);
    }
}());
