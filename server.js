import WebSocket from 'ws';

const server = new WebSocket.Server({ port: 3000 });

server.on("connection", (socket) => {
    console.log("client connected");
    socket.on("message", (message) => {
        console.log("message received", message.toString());
        socket.send("hello from server");
    })

    socket.on("close", () => {
        console.log("client disconnected");
    });
});



console.log('WebSocket server is running on port 3000');

