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
exports.GetallBrand = exports.UpdateBrand = exports.CreateBrand = void 0;
const db_config_1 = require("../../config/db.config");
class CreateBrand {
    constructor() { }
    Init(params) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                this.InitParams(params);
                let ValidateParams = this.ValidateParams();
                if (ValidateParams != 'success')
                    throw new Error(ValidateParams);
                const run = yield this.Insert();
                if (run != 'success')
                    throw new Error(run);
                resolve('success');
            }
            catch (error) {
                resolve(error.meassage);
            }
        }));
    }
    InitParams(params) {
        this.brandName = params.brandName;
    }
    ValidateParams() {
        if (!(this.brandName))
            return 'paramiter invalid';
        return 'success';
    }
    Insert() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = {
                    brandName: this.brandName
                };
                const run = yield db_config_1.BrandEntity.create(data);
                if (!run)
                    return resolve('false');
                resolve('success');
            }
            catch (error) {
                resolve(error.meassage);
            }
        }));
    }
}
exports.CreateBrand = CreateBrand;
class UpdateBrand {
    constructor() { }
    Init(params) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                this.InitParams(params);
                const ValidateParams = this.ValidateParams();
                if (ValidateParams != 'success')
                    throw new Error(ValidateParams);
                const run = yield this.Update();
                if (run != "success")
                    throw new Error(run);
                resolve(this.response);
            }
            catch (error) {
                resolve(error.meassage);
            }
        }));
    }
    InitParams(params) {
        this.brandName = params.brandName;
        this.id = params.id;
    }
    ValidateParams() {
        if (!(this.brandName && this.id))
            return 'invalid paramiter';
        return 'success';
    }
    Update() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                // const values = {
                //     brandName: this.brandname
                // };
                const update = yield db_config_1.BrandEntity.update({ brandName: this.brandName }, {
                    where: { id: this.id }
                });
                // console.log(`update`, update)
                if (!update)
                    return resolve('false');
                this.response = {
                    rows: this.brandName,
                    message: 'success'
                };
                resolve('success');
            }
            catch (error) {
                resolve(error.meassage);
            }
        }));
    }
}
exports.UpdateBrand = UpdateBrand;
class GetallBrand {
    constructor() { }
    Init() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const run = yield this.GetAll();
                if (run != 'success')
                    throw new Error(run);
                resolve(this.response);
            }
            catch (error) {
                resolve(error.meassage);
            }
        }));
    }
    GetAll() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const allBrand = yield db_config_1.BrandEntity.findAll({
                    attributes: ['id', 'brandName'],
                    where: {
                        isShow: true
                    }
                });
                if (!allBrand)
                    return resolve('false');
                this.response = {
                    rows: allBrand,
                    message: 'success'
                };
                resolve('success');
            }
            catch (error) {
                resolve(error.meassage);
            }
        }));
    }
}
exports.GetallBrand = GetallBrand;
