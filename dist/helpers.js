"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.respondWithError = exports.respondNotFound = void 0;
const respondNotFound = (res) => {
    res.status(404);
    res.send('Not found');
};
exports.respondNotFound = respondNotFound;
const respondWithError = (res, error) => {
    res.status(400);
    res.json({ error });
};
exports.respondWithError = respondWithError;
