"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helpers_1 = require("./helpers");
const app = (0, express_1.default)();
app.set('x-powered-by', false);
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('hello!');
});
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
