"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIAccess = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const response_1 = require("./response");
const base_model_1 = require("../model/base.model");
const APIAccess = (req, res, next) => {
    try {
        const token = req.headers['token'] + '';
        if (!token)
            return (0, response_1.Res_Client)([], 'invalid token', 401, res);
        const validator = jsonwebtoken_1.default.verify(token, base_model_1.IKeys.jwtkey);
        if (!validator)
            return (0, response_1.Res_Client)([], 'token br thuek', 401, res);
        console.log(`validator`, validator);
        next();
    }
    catch (error) {
        (0, response_1.Res_Client)([], error.message, 500, res);
    }
};
exports.APIAccess = APIAccess;
