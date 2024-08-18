const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const Redis = require('ioredis');
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express();
const httpServer = createServer(app);
const redisCache = new Redis()
app.use(bodyParser.json());
const io = new Server(httpServer, {
    cors: {
        origin: process.env.FRONTEND_HOST_URL,
        methods: ["GET", "POST", "PUT"],
    }
});

io.on("connection", (socket) => {
    console.log('A user connected', socket.id);
    socket.on("setUserId", (userId) => {
        redisCache.set(userId, socket.id)
    })
});
// call this API from the submission service when evaluation queue is done, then fetch this and diplay accordingly on frontend
app.post('/sendPayload', async (req, res) => {
    const { userId, payload } = req.body;
    if (!userId || !payload) {
        return res.status(400).send("Invalid Request");
    }
    const socketId = await redisCache.get(userId);
    if (socketId) {
        io.to(socketId).emit('submissionPayloadResponse', payload);
        return res.send("Payload sent successfully");
    } else {
        return res.status(404).send("User not connected");
    }
});


httpServer.listen(process.env.PORT, () => {
    console.log(`Server on port ${process.env.PORT}`)
});