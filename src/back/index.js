const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const router = require("./router");
const cors = require("cors");
const { addUser, removeUser, getUser, getUserInRoom } = require("./users");

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
};

const app = express();
const server = http.createServer(app);
const io = socketio(server, { cors: corsOptions });

const PORT = process.env.PORT || 8080;

app.use(router);

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    console.log("User left");
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has been disconnected`,
      });
    }
  });

  socket.on("join", ({ name, room }, callback) => {
    const { user, error } = addUser({ id: socket.id, name, room });
    if (error) return callback(error);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome home`,
    });

    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} joined` });

    socket.join(user.room);

    callback;
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });
});

server.listen(PORT, () => {
  console.log(`server is started on port ${PORT}`);
});
