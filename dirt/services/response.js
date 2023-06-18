"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Res_Client = void 0;
const Res_Client = (data, message, status, res) => {
    res.send({ data: data, message: message, ststus: status });
};
exports.Res_Client = Res_Client;
