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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.AddUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_config_1 = require("../../config/db.config");
const base_model_1 = require("../../model/base.model");
class AddUser {
    constructor() { }
    Init(params) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                this.InitParams(params);
                const ValidateParams = this.ValidateParams();
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
        this.username = params.username;
        this.password = params.password;
        this.phonenumber = params.phonenumber;
    }
    ValidateParams() {
        if (!(this.username && this.password && this.phonenumber))
            return 'invalid paramiter';
        return 'success';
    }
    Insert() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let data = {
                    username: this.username,
                    // password: await bcrypt.hash(this.password, 5),
                    password: '',
                    phonenumber: this.phonenumber
                };
                const str = this.phonenumber + this.password;
                // console.log(`str add`, str);
                const encrypt = bcryptjs_1.default.hashSync(str, bcryptjs_1.default.genSaltSync());
                data.password = encrypt;
                const run = yield db_config_1.UserEntity.create(data);
                if (!run)
                    return resolve('false');
                resolve('success');
            }
            catch (error) {
                resolve(error.message);
            }
        }));
    }
}
exports.AddUser = AddUser;
class Login {
    constructor() { }
    Init(params) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                this.InitParams(params);
                const ValidateParams = this.ValidateParams();
                if (ValidateParams != 'success')
                    throw new Error(ValidateParams);
                const run = yield this.Login();
                // console.log(`run`, run)
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
        this.username = params.username;
        this.password = params.password;
    }
    ValidateParams() {
        if (!(this.username && this.password))
            return 'invalid paramiter';
        return 'success';
    }
    Login() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield db_config_1.UserEntity.findOne({
                    where: { username: this.username }
                });
                user = JSON.parse(JSON.stringify(user));
                // console.log(user.phonenumber);
                if (!user)
                    return resolve('username incorrect');
                const str = user.phonenumber + this.password;
                const validator = bcryptjs_1.default.compareSync(str, user.password);
                if (!validator)
                    return resolve('password incorrect');
                const tokenmodel = {
                    username: this.username,
                    phonenumber: user.phonenumber
                };
                const token = jsonwebtoken_1.default.sign(tokenmodel, base_model_1.IKeys.jwtkey, { expiresIn: '5d' });
                this.response = {
                    token: token
                };
                resolve('success');
            }
            catch (error) {
                resolve(error.message);
            }
        }));
    }
}
exports.Login = Login;
