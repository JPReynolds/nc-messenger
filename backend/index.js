const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/index.html");
});

let interval;

io.on("connection", (socket) => {
  if (interval) {
    clearInterval(interval);
    interval = setInterval(() => getApiAndEmit(socket), 1000);
    socket.on("disconnect", () => {
      console.log("Client disconnected");
      clearInterval(interval);
    });
  }
  const getApiAndEmit = (socket) => {
    const response = new Date();
    socket.emit("FromAPI", response);
  };

  socket.on("chat message", (msg) => {
    if (interval) {
      clearInterval(interval);
      interval = setInterval(() => getApiAndEmit(socket), 1000);
      io.emit("chat message", msg);
    }
  });
});

http.listen(3030, () => {
  console.log("listening");
});

module.exports = http;
