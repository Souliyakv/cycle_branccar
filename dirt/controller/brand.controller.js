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
exports.BrandController = void 0;
const brand_api_1 = require("./api/brand.api");
const response_1 = require("../services/response");
class BrandController {
    constructor() { }
    Insert(req, res) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let params = req.body;
                let func = new brand_api_1.CreateBrand();
                func.Init(params).then(run => {
                    if (run != 'success')
                        throw new Error(run);
                    (0, response_1.Res_Client)(run, 'success', 200, res);
                }).catch(error => (0, response_1.Res_Client)([], error.message, 400, res));
                resolve('success');
            }
            catch (error) {
                resolve(error.meassage);
            }
        }));
    }
    Update(req, res) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let params = req.body;
                const func = new brand_api_1.UpdateBrand();
                func.Init(params).then(run => {
                    // console.log(`run`,run)
                    if (run.message != 'success')
                        throw new Error(run);
                    (0, response_1.Res_Client)(run.rows, 'success', 200, res);
                }).catch(error => (0, response_1.Res_Client)([], error.meassage, 200, res));
            }
            catch (error) {
                resolve(error.meassage);
            }
        }));
    }
    AllBrand(req, res) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const func = new brand_api_1.GetallBrand();
                func.Init().then(run => {
                    if (run.message != 'success')
                        throw new Error(run);
                    (0, response_1.Res_Client)(run.rows, 'success', 200, res);
                }).catch(error => (0, response_1.Res_Client)([], 'brand is emptry', 200, res));
            }
            catch (error) {
                resolve(error.message);
            }
        }));
    }
}
exports.BrandController = BrandController;
