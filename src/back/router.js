const express = require("express");
const router = express.Router();
const {getRooms, getUserInRoom} = require("./users");

router.get("/", (req, res) => {
    res.send("Running");
});

router.get("/rooms", (req, res) => {
    const rooms = getRooms();
    const roomsWithUsers = rooms.map(room => {
        const users = getUserInRoom(room)
        return {room, users}
    })
    res.send(roomsWithUsers);
});

module.exports = router;
