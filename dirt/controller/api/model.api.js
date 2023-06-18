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
exports.GetAllModel = exports.UpdateModel = exports.CreateModel = void 0;
const db_config_1 = require("../../config/db.config");
class CreateModel {
    constructor() { }
    Init(params) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                this.InitParms(params);
                const ValidateParams = this.ValidateParams();
                if (ValidateParams != 'success')
                    throw new Error(ValidateParams);
                const run = yield this.CreateModel();
                if (run != 'success')
                    throw new Error(run);
                resolve('success');
            }
            catch (error) {
                resolve(error.message);
            }
        }));
    }
    InitParms(params) {
        this.brandName = params.brandName;
        this.modelName = params.modelName;
    }
    ValidateParams() {
        if (!(this.brandName && this.modelName))
            return 'invalid paramiter';
        return 'success';
    }
    CreateModel() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = {
                    brandName: this.brandName,
                    modelName: this.modelName
                };
                // console.log(`data`, data)
                const model = yield db_config_1.ModelEntity.create(data);
                if (!model)
                    return resolve('false');
                resolve('success');
            }
            catch (error) {
                resolve(error.message);
            }
        }));
    }
}
exports.CreateModel = CreateModel;
class UpdateModel {
    Init(params) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                this.InitParams(params);
                const ValidateParams = this.ValidateParams();
                if (ValidateParams != 'success')
                    throw new Error(ValidateParams);
                const run = yield this.UpdateModel();
                if (run != 'success')
                    throw new Error(run);
                resolve(this.response);
            }
            catch (error) {
                resolve(error.message);
            }
        }));
    }
    InitParams(params) {
        this.brandName = params.brandName;
        this.modelName = params.modelName;
        this.id = params.id;
    }
    ValidateParams() {
        if (!(this.brandName && this.modelName && this.id))
            return 'invalid paramiter';
        return 'success';
    }
    UpdateModel() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const values = {
                    modelName: this.modelName,
                    brandName: this.brandName,
                };
                const update = yield db_config_1.ModelEntity.update(values, {
                    where: { id: this.id }
                });
                if (!update)
                    return resolve('false');
                this.response = {
                    rows: {
                        modelName: this.modelName,
                        brandName: this.brandName,
                    },
                    message: 'success'
                };
                resolve('success');
            }
            catch (error) {
                resolve(error.message);
            }
        }));
    }
}
exports.UpdateModel = UpdateModel;
class GetAllModel {
    constructor() { }
    Init() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const run = yield this.AllModel();
                if (run != 'success')
                    throw new Error(run);
                resolve(this.response);
            }
            catch (error) {
                resolve(error.message);
            }
        }));
    }
    AllModel() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const allModel = yield db_config_1.ModelEntity.findAll({
                    where: { isShow: true }
                });
                if (!allModel)
                    return resolve('model is empty');
                this.response = {
                    rows: allModel
                };
                // console.log(this.response);
                resolve('success');
            }
            catch (error) {
                resolve(error.message);
            }
        }));
    }
}
exports.GetAllModel = GetAllModel;
