const express = require("express");
const router = express.Router();
const { getRooms } = require("./users");

router.get("/", (req, res) => {
  res.send("Running");
});

router.get("/rooms", (req, res) => {
  const rooms = getRooms();
  res.send(rooms);
});

module.exports = router;
