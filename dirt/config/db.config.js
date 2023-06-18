"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = exports.ModelEntity = exports.BrandEntity = exports.dbConnnection = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const gbKay_1 = require("./gbKay");
const brand_model_1 = require("../model/brand.model");
const model_model_1 = require("../model/model.model");
const user_model_1 = require("../model/user.model");
const db_port = gbKay_1.DB_PORT;
exports.dbConnnection = new sequelize_1.default.Sequelize(gbKay_1.DB_NAME, gbKay_1.DB_USERNAME, gbKay_1.DB_PASSWORD, {
    host: gbKay_1.DB_HOST,
    port: db_port,
    dialect: 'postgres'
});
exports.dbConnnection.sync({ alter: true });
exports.BrandEntity = (0, brand_model_1.BrandFactory)('brand', exports.dbConnnection);
exports.ModelEntity = (0, model_model_1.ModelFactory)('model', exports.dbConnnection);
exports.UserEntity = (0, user_model_1.UserFactory)('user', exports.dbConnnection);
exports.BrandEntity.sync();
exports.ModelEntity.sync();
exports.UserEntity.sync();
