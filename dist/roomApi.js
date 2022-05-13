"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class roomApi {
}
roomApi.createRoom = (req, res) => {
    res.send('created room');
};
roomApi.deleteRoom = (req, res) => {
    res.send('delatedted room');
};
roomApi.getRoomInfo = (req, res) => {
    res.send('room info');
};
roomApi.getRoomUsers = (req, res) => {
    res.send('room users');
};
roomApi.addGuest = (req, res) => {
    res.send('added guest');
};
roomApi.kickGuest = (req, res) => {
    res.send('user kicked');
};
;
exports.default = roomApi;
