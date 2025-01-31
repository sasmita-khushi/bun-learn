import WebSocket from "ws";

const client = new WebSocket('ws://localhost:3000');

client.on('open', () => {
    console.log('connected to server');
    client.send('Hello from client');
});
client.on('message', (message) => {
    console.log('Received:', message.toString());
    client.close();
});

client.on('close', () => {
    console.log('Disconnected from server');
});