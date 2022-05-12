"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultsCollection = exports.roomsCollection = exports.db = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const firebaseConfig_1 = __importDefault(require("./firebaseConfig"));
const firebaseApp = (0, app_1.initializeApp)(firebaseConfig_1.default);
exports.db = (0, firestore_1.getFirestore)(firebaseApp);
exports.roomsCollection = (0, firestore_1.collection)(exports.db, 'rooms');
exports.resultsCollection = (0, firestore_1.collection)(exports.db, 'results');
