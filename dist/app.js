"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helpers_1 = require("./helpers");
const roomApi_1 = __importDefault(require("./roomApi"));
const resultApi_1 = __importDefault(require("./resultApi"));
const app = (0, express_1.default)();
app.set('x-powered-by', false);
app.use(express_1.default.json());
app.post('/room', roomApi_1.default.createRoom);
app.get('/room/:name', roomApi_1.default.getRoomInfo);
app.delete('/room/:name', roomApi_1.default.deleteRoom);
app.get('/room/:name/users', roomApi_1.default.getRoomUsers);
app.post('/room/:name/:userName', roomApi_1.default.addGuest);
app.patch('/room/:name/:userName', roomApi_1.default.kickGuest);
app.post('/result/:roomName', resultApi_1.default.addResult);
app.get('/result/:roomName', resultApi_1.default.getResult);
app.all('*', (req, res) => {
    (0, helpers_1.respondNotFound)(res);
});
app.use((res) => {
    res.status(500);
    res.send(`
    We have encountered an error and we were notified about it.
    We'll try to fix it as soon as possible.  
  `);
});
exports.default = app;
