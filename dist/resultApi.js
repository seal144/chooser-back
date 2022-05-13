"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class resultApi {
}
resultApi.addResult = (req, res) => {
    res.send('result Added');
};
resultApi.getResult = (req, res) => {
    res.send('results');
};
;
exports.default = resultApi;
