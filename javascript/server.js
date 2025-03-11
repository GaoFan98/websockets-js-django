const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/chat/:room', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'room.html'));
});

const wss = new WebSocket.Server({ server });

const rooms = {};

wss.on('connection', (ws, req) => {
    const url = new URL(req.url, 'http://localhost');
    const pathParts = url.pathname.split('/');
    if (pathParts.length >= 4 && pathParts[1] === 'ws' && pathParts[2] === 'chat') {
        const roomName = pathParts[3];

        if (!rooms[roomName]) {
            rooms[roomName] = new Set();
        }

        rooms[roomName].add(ws);
        ws.roomName = roomName;

        broadcastToRoom(roomName, JSON.stringify({
            message: 'A user has joined the chat',
            username: 'System',
            event: 'join'
        }));

        ws.on('message', (message) => {
            try {
                broadcastToRoom(roomName, message.toString());
            } catch (error) {
                console.error('Error handling message:', error);
            }
        });

        ws.on('close', () => {
            if (rooms[roomName]) {
                rooms[roomName].delete(ws);

                if (rooms[roomName].size === 0) {
                    delete rooms[roomName];
                } else {
                    broadcastToRoom(roomName, JSON.stringify({
                        message: 'A user has left the chat',
                        username: 'System',
                        event: 'leave'
                    }));
                }
            }
        });
    }
});

function broadcastToRoom(roomName, message) {
    if (rooms[roomName]) {
        rooms[roomName].forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    }
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 