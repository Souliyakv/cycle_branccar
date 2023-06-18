"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_api_1 = require("./api/user.api");
const response_1 = require("../services/response");
class UserController {
    constructor() { }
    Insert(req, res) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let params = req.body;
                const func = new user_api_1.AddUser();
                func.Init(params).then(run => {
                    if (run != 'success')
                        throw new Error(run);
                    (0, response_1.Res_Client)(run, 'success', 200, res);
                }).catch(error => (0, response_1.Res_Client)([], error.message, 400, res));
            }
            catch (error) {
                resolve('success');
            }
        }));
    }
    Login(req, res) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let params = req.body;
                const func = new user_api_1.Login();
                func.Init(params).then(run => {
                    if (!run)
                        throw new Error(run);
                    (0, response_1.Res_Client)(run, 'success', 200, res);
                }).catch(error => (0, response_1.Res_Client)([], 'username or password invalid', 200, res));
            }
            catch (error) {
                resolve(error.meassage);
            }
        }));
    }
}
exports.UserController = UserController;
