"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.respondNotFound = void 0;
const respondNotFound = (res) => {
    res.status(404);
    res.send('Not found');
};
exports.respondNotFound = respondNotFound;
