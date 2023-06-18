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
exports.ModelController = void 0;
const response_1 = require("../services/response");
const model_api_1 = require("./api/model.api");
class ModelController {
    constructor() { }
    Create(req, res) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let params = req.body;
                const func = new model_api_1.CreateModel();
                func.Init(params).then(run => {
                    // console.log(`run`, run)
                    if (run != 'success')
                        throw new Error(run);
                    (0, response_1.Res_Client)([], 'success', 200, res);
                }).catch(error => (0, response_1.Res_Client)([], error.message, 400, res));
            }
            catch (error) {
                resolve(error.message);
            }
        }));
    }
    Update(req, res) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let params = req.body;
                const func = new model_api_1.UpdateModel();
                func.Init(params).then(run => {
                    if (!run)
                        throw new Error(run);
                    (0, response_1.Res_Client)(run.rows, 'success', 200, res);
                }).catch(error => (0, response_1.Res_Client)([], error.message, 400, res));
            }
            catch (error) {
                resolve(error.mesage);
            }
        }));
    }
    GetAll(req, res) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const func = new model_api_1.GetAllModel();
                func.Init().then(run => {
                    if (!run)
                        throw new Error(run);
                    (0, response_1.Res_Client)(run, 'success', 200, res);
                }).catch(error => (0, response_1.Res_Client)([], error.mesage, 200, res));
            }
            catch (error) {
                resolve(error.mesage);
            }
        }));
    }
}
exports.ModelController = ModelController;
